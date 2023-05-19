import { fieldsArr, countFields, countBombs } from './drawfield.js';

let isGameOver = false;
export let flagCount = 0;
let id;

export function clickfield(field) {
  console.log('func 2');

  id = Number(field.getAttribute('id'));
  console.log(id);
  if (isGameOver) return;

  if (field.classList.contains('open') || field.classList.contains('flag')) return;

  if (field.classList.contains('bomb')) {
    isGameOver = true;
    console.log('boom boom, you louse');
    fieldsArr.forEach((el) => {
      if (el.classList.contains('bomb')) {
        el.style.backgroundImage = 'url(\'../../image/mine1.png\')';
        el.style.backgroundColor = 'rgb(230, 227, 226)';
      }
    });
  } else {
    const numbers = field.getAttribute('data');
    console.log(numbers);
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
  }
  field.classList.add('open');

  const isLeftEdge = (id % countFields === 0);
  const isRightEdge = (id % countFields === countFields - 1);

  setTimeout(() => {
    if (id > 0 && !isLeftEdge) {
      const newId = fieldsArr[id - 1].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id > countFields - 1 && !isRightEdge) {
      console.log(typeof (id));
      const newId = fieldsArr[id + 1 - countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id > countFields) {
      const newId = fieldsArr[id - countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id > countFields + 1 && !isLeftEdge) {
      const newId = fieldsArr[id - 1 - countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id < countFields * countFields - 2 && !isRightEdge) {
      const newId = fieldsArr[id + 1].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id < countFields * countFields - 10 && !isRightEdge) {
      const newId = fieldsArr[id - 1 + countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id < countFields * countFields - 12 && !isRightEdge) {
      const newId = fieldsArr[id + 1 + countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id < countFields * countFields - 11 && !isRightEdge) {
      const newId = fieldsArr[id + countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
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
      console.log('win win');
      isGameOver = true;
    }
  }
}
