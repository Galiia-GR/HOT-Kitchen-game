const apiMotor = 'http://localhost:3000/engine';

export async function apiStartMotor(id: number) {
    try {
        const response: Response = await fetch(`${apiMotor}?id=${id}&status=started`, { method: 'PATCH' });
        const arrStart = await response.json();
        console.log(arrStart);
    } catch (error) {
        console.error('Error starting motor:', (error as Error).message);
    }
}

export async function apiStopMotor(id: number) {
    try {
        const response: Response = await fetch(`${apiMotor}?id=${id}&status=stopped`, { method: 'PATCH' });
        const arrStop = await response.json();

        console.log(arrStop);
    } catch (error) {
        console.error('Error stopping motor:', (error as Error).message);
    }
}

export async function apiDriveMotor(id: number) {
    try {
        const response: Response = await fetch(`${apiMotor}?id=${id}&status=drive`, { method: 'PATCH' });

        if (response.status !== 200) {
            return { success: false };
        }

        const arrDrive = await response.json();
        console.log(arrDrive);
        return arrDrive;
    } catch (error) {
        console.error('Error driving motor:', (error as Error).message);
        return { success: false };
    }
}
