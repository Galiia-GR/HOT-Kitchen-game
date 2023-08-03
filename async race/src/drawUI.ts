import { urlBase } from './api';

export function createCarUI(color: string) {
    const svgCar = `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 666.55878 236.45138">
    <g id="layer1" transform="translate(2708.5 468.56)">
    <g id="g4142">
    <g fill='${color}'>
    <path id="path1742" d="m-2536.4-468.56 64.435 0.0538-0.1882 21.21-21.317 0.37635 0.081 21.129 21.183 0.37634 0.3764 21.237 257.77-0.0269 0.1344-21.344 21.398 0.0269 0.215 21.371 64.301 0.18817 0.215 21.317 64.301 0.18817 0.215 21.29 21.317 0.21505-0.027 42.796-21.344 0.21507-0.2151 21.317-64.355-0.0269-0.1344-42.688-21.21-0.45699-0.3763-21.21-85.645 0.0538-0.3764 21.183-21.21 0.37635-0.1344 42.769-258.01-0.0269-0.1344-42.688-21.21-0.45699-0.3763-21.21-85.645 0.0538-0.3764 21.183-21.21 0.37635-0.1344 42.769-42.876-0.0269-0.2419-21.344-21.317-0.21507 0.027-85.806 21.344-0.21506 0.215-21.317 64.301-0.18817 0.2151-21.317 85.806-0.13441 0.215-21.371z"/>
    <path id="path1744" d="m-2472-468.51h171.91l0.2151 21.344 42.796 0.10753 0.2151 21.398 42.903 0.10753-0.1344 21.344-257.77 0.0269-0.3763-21.237-21.183-0.37634-0.081-21.129 21.317-0.37635 0.1882-21.21z" fill='#0ff'/>
    <path id="path1812" d="m-2213.9-318.02 42.93-0.0269 0.027 42.93-42.93 0.0269-0.027-42.93zm-387.1 0 42.93-0.0269 0.027 42.93-42.93 0.0269zm365.75-42.93 85.645-0.0538 0.3764 21.21 21.21 0.45699 0.1344 42.688-0.081 42.984-21.371 0.24194-0.2151 21.317-85.806-0.0269-0.2151-21.344-21.317-0.21505-0.081-42.93 0.1344-42.769 21.21-0.37635 0.3764-21.183m21.398 21.425-0.054 21.505h-21.452l-0.027 42.876 21.505 0.0537v21.452l42.876 0.0269 0.054-21.505h21.452l0.027-42.876-21.505-0.0537v-21.452l-42.876-0.0269zm-408.49-21.425 85.645-0.0538 0.3763 21.21 21.21 0.45699 0.1344 42.688-0.081 42.984-21.371 0.24194-0.215 21.317-85.806-0.0269-0.2151-21.344-21.317-0.21505-0.081-42.93 0.1344-42.769 21.21-0.37635 0.3763-21.183m21.398 21.425-0.054 21.505h-21.452l-0.027 42.876 21.505 0.0537v21.452l42.876 0.0269 0.054-21.505h21.452l0.027-42.876-21.505-0.0537v-21.452l-42.876-0.0269z"/>
    <path id="path1858" d="m-2213.9-275.09 42.93-0.0269-0.054 21.505-42.876-0.0269v-21.452zm-387.1 0 42.93-0.0269-0.054 21.505-42.876-0.0269v-21.452zm430-42.957 21.505 0.0537-0.027 42.876h-21.452l-0.027-42.93zm-64.382 0.0269h21.452l0.027 42.93-21.505-0.0537 0.027-42.876zm-322.71-0.0269 21.505 0.0537-0.027 42.876h-21.452l-0.027-42.93zm-64.382 0.0269h21.452l0.027 42.93-21.505-0.0537 0.027-42.876zm408.6-21.505 42.876 0.0269v21.452l-42.93 0.0269 0.054-21.505zm-387.1 0 42.876 0.0269v21.452l-42.93 0.0269 0.054-21.505z" fill="#c0c0c0"/>
    </g>
    </g>
    </g>
    </svg>`;
    return svgCar;
}

