const showHtml = document.querySelector('.editor-html__markup');
const showLevel = document.querySelector('.levels-show');
const arrBoardPictires = document.querySelectorAll('.bun');
const arrLevels = document.querySelectorAll('.levels__item');
const buttonHelp = document.querySelector('.editor-css__help');

interface DefaultLevel {
    level: number;
    title: string;
    history: string;
    tag: string;
    id: string;
    html: string[];
    childFirst: string[];
    childSecond: string[];
    childThird: string[];
    childFourth: string[];
    childFifth: string[];
}

class DefaultLevel implements DefaultLevel {
    constructor(
        level: number,
        title: string,
        history: string,
        tag: string,
        id: string,
        html: string[],
        childFirst: string[],
        childSecond: string[],
        childThird: string[],
        childFourth: string[],
        childFifth: string[]
    ) {
        this.level = level;
        this.title = title;
        this.history = history;
        this.tag = tag;
        this.id = id;
        this.html = html;
        this.childFirst = childFirst;
        this.childSecond = childSecond;
        this.childThird = childThird;
        this.childFourth = childFourth;
        this.childFifth = childFifth;
    }

    createAppendLevel() {
        const levTitle = document.createElement('h2');
        const levHistory = document.createElement('p');

        levTitle.textContent = this.title;
        showLevel?.appendChild(levTitle);
        showLevel?.appendChild(levHistory);
        levHistory.textContent = this.history;
    }

