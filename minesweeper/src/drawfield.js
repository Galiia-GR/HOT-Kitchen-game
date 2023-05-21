import { clickfield, ticFlags } from './clickfield.js';

const { body } = document;
export let isGameOver = false;
export const fieldsArr = [];
export let countFields;
export let countBombs;
let bombsArr;
let emptyArr;
let gameShuflArr;

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
  gamesSummary.innerText = 'Please choose level';

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

  drawStart.addEventListener('click', (event) => {
    event.preventDefault();
    location.reload();
  });

  level.addEventListener('click', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('level__easy')) {
      easy.classList.add('active-easy');
      eventEasy();
    }
    if (event.target.classList.contains('level__medium')) {
      medium.classList.add('active-medium');
      eventMedium();
    }
    if (event.target.classList.contains('level__hard')) {
      hard.classList.add('active-hard');
      eventHard();
    }
    if (hard.classList.contains('active-hard') && medium.classList.contains('active-medium')) {
      location.reload();
    }
    if (medium.classList.contains('active-medium') && easy.classList.contains('active-easy')) {
      location.reload();
    }
    if (hard.classList.contains('active-hard') && easy.classList.contains('active-easy')) {
      location.reload();
    }
    if (hard.classList.contains('active-hard') && easy.classList.contains('active-easy')
    && medium.classList.contains('active-medium')) {
      location.reload();
    }
  });

  function eventEasy() {
    if (easy.classList.contains('active-easy')) {
      countFields = 10;
      countBombs = 10;
      drawBombs.innerText = countBombs;
      initFields(countFields, countBombs);

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
  }

  function eventMedium() {
    if (medium.classList.contains('active-medium')) {
      countFields = 15;
      countBombs = 15;
      drawBombs.innerText = countBombs;
      initFields(countFields, countBombs);

      for (let i = 0; i < fieldsArr.length; i++) {
        if (fieldsArr[i].classList.contains('field')) {
          fieldsArr[i].classList.add('field-medium');
        }
        if (fieldsArr[i].classList.contains('bomb')) {
          fieldsArr[i].classList.add('bomb-medium');
        }
      }

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
    }
    fieldsArr.forEach((el) => {
      el.addEventListener('contextmenu', (event) => {
        event.preventDefault();
        ticFlags(event.target);
      });
    });
  }

  function eventHard() {
    if (hard.classList.contains('active-hard')) {
      countFields = 25;
      countBombs = 35;
      drawBombs.innerText = countBombs;
      initFields(countFields, countBombs);

      for (let i = 0; i < fieldsArr.length; i++) {
        if (fieldsArr[i].classList.contains('field')) {
          fieldsArr[i].classList.add('field-hard');
        }
        if (fieldsArr[i].classList.contains('bomb')) {
          fieldsArr[i].classList.add('bomb-hard');
        }
      }

      fieldsArr.forEach((el) => {
        el.addEventListener('click', (event) => {
          event.preventDefault();
          if (el.classList.contains('bomb')) {
            isGameOver = true;
            gamesSummary.innerText = 'BOOM! OOPS YOU LOST!';
            fieldsArr.forEach((el) => {
              if (el.classList.contains('bomb')) {
                el.classList.add('bomb-open');
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
  }
}

function initFields(countFields, countBombs) {
  bombsArr = Array(countBombs).fill('bomb');
  emptyArr = Array(countFields * countFields - countBombs).fill('field');
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
  return fieldsArr;
}
