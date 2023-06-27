const showHtml = document.querySelector('.editor-html__markup');
const showLevel = document.querySelector('.levels-show');
const arrBoardPictires = document.querySelectorAll('.bun');
const arrLevels = document.querySelectorAll('.levels__item');

interface DefaultLevel {
    level: number;
    title: string;
    history: string;
    help: string;
    tag: string;
    id: string;
    html: string[];
    child: string[];
}

class DefaultLevel implements DefaultLevel {
    constructor(
        level: number,
        title: string,
        history: string,
        help: string,
        tag: string,
        id: string,
        html: string[],
        child: string[]
    ) {
        this.level = level;
        this.title = title;
        this.history = history;
        this.help = help;
        this.tag = tag;
        this.id = id;
        this.html = html;
        this.child = child;
    }

    createAppendLevel() {
        const levTitle = document.createElement('h2');
        const levHistory = document.createElement('p');
        const levHelp = document.createElement('p');

        levTitle.textContent = this.title;
        showLevel?.appendChild(levTitle);
        showLevel?.appendChild(levHistory);
        levHistory.textContent = this.history;
        levHelp.textContent = this.help;
        showLevel?.appendChild(levHelp);
    }

    createHtmlMarkUp() {
        const [...arrHtml] = this.html;

        arrHtml.forEach((element, index: number) => {
            const tempDiv = document.createElement('div');
            tempDiv.classList.add('markup__item');

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
            const tempSpan = document.createElement('span');
            tempDiv?.appendChild(tempSpan);
            if (typeof element === 'string' && this.id !== '' && index === 1) {
                tempSpan.textContent = `<${element} id=${this.id}>
                </${element}>`;
                tempDiv.classList.add(`${element}`);
            } else {
                tempSpan.textContent = `<${element}>
                </${element}>`;
                tempDiv.classList.add(`${element}`);
            }
        });
    }

    createHintsShakeElements() {
        console.log('this шейк');
        arrBoardPictires.forEach((element) => {
            if (element.classList.contains(this.tag)) element.classList.add('shake');
        });
    }

    win() {
        const button = document.querySelector('.editor-css__button');
        const inputPlace = document.querySelector('.editor-css__input') as HTMLInputElement;
        button?.addEventListener('click', () => {
            if (inputPlace) {
                if (this.tag === inputPlace.value) {
                    arrLevels.forEach((item) => {
                        if (Number(item.getAttribute('id')) === this.level) {
                            item.classList.add('win');
                        }
                    });
                }
            }
        });
    }
}

export default DefaultLevel;
