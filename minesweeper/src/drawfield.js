import { clickfield, ticFlags } from './clickfield.js';

const { body } = document;
export let isGameOver = false;
export const fieldsArr = [];
export const fieldsArr1 = [];
export const fieldsArr2 = [];
export let countFields;
export let countBombs;
export let uroven;
let bombsArr;
let emptyArr;
let gameShuflArr;
const container = document.createElement('div');
const header = document.createElement('header');
const title = document.createElement('h1');
const gamesSummary = document.createElement('p');
const wrap = document.createElement('div');
const flag = document.createElement('div');
const drawFlag = document.createElement('div');
const mines = document.createElement('div');
const drawBombs = document.createElement('div');
const sound = document.createElement('div');
const drawSounds = document.createElement('div');
const start = document.createElement('div');
const drawStart = document.createElement('div');
const score = document.createElement('div');
const drawlist = document.createElement('div');
const level = document.createElement('div');
const easy = document.createElement('div');
const medium = document.createElement('div');
const hard = document.createElement('div');
const minesweeper1 = document.createElement('div');
const minesweeper2 = document.createElement('div');
const minesweeper3 = document.createElement('div');
const swithDark = document.createElement('div');
const drawDarkTheme = document.createElement('div');

export function drawfield() {
  container.classList.add('container');
  body.appendChild(container);

  header.classList.add('header');
  container.appendChild(header);

  title.classList.add('header__title');
  header.appendChild(title);
  title.innerText = 'minesweeper';

  wrap.classList.add('header__wrapper');
  header.appendChild(wrap);

  flag.classList.add('header__flag');
  wrap.appendChild(flag);
  flag.innerText = 'flags';
  drawFlag.classList.add('drawFlag');
  flag.appendChild(drawFlag);
  drawFlag.innerText = 0;

  mines.classList.add('header__mines');
  wrap.appendChild(mines);
  mines.innerText = 'mines';
  drawBombs.classList.add('drawBombs');
  mines.appendChild(drawBombs);

  sound.classList.add('header__sound');
  wrap.appendChild(sound);
  sound.innerText = 'sound';
  drawSounds.classList.add('drawSounds');
  sound.appendChild(drawSounds);
  drawSounds.innerText = 'pull';

  start.classList.add('header__start');
  wrap.appendChild(start);
  start.innerText = 'start';
  drawStart.classList.add('drawStart');
  start.appendChild(drawStart);
  drawStart.innerText = 'pull';

  score.classList.add('header__score');
  wrap.appendChild(score);
  score.innerText = 'score';
  drawlist.classList.add('drawList');
  score.appendChild(drawlist);
  drawlist.innerText = 'list';

  swithDark.classList.add('header__dark');
  wrap.appendChild(swithDark);
  swithDark.innerText = 'Theme';
  drawDarkTheme.classList.add('drawTheme');
  swithDark.appendChild(drawDarkTheme);
  drawDarkTheme.innerText = 'Dark';

  level.classList.add('header__level');
  wrap.appendChild(level);
  level.innerText = 'level';

  easy.classList.add('level__easy');
  level.appendChild(easy);
  easy.innerText = 'easy';

  medium.classList.add('level__medium');
  level.appendChild(medium);
  medium.innerText = 'medium';

  hard.classList.add('level__hard');
  level.appendChild(hard);
  hard.innerText = 'hard';

  minesweeper1.classList.add('minesweeper1');
  container.appendChild(minesweeper1);

  minesweeper2.classList.add('minesweeper2');
  container.appendChild(minesweeper2);

  minesweeper3.classList.add('minesweeper3');
  container.appendChild(minesweeper3);

  gamesSummary.classList.add('gameSummary');
  container.appendChild(gamesSummary);
  gamesSummary.innerText = '';

  if (!hard.classList.contains('active-hard') && !easy.classList.contains('active-easy')
  && !medium.classList.contains('active-medium')) {
    easy.classList.add('active-easy');
    minesweeper2.classList.add('hide');
    minesweeper3.classList.add('hide');
    uroven = 1;
    countFields = 10;
    countBombs = 10;
    drawBombs.innerText = countBombs;
    minesweeper2.innerHTML = '';
    minesweeper3.innerHTML = '';
    initFields(countFields, countBombs, uroven);
    eventClick(fieldsArr);
    console.log(fieldsArr);
  }

  if (medium.classList.contains('active-medium')) {
    uroven = 2;
    countFields = 15;
    countBombs = 25;
    drawBombs.innerText = countBombs;
    minesweeper1.innerHTML = '';
    minesweeper3.innerHTML = '';
    initFields(countFields, countBombs, uroven);
    eventClickMedium(fieldsArr1);
    console.log(fieldsArr1);
  }

  if (hard.classList.contains('active-hard')) {
    uroven = 3;
    countFields = 25;
    countBombs = 65;
    drawBombs.innerText = countBombs;
    minesweeper1.innerHTML = '';
    minesweeper2.innerHTML = '';
    initFields(countFields, countBombs, uroven);
    eventClickHard(fieldsArr2);
    console.log(fieldsArr2);
  }

  level.addEventListener('click', (event) => {
    event.preventDefault();

    if (event.target.classList.contains('level__easy')) {
      easy.classList.add('active-easy');
      medium.classList.remove('active-medium');
      hard.classList.remove('active-hard');
      document.innerHTML = '';
      drawfield();
      minesweeper1.classList.remove('hide');
      minesweeper2.classList.add('hide');
      minesweeper3.classList.add('hide');
    }

    if (event.target.classList.contains('level__medium')) {
      medium.classList.add('active-medium');
      easy.classList.remove('active-easy');
      hard.classList.remove('active-hard');
      document.innerHTML = '';
      drawfield();
      minesweeper1.classList.add('hide');
      minesweeper2.classList.remove('hide');
      minesweeper3.classList.add('hide');
    }
    if (event.target.classList.contains('level__hard')) {
      hard.classList.add('active-hard');
      easy.classList.remove('active-easy');
      medium.classList.remove('active-medium');
      document.innerHTML = '';
      drawfield();
      minesweeper1.classList.add('hide');
      minesweeper2.classList.add('hide');
      minesweeper3.classList.remove('hide');
    }
  });
}