export function helpCreateEl(tagName: string, className: string) {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    return el;
}

export async function ininialUI(): Promise<void> {
    const htmlUI = `
    <div class="wrapper">

    <div class="switch">
    <button class="switch__garage">to GARAGE</button>
    <button class="switch__winners">to WINNERS</button>
    </div>

    <div class = "garage">

    <div class="input">
    <div class="input-create__block">
    <input class="input-create__input">
    <input type='color' class="input-create__color">
    <button class="input-create__button">CREATE</button>
    </div>
    <div class="input-update__block">
    <input class="input-update__input">
    <input type='color' class="input-update__color">
    <button class="input-update__button">UPDATE</button>
    </div>
    </div>

    <div class="input-buttons">
    <button class="input-button__race">RACE</button>
    <button class="input-button__reset">RESET</button>
    <button class="input-button__generate">GENERATE CARS</button>
    </div>

    <div class="garage-title">
    <span class="garage-title__main">Garage #<span class = "garage-count"></span></span>
    <span class="garage-title__page">Page #<span class = "garage-page-count">1</span></span>
    <div class="pagination">
    <button class="prev-pagination__button">Prev</button>
    <button class="next-pagination__button">Next</button>
    </div>
    <span class='show'></span>
    </div>

    <div class="cars-container"></div>
    </div>

    <div class="winners delete">

    <div class="winners-title">
    <span class="winners-title__main">Winners #<span class = "winners-count"></span></span>
    <span class="winners-title__page">Page #<span class = "winners-page-count">1</span></span>
    <div class="pagination-win">
    <button class="win-prev-pagination__button">Prev</button>
    <button class="win-next-pagination__button">Next</button>
    </div>
    </div>

    <div class="winners-table__container">
    <table class="table">
    <thead>
    <tr>
    <th>Number</th>
    <th>Car</th>
    <th>Name</th>
    <th>Wins</th>
    <th>Best time (seconds)</th>
    </tr>
    </thead>
    <tbody class="win-container">
    </tbody>
    </table>
    </div>
    </div>
    `;

    const body = document.querySelector('body');
    const container = helpCreateEl('div', 'container');
    body?.append(container);

    container.innerHTML = htmlUI;
}

ininialUI();

const apiGarage = `${urlBase}/garage`;

function footer() {
    const container = document.querySelector('.container');

    const footerEl = helpCreateEl('footer', 'footer');
    container?.appendChild(footerEl);
    const temp = `
  <a class="RSS" href="https://rs.school/js/" target="_blank">
      <img src="./images/3fc4b04a9808cbde8693.svg" width="94" height="22" alt="RS School" />
  </a>
  <p>
      2023 by Galiia-GR
      <a href="https://github.com/Galiia-GR" target="_blank">
          <img src="./images/beb09d6d137067aa9487.svg" width="28" height="28" alt="github"
      /></a>
  </p>
`;
    footerEl.innerHTML = temp;
}

footer();

export async function fetchCarsUI(url: string): Promise<void> {
    const carsContainer = document.querySelector('.cars-container');
    try {
        const response: Response = await fetch(url);
        const arrCars = await response.json();

        arrCars.forEach((data: { id: number; name: string; color: string }) => {
            const car = helpCreateEl('div', 'car');
            if (carsContainer) car.setAttribute('id', `${data.id}`);
            carsContainer?.append(car);

            const temp = `
          <div class="car-selectors">
          <button class="car-selectors__select" id="${data.id}">SELECT</button>
          <button class="car-selectors__remove" id="${data.id}">REMOVE</button>
          <button class="car-selectors__start" id="${data.id}" data ="start-${data.id}">Start</button>
          <button class="car-selectors__stop" id="${data.id}" data ="stop-${data.id}">Stop</button>
          </div>
          <h5 class="car__title">${data.name}</h5>
          <div class="car__img" id=img-${data.id}>${createCarUI(data.color)}</div>
          <div class="flag" id="flag-${data.id}">🚩</div>`;

            car.innerHTML = temp;
        });
    } catch (error) {
        console.error('Error fetching car data:', (error as Error).message);
    }
}

await fetchCarsUI(apiGarage);
