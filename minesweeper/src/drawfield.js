const { body } = document;
export const fieldsArr = [];
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

  const bombsArr = Array(countBombs).fill('bomb');
  const emptyArr = Array(countFields - countBombs).fill('field');
  const gameShuflArr = emptyArr
    .concat(bombsArr)
    .sort(() => Math.random() - 0.5);

  console.log(gameShuflArr);

  console.log(bombsArr, emptyArr);

  for (let i = 0; i < countFields; i++) {
    const field = document.createElement('div');
    field.classList.add(gameShuflArr[i]);
    field.setAttribute('id', i);
    minesweeper.appendChild(field);
    fieldsArr.push(field);
  }

  /// write numbers ///

  for (let i = 0; i < fieldsArr.length; i++) {
    let numbers = 0;
    const isLeftEdge = i % (countFields / 10) === 0;
    const isRightEdge = i % (countFields / 10) === countFields / 10 - 1;

    if (fieldsArr[i].classList.contains('field')) {
      if (i > 0 && !isLeftEdge && fieldsArr[i - 1].classList.contains('bomb'))
        numbers++;
      if (
        i > countFields / 10 - 1 &&
        !isRightEdge &&
        fieldsArr[i + 1 - countFields / 10].classList.contains('bomb')
      )
        numbers++;
      if (
        i > countFields / 10 &&
        fieldsArr[i - countFields / 10].classList.contains('bomb')
      )
        numbers++;
      if (
        i > countFields / 10 + 1 &&
        !isLeftEdge &&
        fieldsArr[i - 1 - countFields / 10].classList.contains('bomb')
      )
        numbers++;
      if (
        i < countFields - 2 &&
        !isRightEdge &&
        fieldsArr[i + 1].classList.contains('bomb')
      )
        numbers++;
      if (
        i < countFields - 10 &&
        !isLeftEdge &&
        fieldsArr[i - 1 + countFields / 10].classList.contains('bomb')
      )
        numbers++;
      if (
        i < countFields - 12 &&
        !isRightEdge &&
        fieldsArr[i + 1 + countFields / 10].classList.contains('bomb')
      )
        numbers++;
      if (
        i < countFields - 11 &&
        fieldsArr[i + countFields / 10].classList.contains('bomb')
      )
        numbers++;
      fieldsArr[i].setAttribute('data', numbers);
      console.log(fieldsArr[i]);
    }
  }
}
