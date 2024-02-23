import CoordRandom from "./CoordRandom.js";

class Snake {
    constructor() {
        this.CoordRandom = new CoordRandom();
        this.coordinates = this.CoordRandom.coordSnake ();
        
        //исправляем ошибку если приходит x координата = 1(вторая клетка тела не может иметь координату x = 0)
        if(this.coordinates[0] === 1) {
            this.coordinates[0] += 1;
        }
        //создание змейки (две клетки - случайное положение)
        this.snakeBody = [document.querySelector('[positionX = "' + this.coordinates[0] + '"][positionY = "' + this.coordinates[1] + '"]'), 
        document.querySelector('[positionX = "' + (this.coordinates[0]-1) + '"][positionY = "' + this.coordinates[1] + '"]')];
        
        //Добавляем телу змеи класс snakeBody 
        for (let i = 1; i < this.snakeBody.length; i++) {
            this.snakeBody[i].classList.add('snakeBody');
        }
        //Добавляем голове змеи класс snakeHead 
        this.snakeBody[0].classList.add('snakeHead');
    }

    death() {
        //логика смерти змейки
    }

    update() {
        //логика изменения змейки при определнных параметрах
    }

    control() {
        //Упраление змейкой
    }
}

export default Snake;