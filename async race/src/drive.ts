const apiMotor = 'http://localhost:3000/engine';
let idStart: number;
let idAnim: number;
let time: number;

//  const buttonRace = document.querySelector('.input-button__race');

export const apiStartMotor = async (id: number): Promise<{ velocity: number; distance: number }> => {
    try {
        const response: Response = await fetch(`${apiMotor}?id=${id}&status=started`, { method: 'PATCH' });
        const data = response.json();
        console.log(data);
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
        console.log(arrDrive);
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
            const positionCar = (screenWidth / 100) * 15;
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

document.addEventListener('click', async (e) => {
    const button = e.target as HTMLElement;
    console.log(button);

    if (button.classList.contains('car-selectors__start')) {
        idStart = Number(button.getAttribute('id'));
        console.log(idStart);
        startCar(idStart);
    }
});
