import { fieldsArr, countFields, countBombs } from './drawfield.js';
import { isGameOver } from './index.js';

export let flagCount = 0;
let id;

export function clickfield(field) {
  id = Number(field.getAttribute('id'));

  if (field.classList.contains('open') || field.classList.contains('flag')) return;
  if (isGameOver) return;
  if (field.classList.contains('bomb')) return;

  const numbers = field.getAttribute('data');
  if (numbers != 0) {
    field.innerText = numbers;
    field.classList.add('open');
    field.classList.add('number');
    switch (numbers) {
      case '1':
        field.classList.add('one');
        break;

      case '2':
        field.classList.add('two');
        break;
      case '3':
        field.classList.add('three');
        break;
      case '4':
        field.classList.add('four');
        break;
      default:
                // do nothing;
    }
  }
  blabla(id);
  fieldsArr[id].classList.add('open');
}

function blabla(id) {
  const isLeftEdge = (id % countFields === 0);
  console.log(id, id % countFields)
  const isRightEdge = (id % countFields === countFields - 1);
  console.log(id, id % countFields)
  setTimeout(() => {
    if (id + 1 <= 99 && !isRightEdge && !fieldsArr[id].classList.contains('number')
    && !fieldsArr[id + 1].classList.contains('open')
  && !fieldsArr[id + 1].classList.contains('flag')
  && !fieldsArr[id + 1].classList.contains('bomb')) {
      const newId = fieldsArr[id + 1].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('1');
    }
    if (id - 1 >= 0 && !isLeftEdge && !fieldsArr[id].classList.contains('number')
      && !fieldsArr[id - 1].classList.contains('open')
&& !fieldsArr[id - 1].classList.contains('flag')
&& !fieldsArr[id - 1].classList.contains('bomb')) {
      const newId = fieldsArr[id - 1].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('2');
    }
    if (id + 10 <= 99 && !fieldsArr[id].classList.contains('number')
   && !fieldsArr[id + 10].classList.contains('open')
   && !fieldsArr[id + 10].classList.contains('flag')
   && !fieldsArr[id + 10].classList.contains('bomb')) {
      const newId = fieldsArr[id + 10].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('3');
    }
    if (id + 11 <= 99 && !isRightEdge && !fieldsArr[id].classList.contains('number')
    && !fieldsArr[id + 11].classList.contains('open')
    && !fieldsArr[id + 11].classList.contains('flag')
    && !fieldsArr[id + 11].classList.contains('bomb')) {
      const newId = fieldsArr[id + 11].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('4');
    }
    if (id + 9 <= 99 && !isLeftEdge && !fieldsArr[id].classList.contains('number')
    && !fieldsArr[id + 9].classList.contains('open')
    && !fieldsArr[id + 9].classList.contains('flag')
    && !fieldsArr[id + 9].classList.contains('bomb')) {
      const newId = fieldsArr[id + 9].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('5');
    }
    if (id - 9 >= 0 && !isRightEdge && !fieldsArr[id].classList.contains('number')
      && !fieldsArr[id - 9].classList.contains('open')
      && !fieldsArr[id - 9].classList.contains('flag')
      && !fieldsArr[id - 9].classList.contains('bomb')) {
        const newId = fieldsArr[id - 9].id;
        const newField = document.getElementById(newId);
        clickfield(newField);
        console.log('6');
      }
   if (id - 10 >= 0 && !fieldsArr[id].classList.contains('number')
    && !fieldsArr[id - 10].classList.contains('open')
   && !fieldsArr[id - 10].classList.contains('flag')
   && !fieldsArr[id - 10].classList.contains('bomb')) {
    const newId = fieldsArr[id - 10].id;
    const newField = document.getElementById(newId);
    clickfield(newField);
    console.log('7');
   }
 if (id - 11 >= 0 && !isLeftEdge && !fieldsArr[id].classList.contains('number')
  && !fieldsArr[id - 11].classList.contains('open')
  && !fieldsArr[id - 11].classList.contains('flag')
  && !fieldsArr[id - 11].classList.contains('bomb')) {
    const newId = fieldsArr[id - 11].id;
    const newField = document.getElementById(newId);
    clickfield(newField);
    console.log('8');
  }
  }, 500);
}

export function ticFlags(field) {
  const drawFlag = document.querySelector('.drawFlag');
  const drawBombs = document.querySelector('.drawBombs');
  if (isGameOver) return;
  if (!field.classList.contains('open') && flagCount < countBombs) {
    if (!field.classList.contains('flag')) {
      field.classList.add('flag');
      flagCount++;
      drawFlag.innerText = flagCount;
      drawBombs.innerText = countBombs - flagCount;
      winWin();
    } else {
      field.classList.remove('flag');
      flagCount--;
      drawFlag.innerText = flagCount;
      drawBombs.innerText = countBombs - flagCount;
    }
  }
}

function winWin() {
  let checkWin = 0;
  for (let i = 0; i < fieldsArr.length; i++) {
    if (fieldsArr[i].classList.contains('flag') && fieldsArr[i].classList.contains('bomb')) {
      console.log('win count');
      checkWin++;
    } if (checkWin === countBombs) {
      console.log('You win win');
      for (let i = 0; i < fieldsArr.length; i++) {
        fieldsArr[i].classList.add('open');
      }
    }
  }
}
