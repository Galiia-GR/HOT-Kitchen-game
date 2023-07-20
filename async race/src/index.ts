import './styles/style.css';

import { ininialUI } from './drawUI';
import { fethCarsUI } from './raceUI';
import { garageApi } from './api';

async function startApp(): Promise<void> {
    await ininialUI();
    fethCarsUI(garageApi);
}

startApp();
