export async function drawCars(): Promise<void> {
    const container = document.querySelector('.container');
    if (container) {
        const carsContainer = document.createElement('div');
        carsContainer.classList.add('cars-container');
        container?.append(carsContainer);
    } else {
        console.error('Error: container element not found');
    }
}
