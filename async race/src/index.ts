import './styles/style.css';

import { ininialUI } from './drawUI';
import { drawCars } from './raceUI';

async function startApp(): Promise<void> {
    await ininialUI();
    drawCars();
}

startApp();
