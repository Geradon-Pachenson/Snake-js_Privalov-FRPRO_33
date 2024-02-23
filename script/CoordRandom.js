class CoordRandom {
    constructor() {
        //получаем случайные координаты x  и y для дальнейшего использования
        this.positionX = Math.round(Math.random() * (10-1) + 1);
        this.positionY = Math.round(Math.random() * (10-1) + 1);
    }
    coordSnake = () => {
        return [this.positionX, this.positionY];
    }
}

export default CoordRandom;