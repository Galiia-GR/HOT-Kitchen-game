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
const buttonReset = document.querySelector('.editor-css__resetLev');
const dataLevel: number[] = [];

const layerBunsZero = document.querySelector('.board-buns__level0') as HTMLElement;
const layerBunsOne = document.querySelector('.board-buns__level1') as HTMLElement;
const layerBunsTwo = document.querySelector('.board-buns__level2') as HTMLElement;
const layerBunsThree = document.querySelector('.board-buns__level3') as HTMLElement;
const layerBunsFour = document.querySelector('.board-buns__level4') as HTMLElement;
const layerBunsFive = document.querySelector('.board-buns__level5') as HTMLElement;

const boardImg = document.querySelector('.board-img') as HTMLElement;
const winImg = document.querySelector('.board-win') as HTMLElement;
const winHeader = document.querySelector('.editor-win') as HTMLElement;
const editorHeader = document.querySelector('.editor-title') as HTMLElement;

let currentLevel: number = levelsList[0].level;

function drawLevel(level: number) {
    const myObj = new DefaultLevel(
        levelsList[level].level,
        levelsList[level].title,
        levelsList[level].history,
        levelsList[level].tag,
        levelsList[level].id,
        levelsList[level].html,
        levelsList[level].childFist,
        levelsList[level].childSecond,
        levelsList[level].childThird,
        levelsList[level].childFourth,
        levelsList[level].childFifth
    );

    if (layerBunsOne && layerBunsOne.style) layerBunsOne.style.display = 'none';
    if (layerBunsTwo && layerBunsTwo.style) layerBunsTwo.style.display = 'none';
    if (layerBunsThree && layerBunsThree.style) layerBunsThree.style.display = 'none';
    if (layerBunsFour && layerBunsFour.style) layerBunsFour.style.display = 'none';
    if (layerBunsFive && layerBunsFive.style) layerBunsFive.style.display = 'none';

    arrLevels.forEach((el) => {
        if (Number(el.getAttribute('id')) === currentLevel) el.classList.add('hover');
    });

    myObj.createAppendLevel();
    myObj.createHtmlMarkUp();
    myObj.createHintsShakeElements();
    myObj.win();
    myObj.pressHelp();
}

drawLevel(currentLevel);

function clearDrawLevel() {
    if (showHtml && showLevel && arrBoardPictires) {
        showHtml.innerHTML = '';
        showLevel.innerHTML = '';
        arrBoardPictires.forEach((element) => {
            if (element.classList.contains('shake')) element.classList.remove('shake');
        });
        arrLevels.forEach((el) => {
            if (el.classList.contains('hover')) el.classList.remove('hover');
        });
    }
}

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

htmlMarkUp?.addEventListener('mouseover', (e) => {
    const targetNode = e.target as Node;
    if (targetNode.parentNode) {
        const parentElement = targetNode.parentNode as HTMLElement;
        const dataHtml = parentElement.getAttribute('data');

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

        arrBoardPictires.forEach((el) => {
            if (dataHtml && el.parentElement?.classList.contains(dataHtml)) {
                el.parentElement?.classList.remove('hover');
            }
        });
    }
});

function checkArray(arr: number[] = []) {
    const expected = Array.from(Array(11).keys()); // Создаем массив с элементами от 0 до 10
    return expected.every((element) => arr.includes(element));
}

const checkWin = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
            const targetElement = mutation.target as HTMLElement;
            if (targetElement.classList.contains('win')) {
                dataLevel.push(Number(targetElement.getAttribute('id')));
                localStorage.setItem('dataLevel', JSON.stringify(dataLevel));
                clearDrawLevel();
                (inputPlace as HTMLInputElement).value = '';

                console.log(dataLevel);
                if (checkArray(dataLevel)) {
                    if (layerBunsZero && layerBunsZero.style) layerBunsZero.style.display = 'none';
                    if (layerBunsOne && layerBunsOne.style) layerBunsOne.style.display = 'none';
                    if (layerBunsTwo && layerBunsTwo.style) layerBunsTwo.style.display = 'none';
                    if (layerBunsThree && layerBunsThree.style) layerBunsThree.style.display = 'none';
                    if (layerBunsFour && layerBunsFour.style) layerBunsFour.style.display = 'none';
                    if (layerBunsFive && layerBunsFive.style) layerBunsFive.style.display = 'none';

                    if (boardImg && boardImg.style) boardImg.style.display = 'none';
                    if (editorHeader && editorHeader.style) editorHeader.style.display = 'none';

                    if (winHeader && winHeader.style) winHeader.style.display = 'block';
                    if (winImg && winImg.style) winImg.style.display = 'block';

                    console.log('!!!!You win !!!!');
                } else {
                    if (currentLevel !== 10) currentLevel = Number(targetElement.getAttribute('id')) + 1;
                    drawLevel(currentLevel);
                }
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

buttonReset?.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
});

winStore();
