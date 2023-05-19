import { fieldsArr, countFields, countBombs } from './drawfield.js';
import { isGameOver } from './index.js';

export let flagCount = 0;
let id;

export function clickfield(field) {
  console.log('func refact');

  id = Number(field.getAttribute('id'));
  console.log(id);
  if (field.classList.contains('open') || field.classList.contains('flag')) return;
  if (field.classList.contains('number')) return;
  if (isGameOver) return;
  if (field.classList.contains('bomb')) return;

  const numbers = field.getAttribute('data');
  if (numbers != 0) {
    field.innerText = numbers;
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

  if (field.classList.contains('number')) {
    field.classList.add('open');
    console.log('I get number');
  }

  const isLeftEdge = (id % countFields === 0);
  const isRightEdge = (id % countFields === countFields - 1);

  setTimeout(() => {
    if (id > 0 && !isLeftEdge
  && !field.classList.contains('number')) {
      const newId = fieldsArr[id - 1].id;
      const newField = document.getElementById(newId);
      field.classList.add('open');
      clickfield(newField);
      console.log('1');
    }
    if (id > countFields - 1 && !isRightEdge
    && !field.classList.contains('number')) {
      const newId = fieldsArr[id + 1 - countFields].id;
      const newField = document.getElementById(newId);
      field.classList.add('open');
      clickfield(newField);
      console.log('2');
    }
    if (id > countFields
      && !field.classList.contains('number')) {
      const newId = fieldsArr[id - countFields].id;
      const newField = document.getElementById(newId);
      field.classList.add('open');
      clickfield(newField);
      console.log('3');
    }
    if (id > countFields + 1 && !isLeftEdge
      && !field.classList.contains('number')) {
      const newId = fieldsArr[id - 1 - countFields].id;
      const newField = document.getElementById(newId);
      field.classList.add('open');
      clickfield(newField);
      console.log('4');
    }
    if (id < countFields * countFields - 2 && !isRightEdge
      && !field.classList.contains('number')) {
      const newId = fieldsArr[id + 1].id;
      const newField = document.getElementById(newId);
      field.classList.add('open');
      clickfield(newField);
      console.log('5');
    }
    if (id < countFields * countFields - 10 && !isRightEdge
      && !field.classList.contains('number')) {
      const newId = fieldsArr[id - 1 + countFields].id;
      const newField = document.getElementById(newId);
      field.classList.add('open');
      clickfield(newField);
      console.log('6');
    }
    if (id < countFields * countFields - 12 && !isRightEdge
      && !field.classList.contains('number')
    ) {
      const newId = fieldsArr[id + 1 + countFields].id;
      const newField = document.getElementById(newId);
      field.classList.add('open');
      clickfield(newField);
      console.log('7');
    }
    if (id < countFields * countFields - 11 && !isRightEdge
     && !field.classList.contains('number')
    ) {
      const newId = fieldsArr[id + countFields].id;
      const newField = document.getElementById(newId);
      field.classList.add('open');
      clickfield(newField);
      console.log('8');
    }
  }, 10);
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
