export const apiGarage = `http://localhost:3000/garage`;
let countCars = 0;

export const apiCarsPage = async (page: number, limit = 7) => {
    try {
        const response: Response = await fetch(`${apiGarage}?_page=${page}&_limit=${limit}`, { method: 'GET' });
        countCars = Number(response.headers.get('X-Total-count'));

        const arrCarsPage = response.json();

        const garageCount = document.querySelector('.garage-count') as HTMLElement;
        if (garageCount) garageCount.innerHTML = `${countCars}`;

        console.log(arrCarsPage);
    } catch (error) {
        console.error('Error fetching car data:', (error as Error).message);
    }
};

export const apiCarDelete = async (id: number) => {
    try {
        await fetch(`${apiGarage}/${id}`, {
            method: 'DELETE',
        });
    } catch (error) {
        console.error('Error fetching car data:', (error as Error).message);
    }
};

export const apiGetCar = async (id: number) => (await fetch(`${apiGarage}/${id}`, { method: 'GET' })).json();

export const apiUpdateCar = async (body: { name: string; color: string }, id: number) => {
    try {
        await fetch(`${apiGarage}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.error('Error fetching car data:', (error as Error).message);
    }
};

export const apiCreateCar = async (body: { name: string; color: string }) => {
    try {
        await fetch(apiGarage, {
            method: 'POST',
            body: JSON.stringify(body),
        });
    } catch (error) {
        console.error('Error fetching car data:', (error as Error).message);
    }
};
