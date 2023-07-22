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
    </div>

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
