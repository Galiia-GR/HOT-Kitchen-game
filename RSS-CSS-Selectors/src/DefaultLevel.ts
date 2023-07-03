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

        /*   the fifth layer  */

        if (this.childFifth.length !== 0) {
            const [...arrChildFifthHtml] = this.childFifth;

            const boardLev5 = document.querySelector('.board-buns__level5') as HTMLElement;
            if (boardLev5) {
                boardLev5.style.display = 'flex';
            }

            const arrGeneralBunsHtml = document.querySelectorAll('.general');

            arrChildFifthHtml.forEach((element, index: number) => {
                const tempSpan = document.createElement('span');
                const tempDiv = document.createElement('div');
                tempDiv.classList.add('markup__item');
                tempDiv.classList.add('level3');

                switch (index) {
                    case 0:
                        tempDiv.setAttribute('data', `headBlackFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 1:
                        tempDiv.setAttribute('data', `headWhiteFirst`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;

                    case 2:
                        tempDiv.setAttribute('data', `headBlackSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);
                        break;
                    case 3:
                        tempDiv.setAttribute('data', `headWhiteSecond`);
                        showHtml?.appendChild(tempDiv);
                        arrGeneralBunsHtml[index].appendChild(tempDiv);

                        break;
                    default:
                        console.log('Opps');
                        break;
                }
                tempDiv?.appendChild(tempSpan);
                tempSpan.textContent = `</${element}>`;
                tempDiv.classList.add(`${element}`);
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
                element.classList.add('shake');
                const findCheeseToShake = document.querySelectorAll('.cheese');
                findCheeseToShake.forEach((el) => {
                    if (el.classList.contains('bun')) el.classList.add('shake');
                });
                const findTomatoToShake = document.querySelectorAll('.tomat');
                findTomatoToShake.forEach((el) => {
                    if (el.classList.contains('bun')) el.classList.add('shake');
                });
                const findCheeseToCancelFirst = document.querySelector('[data ="cheeseWhiteFirst"]');
                if (findCheeseToCancelFirst) {
                    const spanTemp = findCheeseToCancelFirst.querySelector('span');
                    if (spanTemp) spanTemp.innerText = '<cheese>';
                }

                const findCheeseToCancelSecond = document.querySelector('[data ="cheeseWhiteSecond"]');
                if (findCheeseToCancelSecond) {
                    const spanTemp = findCheeseToCancelSecond.querySelector('span');
                    if (spanTemp) spanTemp.innerText = '<cheese>';
                }

                const findCheeseToCancelThird = document.querySelector('[data ="cheeseBlackFirst"]');
                if (findCheeseToCancelThird) {
                    const spanTemp = findCheeseToCancelThird.querySelector('span');
                    if (spanTemp) spanTemp.innerText = '<cheese>';
                }

                const findCheeseToCancelFourth = document.querySelector('[data ="cheeseBlackSecond"]');
                if (findCheeseToCancelFourth) {
                    const spanTemp = findCheeseToCancelFourth.querySelector('span');
                    if (spanTemp) spanTemp.innerText = '<cheese>';
                }
            }

            if (Number(this.level) === 9 && element.classList.contains('head') && element.classList.contains('black')) {
                element.classList.add('shake');

                const findBlackToChange = document.querySelectorAll('[data ="blackFirst"]');
                findBlackToChange.forEach((item) => {
                    if (item.classList.contains('general')) {
                        const spanTemp = item.querySelector('span');
                        if (spanTemp) spanTemp.innerText = '<black class = "my__order">';
                    }
                });
            }
            if (
                Number(this.level) === 9 &&
                element.classList.contains('black') &&
                element.classList.contains('salat')
            ) {
                element.classList.add('shake');

                const findBlackToChange = document.querySelectorAll('[data ="blackSecond"]');
                findBlackToChange.forEach((item) => {
                    if (item.classList.contains('general')) {
                        const spanTemp = item.querySelector('span');
                        if (spanTemp) spanTemp.innerText = '<black class = "my__order">';
                    }
                });
            }

            if (
                Number(this.level) === 9 &&
                element.classList.contains('black') &&
                element.classList.contains('tomat')
            ) {
                element.classList.add('shake');
            }
            if (
                Number(this.level) === 9 &&
                element.classList.contains('black') &&
                element.classList.contains('cheese')
            ) {
                element.classList.add('shake');
            }

            if (Number(this.level) === 9 && element.classList.contains('black') && element.classList.contains('meat')) {
                element.classList.add('shake');
            }
            if (Number(this.level) === 9 && element.classList.contains('black') && element.classList.contains('bun')) {
                element.classList.add('shake');
            }
            if (Number(this.level) === 10 && element.classList.contains('bun')) element.classList.add('shake');
        });
    }

    win() {
        const button = document.querySelector('.editor-css__button');
        const inputPlace = document.querySelector('.editor-css__input') as HTMLInputElement;
        const boardImg = document.querySelector('.board-img') as HTMLElement;

        button?.addEventListener('click', () => {
            if (this.tag !== inputPlace.value) {
                boardImg.style.animation = 'shake 0.5s';
                console.log('You wrong');
            } else {
                arrLevels.forEach((item) => {
                    if (Number(item.getAttribute('id')) === this.level) {
                        item.classList.add('win');
                    }
                });
                console.log('You right');
            }
        });

        inputPlace?.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                if (this.tag !== inputPlace.value) {
                    boardImg.style.animation = 'shake 0.5s';
                    console.log('You wrong');
                } else {
                    arrLevels.forEach((item) => {
                        if (Number(item.getAttribute('id')) === this.level) {
                            item.classList.add('win');
                        }
                    });
                    console.log('You right');
                }
            }
        });
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
