import './styles/style.css';
import { levelsList } from './levelList';
import DefaultLevel from './DefaultLevel';

const showHtml = document.querySelector('.editor-html__markup');
const showLevel = document.querySelector('.levels-show');

let currentLevel: number = levelsList[0].level;

function drawLevel(level: number) {
    const myObj = new DefaultLevel(
        levelsList[level].level,
        levelsList[level].title,
        levelsList[level].history,
        levelsList[level].help,
        levelsList[level].tag,
        levelsList[level].animation,
        levelsList[level].html
    );
    myObj.createAppendLevel();
}

drawLevel(currentLevel);

function clearDrawLevel() {
    if (showHtml && showLevel) {
        showHtml.innerHTML = '';
        showLevel.innerHTML = '';
    }
}

console.log('я попадаю сюда');

console.log('пам пам пам');

const levels = document.querySelectorAll('.levels-container');

levels.forEach((el) =>
    el.addEventListener('click', (e) => {
        const temp = e.target;
        console.log(e.target);

        if ((temp as HTMLElement)?.getAttribute('id')) {
            currentLevel = Number((temp as HTMLElement)?.getAttribute('id'));
            clearDrawLevel();
            drawLevel(currentLevel);
        }
    })
);
