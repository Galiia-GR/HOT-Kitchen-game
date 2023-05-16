import { fieldsArr } from './drawfield.js';

export function clickfield() {
  console.log('func 2');
  fieldsArr.forEach((el) => {
    el.addEventListener('click', (event) => {
      console.log(event.target);
      if (event.target.classList.contains('bomb')) {
        console.log('game over');
      } else {
        let numbers = event.target.getAttribute('data');
          console.log(numbers);
        }
    });
  });
}
