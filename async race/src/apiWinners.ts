import { helpCreateEl } from './drawUI';

export const apiWinners = 'http://localhost:3000/winners';
let countWinners = 0;
let count = 0;

export async function fetchWinners(url: string): Promise<void> {
    try {
        const tableContain = document.querySelector('.win-container');
        const response: Response = await fetch(url, { method: 'GET' });

        const arrWin = await response.json();
        arrWin.forEach((data: { id: number; wins: number; time: number }) => {
            const carHtml = document.getElementById(`${data.id}`);
            const carNameTitle = carHtml?.querySelector('.car__title');
            const carImg = carHtml?.querySelector('.car__img') as HTMLElement;

            count += 1;
            const el = helpCreateEl('tr', `${data.id}`);
            const temp = `<td>${count}</td>
        <td class = "win__look"></td>
        <td>${carNameTitle?.textContent}</td>
        <td>${data.wins}</td>
        <td>${data.time}</td>`;

            tableContain?.append(el);
            el.innerHTML = temp;
            const winCar = document.querySelector('.win__look');
            if (winCar) winCar.textContent = carImg.textContent;
        });
    } catch (error) {
        console.error('Error fetching winnersApi:', (error as Error).message);
    }
}

await fetchWinners(apiWinners);

export async function apiGetWinTotal(page: number, limit = 10) {
    try {
        const response: Response = await fetch(`${apiWinners}?_page=${page}&_limit=${limit}`, { method: 'GET' });
        countWinners = Number(response.headers.get('X-Total-count'));
        const winsResp = await response.json();
        console.log(winsResp);
    } catch (error) {
        console.error('Error fetching winners total count:', (error as Error).message);
    }
    const winnersCountHtml = document.querySelector('.winners-count') as HTMLElement;
    if (winnersCountHtml) winnersCountHtml.innerHTML = `${countWinners}`;
}

apiGetWinTotal(1);

export async function apiGetWin(id: number) {
    try {
        const response: Response = await fetch(`${apiWinners}/${id}`, { method: 'GET' });
        const winResp = await response.json();
        console.log(winResp);
    } catch (error) {
        console.error('Error fetching winner id:', (error as Error).message);
    }
}

export const apiWinnerDelete = async (id: number) => {
    try {
        await fetch(`${apiWinners}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error fetching car data:', (error as Error).message);
    }
};
