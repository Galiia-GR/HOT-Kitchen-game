import './styles/style.css';

import { ininialUI } from './drawUI';
import { drawCars, fethCars } from './raceUI';

async function startApp(): Promise<void> {
    await ininialUI();
    drawCars();
    fethCars('http://localhost:3000/garage');
}

startApp();