function eventClick(fieldsArr) {
  fieldsArr.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      if (el.classList.contains('bomb')) {
        isGameOver = true;
        gamesSummary.innerText = 'BOOM! OOPS YOU LOST!';
        fieldsArr.forEach((el) => {
          if (el.classList.contains('bomb')) {
            if (el.classList.contains('bomb')) {
              el.classList.add('bomb-open');
            }
          }
        });
      } if (el.classList.contains('flag')) {
        return;
      }
      clickfield(el);
    });
  });

  fieldsArr.forEach((el) => {
    el.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      ticFlags(event.target);
    });
  });
}
function eventClickMedium(fieldsArr1) {
  fieldsArr1.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      if (el.classList.contains('bomb-medium')) {
        isGameOver = true;
        gamesSummary.innerText = 'BOOM! OOPS YOU LOST!';
        fieldsArr1.forEach((el) => {
          if (el.classList.contains('bomb-medium')) {
            el.classList.add('bomb-open');
          }
        });
      } if (el.classList.contains('flag')) {
        return;
      }
      clickfield(el);
    });
  });

  fieldsArr1.forEach((el) => {
    el.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      ticFlags(event.target);
    });
  });
}

function eventClickHard(fieldsArr2) {
  fieldsArr2.forEach((el) => {
    el.addEventListener('click', (event) => {
      event.preventDefault();
      if (el.classList.contains('bomb-hard')) {
        isGameOver = true;
        gamesSummary.innerText = 'BOOM! OOPS YOU LOST!';
        fieldsArr2.forEach((el) => {
          if (el.classList.contains('bomb-hard')) {
            el.classList.add('bomb-open');
          }
        });
      } if (el.classList.contains('flag')) {
        return;
      }
      clickfield(el);
    });
  });

  fieldsArr2.forEach((el) => {
    el.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      ticFlags(event.target);
    });
  });
}

