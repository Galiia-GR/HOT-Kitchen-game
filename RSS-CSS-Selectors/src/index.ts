import './styles/style.css';
import { levelsList } from './levelList';
import DefaultLevel from './DefaultLevel';

const showHtml = document.querySelector('.editor-html__markup');
const showLevel = document.querySelector('.levels-show');
const arrBoardPictires = document.querySelectorAll('.bun');
const htmlMarkUp = document.querySelector('.editor-html__markup');
const arrLevels = document.querySelectorAll('.levels__item');
const levels = document.querySelectorAll('.levels-container');
const inputPlace = document.querySelector('.editor-css__input');
const dataLevel: number[] = [];

let currentLevel: number = levelsList[0].level;

function drawLevel(level: number) {
    const myObj = new DefaultLevel(
        levelsList[level].level,
        levelsList[level].title,
        levelsList[level].history,
        levelsList[level].help,
        levelsList[level].tag,
        levelsList[level].id,
        levelsList[level].html,
        levelsList[level].child
    );
    myObj.createAppendLevel();
    myObj.createHtmlMarkUp();
    myObj.createHintsShakeElements();
    myObj.win();
}

drawLevel(currentLevel);

function clearDrawLevel() {
    if (showHtml && showLevel && arrBoardPictires) {
        showHtml.innerHTML = '';
        showLevel.innerHTML = '';
        arrBoardPictires.forEach((element) => {
            if (element.classList.contains('shake')) element.classList.remove('shake');
        });
    }
}

console.log('я попадаю сюда пам пам пам и нажимаю уровни');

levels.forEach((el) =>
    el.addEventListener('click', (e) => {
        const temp = e.target;

        if ((temp as HTMLElement)?.getAttribute('id')) {
            currentLevel = Number((temp as HTMLElement)?.getAttribute('id'));
            (inputPlace as HTMLInputElement).value = '';
            clearDrawLevel();

            drawLevel(currentLevel);
        }
    })
);

console.log(htmlMarkUp);

htmlMarkUp?.addEventListener('mouseover', (e) => {
    const targetNode = e.target as Node;
    if (targetNode.parentNode) {
        const parentElement = targetNode.parentNode as HTMLElement;
        const dataHtml = parentElement.getAttribute('data');

        console.log(dataHtml);

        arrBoardPictires.forEach((el) => {
            if (dataHtml) {
                if (el.parentElement?.classList.contains(dataHtml)) {
                    el.parentElement?.classList.add('hover');
                }
            }
        });
    }
});

htmlMarkUp?.addEventListener('mouseout', (e) => {
    const targetNode = e.target as Node;
    if (targetNode.parentNode) {
        const parentElement = targetNode.parentNode as HTMLElement;
        const dataHtml = parentElement.getAttribute('data');

        console.log(dataHtml);

        arrBoardPictires.forEach((el) => {
            if (dataHtml && el.parentElement?.classList.contains(dataHtml)) {
                el.parentElement?.classList.remove('hover');
            }
        });
    }
});

const checkWin = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            const targetElement = mutation.target as HTMLElement;
            if (targetElement.classList.contains('win')) {
                dataLevel.push(Number(targetElement.getAttribute('id')));
                localStorage.setItem('dataLevel', JSON.stringify(dataLevel));
                clearDrawLevel();
                (inputPlace as HTMLInputElement).value = '';
                currentLevel = Number(targetElement.getAttribute('id')) + 1;
                console.log(currentLevel);

                drawLevel(currentLevel);
            }
        }
    });
});

arrLevels.forEach((element) => {
    checkWin.observe(element, { attributes: true });
});

function winStore() {
    const getLevel = localStorage.getItem('dataLevel');
    if (getLevel) {
        const levelData = JSON.parse(getLevel);
        console.log(levelData);
        arrLevels.forEach((item) => {
            levelData.forEach((el: number) => {
                if (Number(item.getAttribute('id')) === el) {
                    item.classList.add('win');
                }
            });
        });
    }
}

winStore();
