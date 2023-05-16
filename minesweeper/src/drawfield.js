const { body } = document;
export const fieldsArr = [];
export const countFields = 100;
export const countBombs = 10;
let firstClick = false;

console.log('1 func');
export function drawfield() {
  const container = document.createElement('div');
  container.classList.add('container');
  body.appendChild(container);

  const header = document.createElement('header');
  header.classList.add('header');
  container.appendChild(header);

  const title = document.createElement('h1');
  title.classList.add('header__title');
  header.appendChild(title);
  title.innerText = 'minesweeper';

  const wrap = document.createElement('div');
  wrap.classList.add('header__wrapper');
  header.appendChild(wrap);

  const timer = document.createElement('div');
  timer.classList.add('header__timer');
  wrap.appendChild(timer);
  timer.innerText = 'timer';

  const mines = document.createElement('div');
  mines.classList.add('header__mines');
  wrap.appendChild(mines);
  mines.innerText = 'mines';

  const score = document.createElement('div');
  timer.classList.add('header__score');
  wrap.appendChild(score);
  score.innerText = 'score';

  const sound = document.createElement('div');
  sound.classList.add('header__sound');
  wrap.appendChild(sound);
  sound.innerText = 'sound';

  const level = document.createElement('div');
  sound.classList.add('header__level');
  wrap.appendChild(level);
  level.innerText = 'level';

  const easy = document.createElement('div');
  easy.classList.add('level__easy');
  level.appendChild(easy);
  easy.innerText = 'easy';

  const medium = document.createElement('div');
  medium.classList.add('level__medium');
  level.appendChild(medium);
  medium.innerText = 'medium';

  const hard = document.createElement('div');
  hard.classList.add('level__hard');
  level.appendChild(hard);
  hard.innerText = 'hard';

  const minesweeper = document.createElement('div');
  minesweeper.classList.add('minesweeper');
  container.appendChild(minesweeper);

  const bombsArr = Array(countBombs).fill('bomb');
  const emptyArr = Array(countFields - countBombs).fill('field');
  const gameShuflArr = emptyArr
    .concat(bombsArr)
    .sort(() => Math.random() - 0.5);

  console.log(gameShuflArr);

  console.log(bombsArr, emptyArr);

  /// отрисовка поля///
  for (let i = 0; i < countFields; i++) {
    const field = document.createElement('div');
    field.classList.add('field');
    minesweeper.appendChild(field);
    fieldsArr.push(field);
  }
/// перерисовка после первого клика////
  fieldsArr.forEach((el) => {
    el.addEventListener('click', () => {
      firstClick = true;
      minesweeper.innerHTML = '';
      for (let i = 0; i < countFields; i++) {
        if (firstClick) {
          const field = document.createElement('div');
          field.classList.add(gameShuflArr[i]);
          field.setAttribute('id', i);
          minesweeper.appendChild(field);
          fieldsArr.push(field);
        }
      }
    });
  });

  /// write numbers ///

  for (let i = 0; i < fieldsArr.length; i++) {
    let numbers = 0;
    const isLeftEdge = i % (countFields / 10) === 0;
    const isRightEdge = i % (countFields / 10) === countFields / 10 - 1;

    if (fieldsArr[i].classList.contains('field')) {
      if (i > 0 && !isLeftEdge && fieldsArr[i - 1].classList.contains('bomb')) numbers++;
      if (
        i > countFields / 10 - 1
        && !isRightEdge
        && fieldsArr[i + 1 - countFields / 10].classList.contains('bomb')
      ) numbers++;
      if (
        i > countFields / 10
        && fieldsArr[i - countFields / 10].classList.contains('bomb')
      ) numbers++;
      if (
        i > countFields / 10 + 1
        && !isLeftEdge
        && fieldsArr[i - 1 - countFields / 10].classList.contains('bomb')
      ) numbers++;
      if (
        i < countFields - 2
        && !isRightEdge
        && fieldsArr[i + 1].classList.contains('bomb')
      ) numbers++;
      if (
        i < countFields - 10
        && !isLeftEdge
        && fieldsArr[i - 1 + countFields / 10].classList.contains('bomb')
      ) numbers++;
      if (
        i < countFields - 12
        && !isRightEdge
        && fieldsArr[i + 1 + countFields / 10].classList.contains('bomb')
      ) numbers++;
      if (
        i < countFields - 11
        && fieldsArr[i + countFields / 10].classList.contains('bomb')
      ) numbers++;
      fieldsArr[i].setAttribute('data', numbers);
      console.log(fieldsArr[i]);
    }
  }
}
