import {
  fieldsArr, fieldsArr1, fieldsArr2, uroven, countFields, countBombs, isGameOver,
} from './drawfield.js';

export let flagCount = 0;
let id;


export function clickfield(field) {
  console.log(uroven);
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

  if (document.querySelector('.active-easy')) {
    emptyFieldGrow(id);
    console.log(id);
    fieldsArr[id].classList.add('open');
  }

  if (document.querySelector('.active-medium')) {
    emptyFieldGrowMedium(id);
    console.log(id);
    fieldsArr1[id].classList.add('open');
  }

  if (document.querySelector('.active-hard')) {
    emptyFieldGrowHard(id);
    console.log(id);
    fieldsArr2[id].classList.add('open');
  }
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
    }
    if (id - 1 >= 0 && !isLeftEdge && !fieldsArr[id].classList.contains('number')
      && !fieldsArr[id - 1].classList.contains('open')
&& !fieldsArr[id - 1].classList.contains('flag')
&& !fieldsArr[id - 1].classList.contains('bomb')) {
      const newId = fieldsArr[id - 1].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id + countFields <= ((countFields * countFields) - 1) && !fieldsArr[id].classList.contains('number') /// нижнее поле (проверка на вариабельность)
   && !fieldsArr[id + countFields].classList.contains('open')
   && !fieldsArr[id + countFields].classList.contains('flag')
   && !fieldsArr[id + countFields].classList.contains('bomb')) {
      const newId = fieldsArr[id + countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id + (countFields + 1) <= ((countFields * countFields) - 1) && !isRightEdge && !fieldsArr[id].classList.contains('number') /// нижнее правое поле
    && !fieldsArr[id + (countFields + 1)].classList.contains('open')
    && !fieldsArr[id + (countFields + 1)].classList.contains('flag')
    && !fieldsArr[id + (countFields + 1)].classList.contains('bomb')) {
      const newId = fieldsArr[id + (countFields + 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id + (countFields - 1) <= ((countFields * countFields) - 1) && !isLeftEdge && !fieldsArr[id].classList.contains('number') /// нижнее левое поле
    && !fieldsArr[id + (countFields - 1)].classList.contains('open')
    && !fieldsArr[id + (countFields - 1)].classList.contains('flag')
    && !fieldsArr[id + (countFields - 1)].classList.contains('bomb')) {
      const newId = fieldsArr[id + (countFields - 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - (countFields - 1) >= 0 && !isRightEdge && !fieldsArr[id].classList.contains('number') /// верхнее правое поле
      && !fieldsArr[id - (countFields - 1)].classList.contains('open')
      && !fieldsArr[id - (countFields - 1)].classList.contains('flag')
      && !fieldsArr[id - (countFields - 1)].classList.contains('bomb')) {
      const newId = fieldsArr[id - (countFields - 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - countFields >= 0 && !fieldsArr[id].classList.contains('number') /// /верхнее поле
    && !fieldsArr[id - countFields].classList.contains('open')
   && !fieldsArr[id - countFields].classList.contains('flag')
   && !fieldsArr[id - countFields].classList.contains('bomb')) {
      const newId = fieldsArr[id - countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - (countFields + 1) >= 0 && !isLeftEdge && !fieldsArr[id].classList.contains('number') /// /верхнее левое поле
      && !fieldsArr[id - (countFields + 1)].classList.contains('open')
      && !fieldsArr[id - (countFields + 1)].classList.contains('flag')
      && !fieldsArr[id - (countFields + 1)].classList.contains('bomb')) {
      const newId = fieldsArr[id - (countFields + 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
  }, 50);
}

function emptyFieldGrowMedium(id) {
  const isLeftEdge = (id % countFields === 0);

  const isRightEdge = (id % countFields === countFields - 1);

  setTimeout(() => {
    if (id + 1 <= ((countFields * countFields) - 1) && !isRightEdge && !fieldsArr1[id].classList.contains('number')
  && !fieldsArr1[id + 1].classList.contains('open')
  && !fieldsArr1[id + 1].classList.contains('flag')
  && !fieldsArr1[id + 1].classList.contains('bomb')) {
      const newId = fieldsArr1[id + 1].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - 1 >= 0 && !isLeftEdge && !fieldsArr1[id].classList.contains('number')
      && !fieldsArr1[id - 1].classList.contains('open')
&& !fieldsArr1[id - 1].classList.contains('flag')
&& !fieldsArr1[id - 1].classList.contains('bomb')) {
      const newId = fieldsArr1[id - 1].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id + countFields <= ((countFields * countFields) - 1) && !fieldsArr1[id].classList.contains('number') /// нижнее поле (проверка на вариабельность)
   && !fieldsArr1[id + countFields].classList.contains('open')
   && !fieldsArr1[id + countFields].classList.contains('flag')
   && !fieldsArr1[id + countFields].classList.contains('bomb')) {
      const newId = fieldsArr1[id + countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id + (countFields + 1) <= ((countFields * countFields) - 1) && !isRightEdge && !fieldsArr1[id].classList.contains('number') /// нижнее правое поле
    && !fieldsArr1[id + (countFields + 1)].classList.contains('open')
    && !fieldsArr1[id + (countFields + 1)].classList.contains('flag')
    && !fieldsArr1[id + (countFields + 1)].classList.contains('bomb')) {
      const newId = fieldsArr1[id + (countFields + 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id + (countFields - 1) <= ((countFields * countFields) - 1) && !isLeftEdge && !fieldsArr1[id].classList.contains('number') /// нижнее левое поле
    && !fieldsArr1[id + (countFields - 1)].classList.contains('open')
    && !fieldsArr1[id + (countFields - 1)].classList.contains('flag')
    && !fieldsArr1[id + (countFields - 1)].classList.contains('bomb')) {
      const newId = fieldsArr1[id + (countFields - 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - (countFields - 1) >= 0 && !isRightEdge && !fieldsArr1[id].classList.contains('number') /// верхнее правое поле
      && !fieldsArr1[id - (countFields - 1)].classList.contains('open')
      && !fieldsArr1[id - (countFields - 1)].classList.contains('flag')
      && !fieldsArr1[id - (countFields - 1)].classList.contains('bomb')) {
      const newId = fieldsArr1[id - (countFields - 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - countFields >= 0 && !fieldsArr1[id].classList.contains('number') /// /верхнее поле
    && !fieldsArr1[id - countFields].classList.contains('open')
   && !fieldsArr1[id - countFields].classList.contains('flag')
   && !fieldsArr1[id - countFields].classList.contains('bomb')) {
      const newId = fieldsArr1[id - countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - (countFields + 1) >= 0 && !isLeftEdge && !fieldsArr1[id].classList.contains('number') /// /верхнее левое поле
      && !fieldsArr1[id - (countFields + 1)].classList.contains('open')
      && !fieldsArr1[id - (countFields + 1)].classList.contains('flag')
      && !fieldsArr1[id - (countFields + 1)].classList.contains('bomb')) {
      const newId = fieldsArr1[id - (countFields + 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
  }, 50);
}

function emptyFieldGrowHard(id) {
  const isLeftEdge = (id % countFields === 0);

  const isRightEdge = (id % countFields === countFields - 1);

  setTimeout(() => {
    if (id + 1 <= ((countFields * countFields) - 1) && !isRightEdge && !fieldsArr2[id].classList.contains('number')
  && !fieldsArr2[id + 1].classList.contains('open')
  && !fieldsArr2[id + 1].classList.contains('flag')
  && !fieldsArr2[id + 1].classList.contains('bomb')) {
      const newId = fieldsArr2[id + 1].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - 1 >= 0 && !isLeftEdge && !fieldsArr2[id].classList.contains('number')
      && !fieldsArr2[id - 1].classList.contains('open')
&& !fieldsArr2[id - 1].classList.contains('flag')
&& !fieldsArr2[id - 1].classList.contains('bomb')) {
      const newId = fieldsArr2[id - 1].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id + countFields <= ((countFields * countFields) - 1) && !fieldsArr2[id].classList.contains('number') /// нижнее поле (проверка на вариабельность)
   && !fieldsArr2[id + countFields].classList.contains('open')
   && !fieldsArr2[id + countFields].classList.contains('flag')
   && !fieldsArr2[id + countFields].classList.contains('bomb')) {
      const newId = fieldsArr2[id + countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id + (countFields + 1) <= ((countFields * countFields) - 1) && !isRightEdge && !fieldsArr2[id].classList.contains('number') /// нижнее правое поле
    && !fieldsArr2[id + (countFields + 1)].classList.contains('open')
    && !fieldsArr2[id + (countFields + 1)].classList.contains('flag')
    && !fieldsArr2[id + (countFields + 1)].classList.contains('bomb')) {
      const newId = fieldsArr2[id + (countFields + 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id + (countFields - 1) <= ((countFields * countFields) - 1) && !isLeftEdge && !fieldsArr2[id].classList.contains('number') /// нижнее левое поле
    && !fieldsArr2[id + (countFields - 1)].classList.contains('open')
    && !fieldsArr2[id + (countFields - 1)].classList.contains('flag')
    && !fieldsArr2[id + (countFields - 1)].classList.contains('bomb')) {
      const newId = fieldsArr2[id + (countFields - 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - (countFields - 1) >= 0 && !isRightEdge && !fieldsArr2[id].classList.contains('number') /// верхнее правое поле
      && !fieldsArr2[id - (countFields - 1)].classList.contains('open')
      && !fieldsArr2[id - (countFields - 1)].classList.contains('flag')
      && !fieldsArr2[id - (countFields - 1)].classList.contains('bomb')) {
      const newId = fieldsArr2[id - (countFields - 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - countFields >= 0 && !fieldsArr2[id].classList.contains('number') /// /верхнее поле
    && !fieldsArr2[id - countFields].classList.contains('open')
   && !fieldsArr2[id - countFields].classList.contains('flag')
   && !fieldsArr2[id - countFields].classList.contains('bomb')) {
      const newId = fieldsArr2[id - countFields].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
    }
    if (id - (countFields + 1) >= 0 && !isLeftEdge && !fieldsArr2[id].classList.contains('number') /// /верхнее левое поле
      && !fieldsArr2[id - (countFields + 1)].classList.contains('open')
      && !fieldsArr2[id - (countFields + 1)].classList.contains('flag')
      && !fieldsArr2[id - (countFields + 1)].classList.contains('bomb')) {
      const newId = fieldsArr2[id - (countFields + 1)].id;
      const newField = document.getElementById(newId);
      clickfield(newField);
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
      checkWin++;
    } if (checkWin === countBombs) {
      document.querySelector('.gameSummary').innerText = 'HOORAY YOU WON!!!';
      for (let i = 0; i < fieldsArr.length; i++) {
        fieldsArr[i].classList.add('open');
      }
    }
  }
}
