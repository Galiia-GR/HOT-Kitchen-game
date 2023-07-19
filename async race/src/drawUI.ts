function createEl(tagName: string, className: string) {
    const el = document.createElement(tagName);
    if (className) el.className = className;
    return el;
}

export async function ininialUI(): Promise<void> {
    const body = document.querySelector('body');
    const container = createEl('div', 'container');
    body?.append(container);

    const wrapper = createEl('div', 'wrapper');
    container?.append(wrapper);

    const switchContainer = createEl('div', 'switch');
    wrapper.append(switchContainer);

    const buttonToGarage = createEl('button', 'switch__garage');
    buttonToGarage.innerText = 'to GARAGE';
    switchContainer.append(buttonToGarage);

    const buttonToWinners = createEl('button', 'switch__winners');
    buttonToWinners.innerText = 'to WINNERS';
    switchContainer.append(buttonToWinners);

    const inputContain = createEl('div', 'input');
    wrapper.append(inputContain);

    const createBlock = createEl('div', 'input-create__block');
    inputContain.append(createBlock);

    const inputCreate = createEl('input', 'input-create__input');
    createBlock.append(inputCreate);

    const inputCreateColor = createEl('input', 'input-create__color');
    createBlock.append(inputCreateColor);

    const inputCreateButton = createEl('button', 'input-create__button');
    inputCreateButton.innerText = 'CREATE';
    createBlock.append(inputCreateButton);

    const updateBlock = createEl('div', 'input-update__block');
    inputContain.append(updateBlock);

    const inputUpdate = createEl('input', 'input-update__input');
    updateBlock.append(inputUpdate);

    const inputUpdateColor = createEl('input', 'input-update__color');
    updateBlock.append(inputUpdateColor);

    const inputUpdateButton = createEl('button', 'input-update__button');
    inputUpdateButton.innerText = 'UPDATE';
    updateBlock.append(inputUpdateButton);

    const buttonsBlock = createEl('div', 'input-buttons');
    wrapper.append(buttonsBlock);

    const raceButton = createEl('button', 'input-button__race');
    raceButton.innerText = 'RACE';
    buttonsBlock.append(raceButton);

    const resetButton = createEl('button', 'input-button__reset');
    resetButton.innerText = 'RESET';
    buttonsBlock.append(resetButton);

    const generateButton = createEl('button', 'input-button__generate');
    generateButton.innerText = 'GENERATE CARS';
    buttonsBlock.append(generateButton);

    const titleGarageContainer = createEl('div', 'garage-title');
    wrapper.append(titleGarageContainer);

    const titleGarage = createEl('span', 'garage-title__main');
    titleGarage.innerText = 'Garage(4)';
    titleGarageContainer.append(titleGarage);

    const titlePage = createEl('span', 'garage-title__page');
    titlePage.innerText = 'Page #1';
    titleGarageContainer.append(titlePage);
}
