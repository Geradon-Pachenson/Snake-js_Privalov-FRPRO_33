import CoordRandom from "./CoordRandom.js";

class EatPoint extends CoordRandom {
    constructor(rabbit) {
        super();
        this.rabbit = rabbit;
    }

    draw() {
        //отрисовка еды (цели) змейки
        //Устраняем ошибку совпадения координат тела змеи и кролика
        do {
            this.coordinates = this.coordSnake();
            this.rabbit = document.querySelector('[positionX = "' + this.coordinates[0] + '"][positionY = "' + this.coordinates[1] + '"]');
        } while (this.rabbit.classList.contains('snakeBody') || this.rabbit.classList.contains('snakeHead'));
        
        this.rabbit.classList.add('rabbit');
    }
    
}

export default EatPoint;