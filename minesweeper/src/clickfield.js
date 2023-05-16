import { fieldsArr, countFields } from './drawfield.js';

const isGameOver = false;

export function clickfield() {
  console.log('func 2');

  fieldsArr.forEach((el) => {
    el.addEventListener('click', (event) => {
      const id = el.getAttribute('id');
      console.log(id);
      console.log(event.target);
      if (isGameOver) return;
      if (el.classList.contains('open')) return;
      if (event.target.classList.contains('bomb')) {
        console.log('game over');
      } else {
        const numbers = event.target.getAttribute('data');
        console.log(numbers);
        if (numbers != 0) {
          event.target.innerText = numbers;

          switch (numbers) {
            case '1':
              event.target.classList.add('open__one');
              break;

            case '2':
              event.target.classList.add('open__two');
              break;
            case '3':
              event.target.classList.add('open__three');
              break;
            case '4':
              event.target.classList.add('open__four');
              break;
            default:
  // do nothing;
          }
        }

        // checkOpenField(field, id);
      }
      // event.target.classList.add('open');
    });
  });
}

// function checkOpenField(field, id) {

//  const ifLeftEdge = (id % countFields/10 === 0);

//  const isRightEdge = (id % countFields/10 === countFields/10 - 1);

//  setTimeout(() => {

//  })

// }
