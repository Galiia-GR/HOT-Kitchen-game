import { drawfield, fieldsArr } from './drawfield.js';
import { clickfield, ticFlags } from './clickfield.js';
/* import './styles/style.css'; */

drawfield();

console.log(fieldsArr);

document.addEventListener('click', (event) => {
  console.log(event.target);
  clickfield(event.target);
});

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
  console.log(event.target);
  ticFlags(event.target);
});
