import CoordRandom from "./CoordRandom.js";

class EatPoint extends CoordRandom {
    constructor(rabbit) {
        super();
        this.rabbit = rabbit;
        
    }

    draw() {
        //отрисовка еды (цели) змейки
        this.coordinates = this.coordSnake();
        this.rabbit = document.querySelector('[positionX = "' + this.coordinates[0] + '"][positionY = "' + this.coordinates[1] + '"]');

        //Устраняем ошибку совпадения координат тела змеи и кролика
        while (this.rabbit.classList.contains("snakeHead" || 'snakeBody')) {
            this.coordinates = this.coordSnake();
            this.rabbit = [document.querySelector('[positionX = "' + this.coordinates[0] + '"][positionY = "' + this.coordinates[1] + '"]')];
        }
        //Добавляем элементу класс rabbit 
        this.rabbit.classList.add('rabbit');
    }
}

export default EatPoint;