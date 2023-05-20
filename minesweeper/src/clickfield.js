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
  emptyFieldGrow(id);
  fieldsArr[id].classList.add('open');
}

function emptyFieldGrow(id) {
  const isLeftEdge = (id % countFields === 0);

  const isRightEdge = (id % countFields === countFields - 1);

  setTimeout(() => {
    if (id + 1 <= ((countFields * countFields) - 1) && !isRightEdge && !fieldsArr[id].classList.contains('number')
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
    if (id + countFields <= ((countFields * countFields) - 1) && !fieldsArr[id].classList.contains('number') /// нижнее поле (проверка на вариабельность)
   && !fieldsArr[id + countFields].classList.contains('open')
   && !fieldsArr[id + countFields].classList.contains('flag')
   && !fieldsArr[id + countFields].classList.contains('bomb')) {
      const newId = fieldsArr[id + countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('3');
    }
    if (id + (countFields + 1) <= ((countFields * countFields) - 1) && !isRightEdge && !fieldsArr[id].classList.contains('number') /// нижнее правое поле
    && !fieldsArr[id + (countFields + 1)].classList.contains('open')
    && !fieldsArr[id + (countFields + 1)].classList.contains('flag')
    && !fieldsArr[id + (countFields + 1)].classList.contains('bomb')) {
      const newId = fieldsArr[id + (countFields + 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('4');
    }
    if (id + (countFields - 1) <= ((countFields * countFields) - 1) && !isLeftEdge && !fieldsArr[id].classList.contains('number') /// нижнее левое поле
    && !fieldsArr[id + (countFields - 1)].classList.contains('open')
    && !fieldsArr[id + (countFields - 1)].classList.contains('flag')
    && !fieldsArr[id + (countFields - 1)].classList.contains('bomb')) {
      const newId = fieldsArr[id + (countFields - 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('5');
    }
    if (id - (countFields - 1) >= 0 && !isRightEdge && !fieldsArr[id].classList.contains('number') /// верхнее правое поле
      && !fieldsArr[id - (countFields - 1)].classList.contains('open')
      && !fieldsArr[id - (countFields - 1)].classList.contains('flag')
      && !fieldsArr[id - (countFields - 1)].classList.contains('bomb')) {
      const newId = fieldsArr[id - (countFields - 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('6');
    }
    if (id - countFields >= 0 && !fieldsArr[id].classList.contains('number') /// /верхнее поле
    && !fieldsArr[id - countFields].classList.contains('open')
   && !fieldsArr[id - countFields].classList.contains('flag')
   && !fieldsArr[id - countFields].classList.contains('bomb')) {
      const newId = fieldsArr[id - countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('7');
    }
    if (id - (countFields + 1) >= 0 && !isLeftEdge && !fieldsArr[id].classList.contains('number') /// /верхнее левое поле
      && !fieldsArr[id - (countFields + 1)].classList.contains('open')
      && !fieldsArr[id - (countFields + 1)].classList.contains('flag')
      && !fieldsArr[id - (countFields + 1)].classList.contains('bomb')) {
      const newId = fieldsArr[id - (countFields + 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
      console.log('8');
    }
  }, 50);
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
