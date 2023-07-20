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
    <input class="input-create__color">
    <button class="input-create__button">CREATE</button>
    </div>
    <div class="input-update__block">
    <input class="input-update__input">
    <input class="input-update__color">
    <button class="input-update__button">UPDATE</button>
    </div>
    </div>
    <div class="input-buttons">
    <button class="input-button__race">RACE</button>
    <button class="input-button__reset">RESET</button>
    <button class="input-button__generate">GENERATE CARS</button>
    </div>
    <div class="garage-title">
    <span class="garage-title__main">Garage(4)</span>
    <span class="garage-title__page">Page #1</span>
    </div>
    </div>
`;

    const body = document.querySelector('body');
    const container = helpCreateEl('div', 'container');
    body?.append(container);

    container.innerHTML = htmlUI;
}
