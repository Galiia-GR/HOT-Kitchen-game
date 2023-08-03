import { apiCarsPageCount } from './apiGarage';

const apiMotor = 'http://localhost:3000/engine';
let idStart: number;
let idAnim: number;
let idStop: number;
let time: number;
let idWin: number;
let isShowWinExecuted = false;

const buttonRace = document.querySelector('.input-button__race') as HTMLElement;
const buttonReset = document.querySelector('.input-button__reset') as HTMLElement;
const showWinner = document.querySelector('.show') as HTMLElement;

export const apiStartMotor = async (id: number): Promise<{ velocity: number; distance: number }> => {
    try {
        const response: Response = await fetch(`${apiMotor}?id=${id}&status=started`, { method: 'PATCH' });
        const data = response.json();
        return data;
    } catch (error) {
        console.error('Error starting motor:', (error as Error).message);
        throw error;
    }
};

export async function apiStopMotor(id: number): Promise<void> {
    try {
        const response: Response = await fetch(`${apiMotor}?id=${id}&status=stopped`, { method: 'PATCH' });
        await response.json();
    } catch (error) {
        console.error('Error stopping motor:', (error as Error).message);
    }
}

export async function apiDriveMotor(id: number): Promise<{ success: boolean }> {
    try {
        const response: Response = await fetch(`${apiMotor}?id=${id}&status=drive`, { method: 'PATCH' });

        if (response.status !== 200) {
            return { success: false };
        }

        const arrDrive = await response.json();
        return arrDrive;
    } catch (error) {
        console.error('Error driving motor:', (error as Error).message);
        return { success: false };
    }
}

function animation(car: HTMLElement, distance: number, duration: number) {
    let startTime = 0;
    idAnim = idStart;
    console.log(idAnim);

    function step(timestamp: number) {
        if (!startTime) {
            startTime = timestamp;
        }
        const progress = (timestamp - startTime) / duration;
        const translate: number = progress * distance;
        car.style.transform = `translateX(${translate}px)`;

        if (progress < 1) {
            idAnim = window.requestAnimationFrame(step);
        }
        if (progress >= 1 && !buttonReset.hasAttribute('disabled')) {
            showWin(car, duration);
        }
    }
    idAnim = window.requestAnimationFrame(step);
    return idAnim;
}

const startCar = async (idCar: number) => {
    try {
        const data = await apiStartMotor(idCar);
        const velocity = Number(data.velocity);
        const distance = Number(data.distance);
        time = distance / velocity;

        const car = document.getElementById(`img-${idCar}`);
        if (car instanceof HTMLElement) {
            const screenWidth = document.body.clientWidth;
            const positionCar = (screenWidth / 200) * 15;
            const distanceAnimation = screenWidth - positionCar;

            animation(car, distanceAnimation, time);

            const arrDrive = await apiDriveMotor(idCar);
            if (!arrDrive.success) {
                window.cancelAnimationFrame(idAnim);
            }
        }
    } catch (error) {
        console.error('Error starting car:', (error as Error).message);
    }
};

export const stopCar = (idCar: number) => {
    apiStopMotor(idCar)
        .then(() => {
            window.cancelAnimationFrame(idCar);
            const car = document.getElementById(`img-${idCar}`);
            if (car instanceof HTMLElement) {
                car.style.transform = 'translateX(0px)';
            }
        })
        .catch((error) => {
            console.error('Error starting car:', (error as Error).message);
        });
};

document.addEventListener('click', async (e) => {
    const button = e.target as HTMLElement;

    if (button.classList.contains('car-selectors__start')) {
        const buttonStart = button;
        const parent = button.parentNode;
        const buttonStop = parent?.querySelector('.car-selectors__stop');

        idStart = Number(button.getAttribute('id'));
        startCar(idStart);
        buttonStart.setAttribute('disabled', 'disabled');
        buttonStop?.removeAttribute('disabled');
    }

    if (button.classList.contains('car-selectors__stop')) {
        const buttonStop = button;
        const parent = button.parentNode;
        const buttonStart = parent?.querySelector('.car-selectors__start');
        idStop = Number(button.getAttribute('id'));
        stopCar(idStop);
        buttonStop.setAttribute('disabled', 'disabled');
        buttonStart?.removeAttribute('disabled');
    }
});

async function startRace(page: number) {
    try {
        const arrCarsPage = await apiCarsPageCount(page);
        arrCarsPage.forEach((el) => {
            const currentEl = el;
            startCar(currentEl.id);
        });
    } catch (error) {
        console.error('Error starting car:', (error as Error).message);
    }
}

async function stopRace(page: number) {
    try {
        const arrCarsPage = await apiCarsPageCount(page);
        arrCarsPage.forEach((el) => {
            const currentEl = el;
            stopCar(currentEl.id);
        });
    } catch (error) {
        console.error('Error starting car:', (error as Error).message);
    }
}

buttonRace?.addEventListener('click', () => {
    startRace(1)
        .then(() => {
            buttonRace.setAttribute('disabled', 'disabled');
            buttonReset?.removeAttribute('disabled');
        })
        .catch((error) => {
            console.error('Error starting the race:', error);
        });
});

buttonReset?.addEventListener('click', () => {
    stopRace(1)
        .then(() => {
            buttonReset.setAttribute('disabled', 'disabled');
            buttonRace?.removeAttribute('disabled');
            showWinner.innerHTML = '';
            isShowWinExecuted = false;
        })
        .catch((error) => {
            console.error('Error reseting the race:', error);
        });
});

async function showWin(carWin: HTMLElement, timeWin: number) {
    if (!isShowWinExecuted) {
        isShowWinExecuted = true;
        idWin = Number(carWin.dataset.car);
        console.log(idWin, carWin);
        let timetoShow = (timeWin / 1000).toFixed(2);
        let nameWinner = carWin.parentNode?.querySelector('.car__title')?.textContent;
        showWinner.innerHTML = `${nameWinner} winner - (${timetoShow}sec) !`;
    }
}
