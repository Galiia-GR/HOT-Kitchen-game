export function randomColor() {
    const arrColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '';
    for (let i = 1; i < 7; i + 1) {
        const randomNum = Math.floor(Math.random() * arrColors.length);
        color += arrColors[randomNum];
    }
    return `#${color}`;
}
