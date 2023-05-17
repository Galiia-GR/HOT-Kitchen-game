import { drawfield, fieldsArr } from './drawfield.js';
import { clickfield } from './clickfield.js';
/* import './styles/style.css'; */

console.log('main');

drawfield();

console.log(fieldsArr);

fieldsArr.forEach((el) => {
  el.addEventListener('click', (event) => {
    console.log(event.target);
    clickfield(el);
  });
});
