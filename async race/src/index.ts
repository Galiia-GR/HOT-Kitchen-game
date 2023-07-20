import './styles/style.css';
import { ininialUI, helpCreateEl } from './drawUI';
import { fethCarsUI } from './raceUI';
import { garageApi } from './api';
import { switchLayout } from './buttons';

async function startApp(): Promise<void> {
    await ininialUI();
    await fethCarsUI(garageApi);
    switchLayout();
    footer();
}

startApp();

function footer() {
    const container = document.querySelector('.container');
    const footerEl = helpCreateEl('footer', 'footer');
    container?.appendChild(footerEl);
    const temp = `
    <a class="RSS" href="https://rs.school/js/" target="_blank">
        <img src="./images/3fc4b04a9808cbde8693.svg" width="94" height="22" alt="RS School" />
    </a>
    <p>
        2023 by Galiia-GR
        <a href="https://github.com/Galiia-GR" target="_blank">
            <img src="./images/beb09d6d137067aa9487.svg" width="28" height="28" alt="github"
        /></a>
    </p>
`;
    footerEl.innerHTML = temp;
}
