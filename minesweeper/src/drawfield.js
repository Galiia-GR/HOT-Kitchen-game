const { body } = document;
export const fieldsArr = [];
export let countFields;
export let countBombs = 10;
export let sizeFlag;
export let sizeField;
export let sizeBomb;
let levels;
let bombsArr;
let emptyArr;
let gameShuflArr = [];

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

  const gamesSummary = document.createElement('p');
  gamesSummary.classList.add('gameSummary');
  header.appendChild(gamesSummary);
  gamesSummary.innerText = 'Games Over Games Play';

  const wrap = document.createElement('div');
  wrap.classList.add('header__wrapper');
  header.appendChild(wrap);

  const flag = document.createElement('div');
  flag.classList.add('header__flag');
  wrap.appendChild(flag);
  flag.innerText = 'flags';
  const drawFlag = document.createElement('div');
  drawFlag.classList.add('drawFlag');
  flag.appendChild(drawFlag);
  drawFlag.innerText = 0;

  const mines = document.createElement('div');
  mines.classList.add('header__mines');
  wrap.appendChild(mines);
  mines.innerText = 'mines';
  const drawBombs = document.createElement('div');
  drawBombs.classList.add('drawBombs');
  mines.appendChild(drawBombs);
  drawBombs.innerText = countBombs;

  const sound = document.createElement('div');
  sound.classList.add('header__sound');
  wrap.appendChild(sound);
  sound.innerText = 'sound';
  const drawSounds = document.createElement('div');
  drawSounds.classList.add('drawSounds');
  sound.appendChild(drawSounds);
  drawSounds.innerText = 'pull';

  const start = document.createElement('div');
  start.classList.add('header__start');
  wrap.appendChild(start);
  start.innerText = 'start';
  const drawStart = document.createElement('div');
  drawStart.classList.add('drawStart');
  start.appendChild(drawStart);
  drawStart.innerText = 'pull';

  const score = document.createElement('div');
  score.classList.add('header__score');
  wrap.appendChild(score);
  score.innerText = 'score';
  const drawlist = document.createElement('div');
  drawlist.classList.add('drawList');
  score.appendChild(drawlist);
  drawlist.innerText = 'list';

  const level = document.createElement('div');
  level.classList.add('header__level');
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

  /// /первоначальная отрисовка///
  countFields = 10;
  countBombs = 10;

  bombsArr = Array(countBombs).fill('bomb');
  emptyArr = Array(countFields * countFields - countBombs).fill('field');
  gameShuflArr = emptyArr
    .concat(bombsArr)
    .sort(() => Math.random() - 0.5);

  for (let i = 0; i < countFields * countFields; i++) {
    const field = document.createElement('div');
    field.classList.add(gameShuflArr[i]);
    field.setAttribute('id', i);
    minesweeper.appendChild(field);
    fieldsArr.push(field);
  }

  /// write numbers ///

  for (let i = 0; i < fieldsArr.length; i++) {
    let numbers = 0;
    const isLeftEdge = i % (countFields) === 0;
    const isRightEdge = i % (countFields) === countFields - 1;

    if (fieldsArr[i].classList.contains('field')) {
      if (i - 1 >= 0 && !isLeftEdge && fieldsArr[i - 1].classList.contains('bomb')) numbers++;
      if (i + (countFields - 1) <= ((countFields * countFields) - 1) && !isLeftEdge && fieldsArr[i + (countFields - 1)].classList.contains('bomb')) numbers++;
      if (i - countFields >= 0 && fieldsArr[i - countFields].classList.contains('bomb')) numbers++;
      if (i - (countFields - 1) >= 0 && !isRightEdge && fieldsArr[i - (countFields - 1)].classList.contains('bomb')) numbers++;
      if (i + 1 <= ((countFields * countFields) - 1) && !isRightEdge && fieldsArr[i + 1].classList.contains('bomb')) numbers++;
      if (i - (countFields + 1) >= 0 && !isLeftEdge && fieldsArr[i - (countFields + 1)].classList.contains('bomb')) numbers++;
      if (i + (countFields + 1) <= ((countFields * countFields) - 1) && !isRightEdge && fieldsArr[i + (countFields + 1)].classList.contains('bomb')) numbers++;
      if (i + countFields <= ((countFields * countFields) - 1) && fieldsArr[i + countFields].classList.contains('bomb')) numbers++;
      fieldsArr[i].setAttribute('data', numbers);
    }
  }

  easy.addEventListener('click', (event) => {
    event.preventDefault();
    minesweeper.innerHTML = '';
    if (!easy.classList.contains('active-easy')) {
      easy.classList.add('active-easy');
      hard.classList.remove('active-hard');
      medium.classList.remove('active-medium');
      levels = 1;
      countFields = 10;
      countBombs = 10;
      sizeFlag = 'flag-easy';
      sizeField = 'field-easy';
      sizeBomb = 'bomb-easy';
      initFields(countFields, countBombs, sizeBomb, sizeField);
      console.log('now level', levels);
    }
  });

  medium.addEventListener('click', (event) => {
    event.preventDefault();
    minesweeper.innerHTML = '';
    if (!medium.classList.contains('active-medium')) {
      medium.classList.add('active-medium');
      hard.classList.remove('active-hard');
      easy.classList.remove('active-easy');
      levels = 2;
      countFields = 15;
      countBombs = 15;
      console.log('now level', levels);
    }
  });

  hard.addEventListener('click', (event) => {
    event.preventDefault();
    minesweeper.innerHTML = '';
    if (!hard.classList.contains('active-hard')) {
      hard.classList.add('active-hard');
      medium.classList.remove('active-medium');
      easy.classList.remove('active-easy');
      levels = 3;
      countFields = 25;
      countBombs = 25;
      console.log('now level', levels);
    }
  });
}

