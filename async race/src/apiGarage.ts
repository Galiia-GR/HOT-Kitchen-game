export const apiGarage = `http://localhost:3000/garage`;
let countCars = 0;

interface Car {
    id: number;
    name: string;
    color: string;
}

export const apiCarsPageCount = async (page: number, limit = 7): Promise<Car[]> => {
    try {
        const response: Response = await fetch(`${apiGarage}?_page=${page}&_limit=${limit}`, { method: 'GET' });
        countCars = Number(response.headers.get('X-Total-count'));

        const arrCarsPage = response.json();

        const garageCount = document.querySelector('.garage-count') as HTMLElement;
        if (garageCount) garageCount.innerHTML = `${countCars}`;
        return arrCarsPage;
    } catch (error) {
        console.error('Error fetching car data:', (error as Error).message);
        throw error;
    }
};

apiCarsPageCount(1);

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

export const apiUpdateCar = async (body: object, id: number) => {
    try {
        await fetch(`${apiGarage}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching car data:', (error as Error).message);
    }
};

export const apiCreateCar = async (body: object) => {
    try {
        await fetch(apiGarage, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching car data:', (error as Error).message);
    }
};
