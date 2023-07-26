const apiMotor = 'http://localhost:3000/engine';
let idtoStart: number;

//  const buttonRace = document.querySelector('.input-button__race');

export async function apiStartMotor(id: number): Promise<void> {
    try {
        const response: Response = await fetch(`${apiMotor}?id=${id}&status=started`, { method: 'PATCH' });
        await response.json();
    } catch (error) {
        console.error('Error starting motor:', (error as Error).message);
    }
}

export async function apiStopMotor(id: number) {
    try {
        const response: Response = await fetch(`${apiMotor}?id=${id}&status=stopped`, { method: 'PATCH' });
        const arrStop = await response.json();

        console.log(arrStop);
    } catch (error) {
        console.error('Error stopping motor:', (error as Error).message);
    }
}

export async function apiDriveMotor(id: number) {
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
document.addEventListener('click', async (e) => {
    const button = e.target as HTMLElement;
    console.log(button);

    if (button.classList.contains('car-selectors__start')) {
        idtoStart = Number(button.getAttribute('id'));
        console.log(idtoStart);
    }
});

// async function moveCar(carElement: HTMLElement, endPosition: number, steps: number): Promise<void> {
//     let currPosition = carElement.offsetLeft;
//     const updatePosition = async () => {
//         currPosition += steps;
//         carElement.style.transform = `translateX(${currPosition}px)`;

//         if (currPosition < endPosition) {
//             requestAnimationFrame(updatePosition);
//         } else {
//             requestAnimationFrame(updatePosition); // Resolve the promise when the animation is complete
//         }
//         requestAnimationFrame(updatePosition);
//     };

//     await updatePosition();
// }

// async function animateCar(
//     carElement: HTMLElement,
//     data: { velocity: number; distance: number },
//     endPosition: number
// ): Promise<void> {
//     const { velocity, distance } = data;
//     const duration = distance / velocity;
//     const frames = (duration / 1000) * 60;
//     const steps = (endPosition - carElement.offsetLeft) / frames;

//     await moveCar(carElement, endPosition, steps);
//     // this.stopCar();
// }
