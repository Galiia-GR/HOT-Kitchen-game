const showHtml = document.querySelector('.editor-html__markup');
const showLevel = document.querySelector('.levels-show');

interface DefaultLevel {
    level: number;
    title: string;
    history: string;
    help: string;
    tag: string;
    animation: boolean;
    html: string[];
}

class DefaultLevel implements DefaultLevel {
    constructor(
        level: number,
        title: string,
        history: string,
        help: string,
        tag: string,
        animation: boolean,
        html: string[]
    ) {
        this.level = level;
        this.title = title;
        this.history = history;
        this.help = help;
        this.tag = tag;
        this.animation = animation;
        this.html = html;
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
        const [temp0, temp1, temp2, temp3] = this.html;
        const html0 = document.createElement('div');
        html0.classList.add('markup__item');
        showHtml?.appendChild(html0);
        html0.textContent = temp0;

        const html1 = document.createElement('div');
        html1.classList.add('markup__item');
        showHtml?.appendChild(html1);
        html1.textContent = temp1;

        const html2 = document.createElement('div');
        html2.classList.add('markup__item');
        showHtml?.appendChild(html2);
        html2.textContent = temp2;

        const html3 = document.createElement('div');
        html3.classList.add('markup__item');
        showHtml?.appendChild(html3);
        html3.textContent = temp3;
    }
}

export default DefaultLevel;
