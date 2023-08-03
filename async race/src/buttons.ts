import { apiCarDelete, apiGarage, apiGetCar, apiUpdateCar, apiCreateCar, apiCarsPageCount } from './apiGarage';
import { fetchCarsUI } from './drawUI';
import { fetchWinners, apiWinners, apiWinnerDelete } from './apiWinners';
import { randomName, randomColor } from './getRandom';

const carsContainer = document.querySelector('.cars-container') as HTMLElement;
const tableContain = document.querySelector('.win-container') as HTMLElement;

const inputCreate = document.querySelector('.input-create__input') as HTMLInputElement;
const inputCreateColor = document.querySelector('.input-create__color') as HTMLInputElement;
const buttonCreate = document.querySelector('.input-create__button');

const inputUpdate = document.querySelector('.input-update__input') as HTMLInputElement;
const inputUpdateColor = document.querySelector('.input-update__color') as HTMLInputElement;
const buttonUpdate = document.querySelector('.input-update__button');

const buttonGenerate = document.querySelector('.input-button__generate') as HTMLElement;

let getIdSelect: number;

export function switchLayout() {
    const garageUI = document.querySelector('.garage');
    const winnersUI = document.querySelector('.winners');

    const buttonGarage = document.querySelector('.switch__garage');
    const buttonWinners = document.querySelector('.switch__winners');

    buttonGarage?.addEventListener('click', () => {
        garageUI?.classList.remove('delete');
        carsContainer?.classList.remove('delete');
        winnersUI?.classList.add('delete');
    });

    buttonWinners?.addEventListener('click', () => {
        garageUI?.classList.add('delete');
        carsContainer?.classList.add('delete');
        winnersUI?.classList.remove('delete');
    });
}
switchLayout();

document.addEventListener('click', (e) => {
    const buttonCar = e.target as HTMLElement;

    if (buttonCar.classList.contains('car-selectors__select')) {
        getIdSelect = Number(buttonCar.getAttribute('id'));

        apiGetCar(getIdSelect)
            .then((data) => {
                inputUpdate.value = data.name;
                inputUpdateColor.value = data.color;
            })
            .catch((error) => {
                console.error('Error getting car data:', error.message);
            });

        buttonUpdate?.addEventListener('click', async () => {
            if (inputUpdate.value !== '') {
                apiUpdateCar({ name: inputUpdate.value, color: inputUpdateColor.value }, getIdSelect).then(() => {
                    if (carsContainer) {
                        carsContainer.innerHTML = '';
                        fetchCarsUI(apiGarage);
                    }
                });
                inputUpdate.value = '';
            }
        });
    }

    if (buttonCar.classList.contains('car-selectors__remove')) {
        const getIdRemove = Number(buttonCar.getAttribute('id'));
        if (carsContainer) {
            carsContainer.innerHTML = '';
        }
        apiCarDelete(getIdRemove).then(() => fetchCarsUI(apiGarage));
        if (tableContain) {
            tableContain.innerHTML = '';
        }
        apiWinnerDelete(getIdRemove).then(() => {
            fetchWinners(apiWinners);
            apiCarsPageCount(1);
        });
    }
});

buttonCreate?.addEventListener('click', async () => {
    const newColorCreate = inputCreateColor.value;
    const newNameCreate = inputCreate.value;
    if (newNameCreate !== '') {
        apiCreateCar({ name: newNameCreate, color: newColorCreate }).then(() => {
            if (carsContainer) {
                carsContainer.innerHTML = '';
                fetchCarsUI(apiGarage);
                apiCarsPageCount(1);
            }
        });
        inputCreate.value = '';
    }
});

buttonGenerate?.addEventListener('click', async () => {
    for (let i = 0; i < 100; i++) {
        const name = randomName();
        const color = randomColor();
        apiCreateCar({ name: `${name}`, color: `${color}` });
    }
    if (carsContainer) {
        carsContainer.innerHTML = '';
    }
    fetchCarsUI(apiGarage);
    apiCarsPageCount(1);
});
