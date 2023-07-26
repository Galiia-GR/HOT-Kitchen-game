export function randomName() {
    const brandsCarArr: Array<string> = [
        'Audi',
        'Ford',
        'Ferrari',
        'Honda',
        'Hyundai',
        'Infiniti',
        'Jeep',
        'Kamaz',
        'Nissan',
        'Opel',
        'Škoda',
        'Suzuki',
        'Tesla',
        'Toyota',
        'Volvo',
    ];

    const modelsCarsArr: Array<string> = [
        'X5',
        'GT4',
        'Priora',
        '4x4',
        'Rio',
        'Focus',
        'Kalina',
        'Nexia',
        'Matiz',
        'Captiva',
        'A5',
        'TT',
        'Corolla',
        'Camry',
        'RAV4',
    ];

    const randomBrand = Math.floor(Math.random() * 15);
    const randomModel = Math.floor(Math.random() * 15);

    return `${brandsCarArr[randomBrand]} ${modelsCarsArr[randomModel]}`;
}

export function randomColor() {
    const arrColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '';
    for (let i = 1; i < 7; i++) {
        const randomNum = Math.floor(Math.random() * arrColors.length);
        color += arrColors[randomNum];
    }
    return `#${color}`;
}
