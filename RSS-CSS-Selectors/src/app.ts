/// import { levelsList } from './levelList';

interface DefaultLevel {
    level: number;
    title: string;
    history: string;
    help: string;
    selector: string;
    animation: boolean;
    html: string[];
}

class DefaultLevel implements DefaultLevel {
    constructor(
        level: number,
        title: string,
        history: string,
        help: string,
        selector: string,
        animation: boolean,
        html: string[]
    ) {
        this.level = level;
        this.title = title;
        this.history = history;
        this.help = help;
        this.selector = selector;
        this.animation = animation;
        this.html = html;
    }

    createLevel() {
        const showHtml = document.querySelector('.editor-html__markup');
        const showLevel = document.querySelector('.levels-show');
        const levTitle = document.createElement('h2');
        levTitle.textContent = this.title;
        showLevel?.appendChild(levTitle);
        const levHistory = document.createElement('p');
        levHistory.textContent = this.history;
        showLevel?.appendChild(levHistory);
        const levHelp = document.createElement('p');
        levHelp.textContent = this.help;
        showLevel?.appendChild(levHelp);
        const levHtml = document.createElement('div');
        levHtml.textContent = this.html;
        showHtml?.appendChild(levHtml);
    }
}

const levelOne = new DefaultLevel(0, 'Первый уровень', 'Делай делай уровень', 'Делай сам', 'bun', true, ['bun', 'bun']);

levelOne.createLevel();
console.log(levelOne);

export default DefaultLevel;