function initFields(countFields, countBombs, sizeBomb, sizeField) {
  bombsArr = Array(countBombs).fill(sizeBomb);
  emptyArr = Array(countFields * countFields - countBombs).fill(sizeField);
  gameShuflArr = emptyArr
    .concat(bombsArr)
    .sort(() => Math.random() - 0.5);

  for (let i = 0; i < countFields * countFields; i++) {
    const field = document.createElement('div');
    field.classList.add(gameShuflArr[i]);
    field.setAttribute('id', i);
    document.querySelector('.minesweeper').appendChild(field);
    fieldsArr.push(field);
  }

  // /// write numbers ///

  for (let i = 0; i < fieldsArr.length; i++) {
    let numbers = 0;
    const isLeftEdge = i % (countFields) === 0;
    const isRightEdge = i % (countFields) === countFields - 1;

    if (fieldsArr[i].classList.contains(sizeField)) {
      if (i - 1 >= 0 && !isLeftEdge && fieldsArr[i - 1].classList.contains(sizeBomb)) numbers++;
      if (i + (countFields - 1) <= ((countFields * countFields) - 1) && !isLeftEdge && fieldsArr[i + (countFields - 1)].classList.contains(sizeBomb)) numbers++;
      if (i - countFields >= 0 && fieldsArr[i - countFields].classList.contains(sizeBomb)) numbers++;
      if (i - (countFields - 1) >= 0 && !isRightEdge && fieldsArr[i - (countFields - 1)].classList.contains(sizeBomb)) numbers++;
      if (i + 1 <= ((countFields * countFields) - 1) && !isRightEdge && fieldsArr[i + 1].classList.contains(sizeBomb)) numbers++;
      if (i - (countFields + 1) >= 0 && !isLeftEdge && fieldsArr[i - (countFields + 1)].classList.contains(sizeBomb)) numbers++;
      if (i + (countFields + 1) <= ((countFields * countFields) - 1) && !isRightEdge && fieldsArr[i + (countFields + 1)].classList.contains(sizeBomb)) numbers++;
      if (i + countFields <= ((countFields * countFields) - 1) && fieldsArr[i + countFields].classList.contains(sizeBomb)) numbers++;
      fieldsArr[i].setAttribute('data', numbers);
    }
  }
}
