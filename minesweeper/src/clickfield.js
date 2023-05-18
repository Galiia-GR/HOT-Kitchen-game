import { fieldsArr, countFields } from './drawfield.js';

let isGameOver = false;
let id;

export function clickfield(field) {
  console.log('func 2');

  id = Number(field.getAttribute('id'));
  console.log(id);
  if (isGameOver) return;
  if (field.classList.contains('open') || field.classList.contains('flag')) return;

  if (field.classList.contains('bomb')) {
    isGameOver = true;
    console.log('boom boom');
    fieldsArr.forEach((el) => {
      if (el.classList.contains('bomb')) {
        el.style.backgroundImage = 'url(\'../../image/mine1.png\')';
      }
    });
  } else {
    const numbers = field.getAttribute('data');
    console.log(numbers);
    if (numbers != 0) {
      field.innerText = numbers;

      switch (numbers) {
        case '1':
          field.classList.add('open__one');
          break;

        case '2':
          field.classList.add('open__two');
          break;
        case '3':
          field.classList.add('open__three');
          break;
        case '4':
          field.classList.add('open__four');
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
