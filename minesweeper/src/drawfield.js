const { body } = document;

console.log('1 func');

export function drawfield() {
  const container = document.createElement('div');
  container.classList.add('container');
  body.appendChild(container);

  const title = document.createElement('h1');
  title.classList.add('container__title');
  container.appendChild(title);
  title.innerText = 'minesweeper';

  const minesweeper = document.createElement('div');
  minesweeper.classList.add('minesweeper');
  container.appendChild(minesweeper);

  const countFields = 100;

  const countBombs = 10;

  const fieldsArr = [];
  const bombsArr = [];

  for (let i = 0; i < countFields; i++) {
    const field = document.createElement('div');
    field.classList.add('field');
    field.setAttribute('id', i);
    minesweeper.appendChild(field);
    fieldsArr.push(field);
  }
  console.log(fields);
}
