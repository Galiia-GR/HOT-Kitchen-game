function createEl(tagName: string, className: string) {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    return el;
}

function createCarUI(color: string) {
    const svgCar = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 666.55878 236.45138">
<g id="layer1" transform="translate(2708.5 468.56)">
<g id="g4142">
<path id="path1742" d="m-2536.4-468.56 64.435 0.0538-0.1882 21.21-21.317 0.37635 0.081 21.129 21.183 0.37634 0.3764 21.237 257.77-0.0269 0.1344-21.344 21.398 0.0269 0.215 21.371 64.301 0.18817 0.215 21.317 64.301 0.18817 0.215 21.29 21.317 0.21505-0.027 42.796-21.344 0.21507-0.2151 21.317-64.355-0.0269-0.1344-42.688-21.21-0.45699-0.3763-21.21-85.645 0.0538-0.3764 21.183-21.21 0.37635-0.1344 42.769-258.01-0.0269-0.1344-42.688-21.21-0.45699-0.3763-21.21-85.645 0.0538-0.3764 21.183-21.21 0.37635-0.1344 42.769-42.876-0.0269-0.2419-21.344-21.317-0.21507 0.027-85.806 21.344-0.21506 0.215-21.317 64.301-0.18817 0.2151-21.317 85.806-0.13441 0.215-21.371z" fill="${color}"/>
<path id="path1744" d="m-2472-468.51h171.91l0.2151 21.344 42.796 0.10753 0.2151 21.398 42.903 0.10753-0.1344 21.344-257.77 0.0269-0.3763-21.237-21.183-0.37634-0.081-21.129 21.317-0.37635 0.1882-21.21z" fill='#0ff'/>
<path id="path1812" d="m-2213.9-318.02 42.93-0.0269 0.027 42.93-42.93 0.0269-0.027-42.93zm-387.1 0 42.93-0.0269 0.027 42.93-42.93 0.0269zm365.75-42.93 85.645-0.0538 0.3764 21.21 21.21 0.45699 0.1344 42.688-0.081 42.984-21.371 0.24194-0.2151 21.317-85.806-0.0269-0.2151-21.344-21.317-0.21505-0.081-42.93 0.1344-42.769 21.21-0.37635 0.3764-21.183m21.398 21.425-0.054 21.505h-21.452l-0.027 42.876 21.505 0.0537v21.452l42.876 0.0269 0.054-21.505h21.452l0.027-42.876-21.505-0.0537v-21.452l-42.876-0.0269zm-408.49-21.425 85.645-0.0538 0.3763 21.21 21.21 0.45699 0.1344 42.688-0.081 42.984-21.371 0.24194-0.215 21.317-85.806-0.0269-0.2151-21.344-21.317-0.21505-0.081-42.93 0.1344-42.769 21.21-0.37635 0.3763-21.183m21.398 21.425-0.054 21.505h-21.452l-0.027 42.876 21.505 0.0537v21.452l42.876 0.0269 0.054-21.505h21.452l0.027-42.876-21.505-0.0537v-21.452l-42.876-0.0269z"/>
<path id="path1858" d="m-2213.9-275.09 42.93-0.0269-0.054 21.505-42.876-0.0269v-21.452zm-387.1 0 42.93-0.0269-0.054 21.505-42.876-0.0269v-21.452zm430-42.957 21.505 0.0537-0.027 42.876h-21.452l-0.027-42.93zm-64.382 0.0269h21.452l0.027 42.93-21.505-0.0537 0.027-42.876zm-322.71-0.0269 21.505 0.0537-0.027 42.876h-21.452l-0.027-42.93zm-64.382 0.0269h21.452l0.027 42.93-21.505-0.0537 0.027-42.876zm408.6-21.505 42.876 0.0269v21.452l-42.93 0.0269 0.054-21.505zm-387.1 0 42.876 0.0269v21.452l-42.93 0.0269 0.054-21.505z" fill="#c0c0c0"/>
</g>
</g>
</svg>`;
    return svgCar;
}

export async function drawCars(): Promise<void> {
    const container = document.querySelector('.container');
    if (container) {
        const carsContainer = createEl('div', 'cars-container');
        container?.append(carsContainer);
    } else {
        console.error('Error: container element not found');
    }

    const list = createEl('div', 'list');

    document.querySelector('.cars-container')?.append(list);
}

//  http://127.0.0.1:3000/garage

export async function fethCars(url: string): Promise<void> {
    function getCars(arr: []) {
        return arr.map((data: { id: number; name: string; color: string }) => {
            const carContain = createEl('div', 'car');
            carContain.setAttribute('id', `${data.id}`);
            document.querySelector('.list')?.append(carContain);

            const carTitle = createEl('h5', 'car__title');
            carTitle.textContent = data.name;
            carContain.append(carTitle);

            const imgCar = createCarUI(`${data.color}`);
            const car = createEl('div', 'car__img');
            carContain.append(car);
            car.innerHTML = imgCar;
            return carContain;
        });
    }

    const response: Response = await fetch(url);
    const json = await response.json();
    const carsArr = getCars(json);

    document.querySelector('.list')?.append(...carsArr);

    const addButtons = document.querySelectorAll('.car');

    console.log();

    addButtons.forEach((el) => {
        const carButtonsSelectors = createEl('div', 'car-selectors');
        el.insertAdjacentElement('afterend', carButtonsSelectors);
        const buttonSelect = createEl('button', 'car-selectors__select');
        carButtonsSelectors?.append(buttonSelect);
        buttonSelect.textContent = 'SELECT';

        const buttonRemove = createEl('button', 'car-selectors__remove');
        carButtonsSelectors?.append(buttonRemove);
        buttonRemove.textContent = 'REMOVE';

        const buttonStart = createEl('button', 'car-selectors__stars');
        carButtonsSelectors?.append(buttonStart);
        buttonStart.textContent = 'Start';

        const buttonStop = createEl('button', 'car-selectors__stop');
        carButtonsSelectors?.append(buttonStop);
        buttonStop.textContent = 'Stop';
    });
}
