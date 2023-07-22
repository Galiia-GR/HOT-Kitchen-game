import { apiCarDelete, apiGarage, fetchCarsUI, apiGetCar } from './apiGarage';

const inputUpdate = document.querySelector('.input-update__input') as HTMLInputElement;
const inputUpdateColor = document.querySelector('.input-update__color') as HTMLInputElement;

export function switchLayout() {
    const carsContainer = document.querySelector('.cars-container');
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

document.addEventListener('click', async (e) => {
    const buttonCar = e.target as HTMLElement;

    console.log(buttonCar);

    if (buttonCar.classList.contains('car-selectors__select')) {
        const getIdSelect = Number(buttonCar.getAttribute('id'));
        apiGetCar(getIdSelect).then((data: { name: string; color: string }) => {
            if (inputUpdate) inputUpdate.value = data.name;
            if (inputUpdateColor) inputUpdateColor.value = data.color;
        });
    }

    if (buttonCar.classList.contains('car-selectors__remove')) {
        const getIdRemove = Number(buttonCar.getAttribute('id'));
        const carsContainer = document.querySelector('.cars-container');
        if (carsContainer) carsContainer.innerHTML = '';
        apiCarDelete(getIdRemove).then(() => fetchCarsUI(apiGarage));
    }
});

//     idUpdateCar = Number(btn.dataset.select);
//     inputTextUpdate.disabled = false;
//     inputColorUpdate.disabled = false;
//     btnUpdate.disabled = false;

//     getCarAPI(idUpdateCar).then((item) => {
//         inputTextUpdate.value = item.name;
//         inputColorUpdate.value = item.color;
//     });
// }

// if (btn.classList.contains('car-options_remove')) {
//     const idButton = Number(btn.dataset.remove);
//     deleteCarAPI(idButton).then(() => updateCarsUI());

//     getAllWinnersAPI()
//         .then((arrAllWin) => {
//             arrAllWin.forEach((item: DescriptionCar) => {
//                 if (Number(item.id) === idButton) deleteWinnerAPI(idButton);
//             });
//         })
//         .then(() => updateWinnersUI());
// }
