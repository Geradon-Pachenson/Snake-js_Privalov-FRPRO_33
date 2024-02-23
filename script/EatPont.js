import CoordRandom from "./CoordRandom.js";

class EatPoint {
    constructor() {
        //задаем параметры еды (цели) змейки
        this.CoordRandom = new CoordRandom();
        this.coordinates = this.CoordRandom.coordSnake ();
        this.rabbit = document.querySelector('[positionX = "' + this.coordinates[0] + '"][positionY = "' + this.coordinates[1] + '"]');
        // console.log(this.rabbit);

        //Устраняем ошибку совпадения координат тела змеи и кролика
        while (this.rabbit.classList.contains("snakeHead" || 'snakeBody')) {
            this.coordinates = this.CoordRandom.coordSnake ();
            this.rabbit = [document.querySelector('[positionX = "' + this.coordinates[0] + '"][positionY = "' + this.coordinates[1] + '"]')];
        }
        //Добавляем элементу класс rabbit 
        this.rabbit.classList.add('rabbit');
    }

    draw() {
        //отрисовка еды (цели) змейки
    }

    getPosition() {
        //получение координат новой позиции еды (цели) змейки на арене
    } 
}

export default EatPoint;