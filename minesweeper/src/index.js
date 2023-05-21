import { drawfield, fieldsArr, sizeField, sizeBomb } from './drawfield.js';
import { clickfield, ticFlags } from './clickfield.js';
/* import './styles/style.css'; */

export let isGameOver = false;


drawfield();

fieldsArr.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.preventDefault();
    if (el.classList.contains(sizeBomb)) {
      isGameOver = true;
      console.log('boom boom, you louse');
      fieldsArr.forEach((el) => {
        if (el.classList.contains(sizeBomb)) {
          el.style.backgroundImage = 'url(\'../../image/mine1.png\')';
          el.style.backgroundColor = 'rgb(230, 227, 226)';
        }
      });
    } if (el.classList.contains('flag')) {
      return;
    }
    //clickfield(el);
  });
});

fieldsArr.forEach((el) => {
  el.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    console.log(event.target);
    ticFlags(event.target);
  });
});
