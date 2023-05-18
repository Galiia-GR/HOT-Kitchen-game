import { drawfield, fieldsArr } from './drawfield.js';
import { clickfield } from './clickfield.js';
/* import './styles/style.css'; */

drawfield();

console.log(fieldsArr);

fieldsArr.forEach((el) => {
  el.addEventListener('click', (event) => {
    console.log(event.target);
    clickfield(el);
    console.log('main');
  });
});