    createHtmlMarkUp() {
        const [...arrHtml] = this.html;

        /*  inintial layer   */

        arrHtml.forEach((element, index: number) => {
            const tempDiv = document.createElement('div');
            const tempSpan = document.createElement('span');
            tempDiv.classList.add('markup__item');
            tempDiv.classList.add('general');
            switch (index) {
                case 0:
                    tempDiv.setAttribute('data', `${element}First`);
                    showHtml?.appendChild(tempDiv);
                    break;

                case 1:
                    tempDiv.setAttribute('data', `${element}First`);
                    showHtml?.appendChild(tempDiv);
                    break;

                case 2:
                    tempDiv.setAttribute('data', `${element}Second`);
                    showHtml?.appendChild(tempDiv);
                    break;
                case 3:
                    tempDiv.setAttribute('data', `${element}Second`);
                    showHtml?.appendChild(tempDiv);
                    break;
                default:
                    console.log('Opps');
                    break;
            }
            tempDiv?.appendChild(tempSpan);
            if (typeof element === 'string' && this.id !== '' && index === 1) {
                tempSpan.textContent = `<${element} id=${this.id}>`;
                tempDiv.classList.add(`${element}`);
            } else {
                tempSpan.textContent = `<${element}>`;
                tempDiv.classList.add(`${element}`);
            }
        });

        /*   the first layer  */

        if (this.childFirst.length !== 0) {
            const [...arrChildFirstHtml] = this.childFirst;
            const boardLev1 = document.querySelector('.board-buns__level1') as HTMLElement;
            if (boardLev1) {
                boardLev1.style.display = 'flex';
            }

            const arrGeneralBunsHtml = document.querySelectorAll('.general');

            arrChildFirstHtml.forEach((element, index: number) => {
                const tempSpan = document.createElement('span');
                const tempDiv = document.createElement('div');
                tempDiv.classList.add('markup__item');
                tempDiv.classList.add('level1');

                switch (index) {
                    case 0:
                        tempDiv.setAttribute('data', `${element}BlackFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 1:
                        tempDiv.setAttribute('data', `${element}WhiteFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 2:
                        tempDiv.setAttribute('data', `${element}BlackSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;
                    case 3:
                        tempDiv.setAttribute('data', `${element}WhiteSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);

                        break;
                    default:
                        console.log('Opps');
                        break;
                }
                tempDiv?.appendChild(tempSpan);
                tempSpan.textContent = `<${element}>`;
                tempDiv.classList.add(`${element}`);
            });
        }

        /*   the second layer  */

        if (this.childSecond.length !== 0) {
            const [...arrChildSecondHtml] = this.childSecond;
            console.log(arrChildSecondHtml);

            const boardLev2 = document.querySelector('.board-buns__level2') as HTMLElement;
            if (boardLev2) {
                boardLev2.style.display = 'flex';
            }

            const arrGeneralBunsHtml = document.querySelectorAll('.general');

            arrChildSecondHtml.forEach((element, index: number) => {
                const tempSpan = document.createElement('span');
                const tempDiv = document.createElement('div');
                tempDiv.classList.add('markup__item');
                tempDiv.classList.add('level2');

                switch (index) {
                    case 0:
                        tempDiv.setAttribute('data', `${element}BlackFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 1:
                        tempDiv.setAttribute('data', `${element}WhiteFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 2:
                        tempDiv.setAttribute('data', `${element}BlackSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;
                    case 3:
                        tempDiv.setAttribute('data', `${element}WhiteSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);

                        break;
                    default:
                        console.log('Opps');
                        break;
                }
                tempDiv?.appendChild(tempSpan);
                tempSpan.textContent = `<${element} class = "slice" >`;
                tempDiv.classList.add(`${element}`);
            });
        }

        /*   the third layer  */

        if (this.childThird.length !== 0) {
            const [...arrChildThirdHtml] = this.childThird;
            console.log(arrChildThirdHtml);

            const boardLev3 = document.querySelector('.board-buns__level3') as HTMLElement;
            if (boardLev3) {
                boardLev3.style.display = 'flex';
            }

            const arrGeneralBunsHtml = document.querySelectorAll('.general');

            arrChildThirdHtml.forEach((element, index: number) => {
                const tempSpan = document.createElement('span');
                const tempDiv = document.createElement('div');
                tempDiv.classList.add('markup__item');
                tempDiv.classList.add('level3');

                switch (index) {
                    case 0:
                        tempDiv.setAttribute('data', `${element}BlackFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 1:
                        tempDiv.setAttribute('data', `${element}WhiteFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 2:
                        tempDiv.setAttribute('data', `${element}BlackSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;
                    case 3:
                        tempDiv.setAttribute('data', `${element}WhiteSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);

                        break;
                    default:
                        console.log('Opps');
                        break;
                }
                tempDiv?.appendChild(tempSpan);
                tempSpan.textContent = `<${element} class = "tomato" >`;
                tempDiv.classList.add(`${element}`);
            });
        }

        /*   the fourth layer  */

        if (this.childFourth.length !== 0) {
            const [...arrChildFourthHtml] = this.childFourth;
            console.log(arrChildFourthHtml);

            const boardLev4 = document.querySelector('.board-buns__level4') as HTMLElement;
            if (boardLev4) {
                boardLev4.style.display = 'flex';
            }

            const arrGeneralBunsHtml = document.querySelectorAll('.general');

            arrChildFourthHtml.forEach((element, index: number) => {
                const tempSpan = document.createElement('span');
                const tempDiv = document.createElement('div');
                tempDiv.classList.add('markup__item');
                tempDiv.classList.add('level3');

                switch (index) {
                    case 0:
                        tempDiv.setAttribute('data', `${element}BlackFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 1:
                        tempDiv.setAttribute('data', `${element}WhiteFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 2:
                        tempDiv.setAttribute('data', `${element}BlackSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;
                    case 3:
                        tempDiv.setAttribute('data', `${element}WhiteSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);

                        break;
                    default:
                        console.log('Opps');
                        break;
                }

                if (index === 1) {
                    tempDiv?.appendChild(tempSpan);
                    tempSpan.textContent = `<${element} id = "select_salat">`;
                    tempDiv.classList.add(`${element}`);
                } else {
                    tempDiv?.appendChild(tempSpan);
                    tempSpan.textContent = `<${element}>`;
                    tempDiv.classList.add(`${element}`);
                }
            });
        }
    }

    createHintsShakeElements() {
        arrBoardPictires.forEach((element) => {
            if (element.classList.contains(this.tag)) element.classList.add('shake');
            if (Number(this.level) === 2 && element.getAttribute('data') === 'whiteFirst')
                element.classList.add('shake');
            if (Number(this.level) === 4 && element.classList.contains('white') && element.classList.contains('meat'))
                element.classList.add('shake');
            if (Number(this.level) === 5 && element.classList.contains('cheese')) element.classList.add('shake');

            if (
                Number(this.level) === 6 &&
                element.classList.contains('tomat') &&
                element.parentElement?.classList.contains('tomatBlackFirst')
            ) {
                element.classList.add('shake');
                const findCheeseToShake = document.querySelector('.cheeseBlackFirst');
                findCheeseToShake?.querySelector('.cheese')?.classList.add('shake');
                const findCheeseToCancel = document.querySelector('[data ="cheeseWhiteFirst"]');
                if (findCheeseToCancel) {
                    const spanTemp = findCheeseToCancel.querySelector('span');
                    if (spanTemp) spanTemp.innerText = '<cheese>';
                }
            }
            if (
                Number(this.level) === 6 &&
                element.classList.contains('tomat') &&
                element.parentElement?.classList.contains('tomatBlackSecond')
            ) {
                element.classList.add('shake');
                const findCheeseToShake = document.querySelector('.cheeseBlackSecond');
                findCheeseToShake?.querySelector('.cheese')?.classList.add('shake');
                const findCheeseToCancel = document.querySelector('[data ="cheeseWhiteSecond"]');
                if (findCheeseToCancel) {
                    const spanTemp = findCheeseToCancel.querySelector('span');
                    if (spanTemp) spanTemp.innerText = '<cheese>';
                }
            }
            if (
                Number(this.level) === 7 &&
                element.classList.contains('salat') &&
                element.parentElement?.classList.contains('salatWhiteFirst')
            ) {
                element.classList.add('shake');
                const findWhiteToShake = document.querySelector('.whiteFirst');
                findWhiteToShake?.querySelector('.white')?.classList.add('shake');
                const findWhiteToShakeSecond = document.querySelector('.whiteSecond');
                findWhiteToShakeSecond?.querySelector('.white')?.classList.add('shake');
            }

            if (Number(this.level) === 8 && element.classList.contains('salat')) {
                const findTomatoToShake = document.querySelector('.tomatBlackSecond');
                findTomatoToShake?.querySelector('.tomat')?.classList.add('shake');
                element.classList.add('shake');
            }
        });
    }

    win() {
        const button = document.querySelector('.editor-css__button');
        const inputPlace = document.querySelector('.editor-css__input') as HTMLInputElement;

        const handleButtonClick = () => {
            if (inputPlace) {
                if (this.tag === inputPlace.value) {
                    arrLevels.forEach((item) => {
                        if (Number(item.getAttribute('id')) === this.level) {
                            item.classList.add('win');
                        }
                    });
                }
            }
        };

        const handleInputKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Enter') {
                handleButtonClick();
            }
        };

        button?.addEventListener('click', handleButtonClick);
        inputPlace?.addEventListener('keydown', handleInputKeyDown);
    }

    pressHelp() {
        buttonHelp?.addEventListener('click', () => {
            const inputPlace = document.querySelector('.editor-css__input') as HTMLInputElement;
            if (inputPlace) {
                inputPlace.value = this.tag;
            }
        });
    }
}

export default DefaultLevel;
