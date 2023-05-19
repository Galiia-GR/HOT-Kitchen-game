import { drawfield, fieldsArr } from './drawfield.js';
import { clickfield, ticFlags } from './clickfield.js';
/* import './styles/style.css'; */

drawfield();

console.log(fieldsArr);
fieldsArr.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(el);
    clickfield(el);
  });
});

fieldsArr.forEach((el) => {
  el.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log(event.target);
    ticFlags(event.target);
  });
});
