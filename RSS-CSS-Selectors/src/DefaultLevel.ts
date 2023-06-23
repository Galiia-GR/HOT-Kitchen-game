const showHtml = document.querySelector('.editor-html__markup');
const showLevel = document.querySelector('.levels-show');

interface DefaultLevel {
    level: number;
    title: string;
    history: string;
    help: string;
    tag: string;
    animation: boolean;
    html: string;
}

class DefaultLevel implements DefaultLevel {
    constructor(
        level: number,
        title: string,
        history: string,
        help: string,
        tag: string,
        animation: boolean,
        html: string
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

        levHelp.textContent = this.help;
        showLevel?.appendChild(levHelp);
        levTitle.textContent = this.title;
        showLevel?.appendChild(levTitle);
        showLevel?.appendChild(levHistory);
        levHistory.textContent = this.history;

        const html = document.createElement('div');
        html.classList.add('markup__item');
        showHtml?.appendChild(html);
        const html1 = document.createElement('div');
        html1.classList.add('markup__item');
        showHtml?.appendChild(html1);
        html.textContent = this.html;
        html1.textContent = this.html;
    }
}

export default DefaultLevel;
