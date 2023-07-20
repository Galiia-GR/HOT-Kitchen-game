export function switchLayout() {
    const carsContainer = document.querySelector('.cars-container');
    const garageUI = document.querySelector('.garage');

    const buttonGarage = document.querySelector('.switch__garage');
    const buttonWinners = document.querySelector('.switch__winners');

    buttonGarage?.addEventListener('click', () => {
        garageUI?.classList.remove('delete');
        carsContainer?.classList.remove('delete');
    });

    buttonWinners?.addEventListener('click', () => {
        garageUI?.classList.add('delete');
        carsContainer?.classList.add('delete');
    });
}
