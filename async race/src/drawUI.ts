export async function ininialUI(): Promise<void> {
    const body = document.querySelector('body');
    const container = document.createElement('div');
    container.classList.add('container');
    body?.append(container);

    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    container?.append(wrapper);

    const switchContainer = document.createElement('div');
    switchContainer.classList.add('switch');
    wrapper.append(switchContainer);

    const buttonToGarage = document.createElement('button');
    buttonToGarage.classList.add('switch__garage');
    buttonToGarage.innerText = 'to GARAGE';
    switchContainer.append(buttonToGarage);

    const buttonToWinners = document.createElement('button');
    buttonToWinners.classList.add('switch__winners');
    buttonToWinners.innerText = 'to WINNERS';
    switchContainer.append(buttonToWinners);

    const inputContain = document.createElement('div');
    inputContain.classList.add('input');
    wrapper.append(inputContain);

    const createBlock = document.createElement('div');
    createBlock.classList.add('input-create__block');
    inputContain.append(createBlock);

    const inputCreate = document.createElement('input');
    inputCreate.classList.add('input-create__input');
    createBlock.append(inputCreate);

    const inputCreateColor = document.createElement('input');
    inputCreateColor.classList.add('input-create__color');
    createBlock.append(inputCreateColor);

    const inputCreateButton = document.createElement('button');
    inputCreateButton.classList.add('input-create__button');
    inputCreateButton.innerText = 'CREATE';
    createBlock.append(inputCreateButton);

    const updateBlock = document.createElement('div');
    updateBlock.classList.add('input-update__block');
    inputContain.append(updateBlock);

    const inputUpdate = document.createElement('input');
    inputUpdate.classList.add('input-update__input');
    updateBlock.append(inputUpdate);

    const inputUpdateColor = document.createElement('input');
    inputUpdateColor.classList.add('input-update__color');
    updateBlock.append(inputUpdateColor);

    const inputUpdateButton = document.createElement('button');
    inputUpdateButton.classList.add('input-update__button');
    inputUpdateButton.innerText = 'UPDATE';
    updateBlock.append(inputUpdateButton);

    const buttonsBlock = document.createElement('div');
    buttonsBlock.classList.add('input-buttons');
    wrapper.append(buttonsBlock);

    const raceButton = document.createElement('button');
    raceButton.classList.add('input-button__race');
    raceButton.innerText = 'RACE';
    buttonsBlock.append(raceButton);

    const resetButton = document.createElement('button');
    resetButton.classList.add('input-button__reset');
    resetButton.innerText = 'RASET';
    buttonsBlock.append(resetButton);

    const generateButton = document.createElement('button');
    generateButton.classList.add('input-button__generate');
    generateButton.innerText = 'GENERATE CARS';
    buttonsBlock.append(generateButton);

    const titleGarageContainer = document.createElement('div');
    titleGarageContainer.classList.add('garage-title');
    wrapper.append(titleGarageContainer);

    const titleGarage = document.createElement('span');
    titleGarage.classList.add('garage-title__main');
    titleGarage.innerText = 'Garage(4)';
    titleGarageContainer.append(titleGarage);

    const titlePage = document.createElement('span');
    titlePage.classList.add('garage-title__page');
    titlePage.innerText = 'Page #1';
    titleGarageContainer.append(titlePage);
}
