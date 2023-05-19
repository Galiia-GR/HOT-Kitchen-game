const { body } = document;
export const fieldsArr = [];
export const countFields = 10;
export const countBombs = 10;

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
  drawSounds.innerText = 'on';

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

  const bombsArr = Array(countBombs).fill('bomb');
  const emptyArr = Array(countFields * countFields - countBombs).fill('field');
  const gameShuflArr = emptyArr
    .concat(bombsArr)
    .sort(() => Math.random() - 0.5);

  /// отрисовка поля///
  /// перерисовка после первого клика////

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
      if (i > 0 && !isLeftEdge && fieldsArr[i - 1].classList.contains('bomb')) numbers++;
      if (i > countFields - 1 && !isRightEdge && fieldsArr[i + 1 - countFields].classList.contains('bomb')) numbers++;
      if (i > countFields && fieldsArr[i - countFields].classList.contains('bomb')) numbers++;
      if (i > countFields + 1 && !isLeftEdge && fieldsArr[i - 1 - countFields].classList.contains('bomb')) numbers++;
      if (i < countFields * countFields - 2 && !isRightEdge && fieldsArr[i + 1].classList.contains('bomb')) numbers++;
      if (i < countFields * countFields - 10 && !isLeftEdge && fieldsArr[i - 1 + countFields].classList.contains('bomb')) numbers++;
      if (i < countFields * countFields - 12 && !isRightEdge && fieldsArr[i + 1 + countFields].classList.contains('bomb')) numbers++;
      if (i < countFields * countFields - 11 && fieldsArr[i + countFields].classList.contains('bomb')) numbers++;
      fieldsArr[i].setAttribute('data', numbers);
    }
  }
}