function initFields(countFields, countBombs, uroven) {
  if (uroven === 1) {
    bombsArr = Array(countBombs).fill('bomb');
    emptyArr = Array(countFields * countFields - countBombs).fill('field');
    gameShuflArr = emptyArr
    .concat(bombsArr)
    .sort(() => Math.random() - 0.5);

    for (let i = 0; i < countFields * countFields; i++) {
      const field = document.createElement('div');
      field.classList.add(gameShuflArr[i]);
      field.setAttribute('id', i);
      document.querySelector('.minesweeper1').appendChild(field);
      fieldsArr.push(field);
    }
    for (let i = 0; i < fieldsArr.length; i++) {
      let numbers = 0;
      const isLeftEdge = i % (countFields) === 0;
      const isRightEdge = i % (countFields) === countFields - 1;

      if (fieldsArr[i].classList.contains('field')) {
        if (i - 1 >= 0 && !isLeftEdge && fieldsArr[i - 1].classList.contains('bomb')) numbers++;
        // console.log(fieldsArr[i], numbers, "левое");
        if (i + (countFields - 1) <= ((countFields * countFields) - 1)
        && !isLeftEdge && fieldsArr[i + (countFields - 1)].classList.contains('bomb')) numbers++;
        // console.log(fieldsArr[i], numbers, "левое - нижнее");
        if (i - countFields >= 0
          && fieldsArr[i - countFields].classList.contains('bomb')) numbers++;
          // console.log(fieldsArr[i], numbers, "верхнее");
          if (i - (countFields - 1) >= 0 && !isRightEdge
          && fieldsArr[i - (countFields - 1)].classList.contains('bomb')) numbers++;
          // console.log(fieldsArr[i], numbers, "верхнее право");
          if (i + 1 <= ((countFields * countFields) - 1)
          && !isRightEdge && fieldsArr[i + 1].classList.contains('bomb')) numbers++;
          // console.log(fieldsArr[i], numbers, "правое");
          if (i - (countFields + 1) >= 0 && !isLeftEdge
          && fieldsArr[i - (countFields + 1)].classList.contains('bomb')) numbers++;
          // console.log(fieldsArr[i], numbers, "верхнее левое");
          if (i + (countFields + 1) <= ((countFields * countFields) - 1)
          && !isRightEdge && fieldsArr[i + (countFields + 1)].classList.contains('bomb')) numbers++;
        // console.log(fieldsArr[i], numbers, "нижнее правое");
        if (i + countFields <= ((countFields * countFields) - 1)
        && fieldsArr[i + countFields].classList.contains('bomb')) numbers++;
        // console.log(fieldsArr[i], numbers, "нижнее");
        fieldsArr[i].setAttribute('data', numbers);
      }
    }
  }

  if (uroven === 2) {
    bombsArr = Array(countBombs).fill('bomb-medium');
    emptyArr = Array(countFields * countFields - countBombs).fill('field-medium');
    gameShuflArr = emptyArr
    .concat(bombsArr)
    .sort(() => Math.random() - 0.5);

    for (let i = 0; i < countFields * countFields; i++) {
      const field = document.createElement('div');
      field.classList.add(gameShuflArr[i]);
      field.setAttribute('id', i);
      document.querySelector('.minesweeper2').appendChild(field);
      fieldsArr1.push(field);
    }
    for (let i = 0; i < fieldsArr1.length; i++) {
      let numbers = 0;
      const isLeftEdge = i % (countFields) === 0;
      const isRightEdge = i % (countFields) === countFields - 1;

      if (fieldsArr1[i].classList.contains('field-medium')) {
        if (i - 1 >= 0 && !isLeftEdge && fieldsArr1[i - 1].classList.contains('bomb-medium')) numbers++;
        // console.log(fieldsArr1[i], numbers, "левое");
        if (i + (countFields - 1) <= ((countFields * countFields) - 1)
        && !isLeftEdge && fieldsArr1[i + (countFields - 1)].classList.contains('bomb-medium')) numbers++;
        // console.log(fieldsArr1[i], numbers, "левое - нижнее");
        if (i - countFields >= 0
          && fieldsArr1[i - countFields].classList.contains('bomb-medium')) numbers++;
          // console.log(fieldsArr1[i], numbers, "верхнее");
          if (i - (countFields - 1) >= 0 && !isRightEdge
          && fieldsArr1[i - (countFields - 1)].classList.contains('bomb-medium')) numbers++;
          // console.log(fieldsArr1[i], numbers, "верхнее право");
          if (i + 1 <= ((countFields * countFields) - 1)
          && !isRightEdge && fieldsArr1[i + 1].classList.contains('bomb-medium')) numbers++;
          // console.log(fieldsArr1[i], numbers, "правое");
          if (i - (countFields + 1) >= 0 && !isLeftEdge
          && fieldsArr1[i - (countFields + 1)].classList.contains('bomb-medium')) numbers++;
          // console.log(fieldsArr1[i], numbers, "верхнее левое");
          if (i + (countFields + 1) <= ((countFields * countFields) - 1)
          && !isRightEdge && fieldsArr1[i + (countFields + 1)].classList.contains('bomb-medium')) numbers++;
          // console.log(fieldsArr1[i], numbers, "нижнее правое");
          if (i + countFields <= ((countFields * countFields) - 1)
          && fieldsArr1[i + countFields].classList.contains('bomb-medium')) numbers++;
          // console.log(fieldsArr1[i], numbers, "нижнее");
          fieldsArr1[i].setAttribute('data', numbers);
        }
      }
    }

    if (uroven === 3) {
      bombsArr = Array(countBombs).fill('bomb-hard');
      emptyArr = Array(countFields * countFields - countBombs).fill('field-hard');
      gameShuflArr = emptyArr
      .concat(bombsArr)
      .sort(() => Math.random() - 0.5);

      for (let i = 0; i < countFields * countFields; i++) {
        const field = document.createElement('div');
        field.classList.add(gameShuflArr[i]);
        field.setAttribute('id', i);
        document.querySelector('.minesweeper3').appendChild(field);
        fieldsArr2.push(field);
      }
      for (let i = 0; i < fieldsArr2.length; i++) {
        let numbers = 0;
        const isLeftEdge = i % (countFields) === 0;
        const isRightEdge = i % (countFields) === countFields - 1;

        if (fieldsArr2[i].classList.contains('field-hard')) {
          if (i - 1 >= 0 && !isLeftEdge && fieldsArr2[i - 1].classList.contains('bomb-hard')) numbers++;
          // console.log(fieldsArr2[i], numbers, "левое");
          if (i + (countFields - 1) <= ((countFields * countFields) - 1)
          && !isLeftEdge && fieldsArr2[i + (countFields - 1)].classList.contains('bomb-hard')) numbers++;
          // console.log(fieldsArr2[i], numbers, "левое - нижнее");
          if (i - countFields >= 0
            && fieldsArr2[i - countFields].classList.contains('bomb-hard')) numbers++;
            // console.log(fieldsArr2[i], numbers, "верхнее");
            if (i - (countFields - 1) >= 0 && !isRightEdge
            && fieldsArr2[i - (countFields - 1)].classList.contains('bomb-hard')) numbers++;
            // console.log(fieldsArr2[i], numbers, "верхнее право");
        if (i + 1 <= ((countFields * countFields) - 1)
            && !isRightEdge && fieldsArr2[i + 1].classList.contains('bomb-hard')) numbers++;
            // console.log(fieldsArr2[i], numbers, "правое");
            if (i - (countFields + 1) >= 0 && !isLeftEdge
            && fieldsArr2[i - (countFields + 1)].classList.contains('bomb-hard')) numbers++;
            // console.log(fieldsArr2[i], numbers, "верхнее левое");
            if (i + (countFields + 1) <= ((countFields * countFields) - 1)
            && !isRightEdge && fieldsArr2[i + (countFields + 1)].classList.contains('bomb-hard')) numbers++;
            // console.log(fieldsArr2[i], numbers, "нижнее правое");
            if (i + countFields <= ((countFields * countFields) - 1)
            && fieldsArr2[i + countFields].classList.contains('bomb-hard')) numbers++;
            // console.log(fieldsArr2[i], numbers, "нижнее");
            fieldsArr2[i].setAttribute('data', numbers);
          }
        }
      }
    }

    drawStart.addEventListener('click', (event) => {
      event.preventDefault();
      console.log('restart');
      location.reload();
      drawfield();
    });

    drawDarkTheme.addEventListener('click', () => {
      if (!drawDarkTheme.classList.contains('active-dark')) {
    drawDarkTheme.classList.add('active-dark');
    document.body.classList.add('dark');
  } else {
    drawDarkTheme.classList.remove('active-dark');
    document.body.classList.remove('dark');
  }
});