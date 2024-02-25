import CoordRandom from "./CoordRandom.js";
import Control from "./Control.js"
class Snake extends Control {
    constructor(direction) {
        super(direction);
        this.CoordRandom = new CoordRandom();
        this.coordinates = this.CoordRandom.coordSnake ();
        this.direction = 'right';
                
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
    
    create() {

    }

    //Перемещение змеи
    //Создаем функцию с интервалом вызова 0.5 сек
    move = setInterval(() => {
        //Находим координаты головы змеи
        this.headCoordinates = [this.snakeBody[0].getAttribute('positionX'), this.snakeBody[0].getAttribute('positionY')];
        //Удаляем класс snakeHead у головы
        this.snakeBody[0].classList.remove('snakeHead');
        //Удаляем класс snakeBody у последнего элемента змеи
        this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
        //Временно удаляем последний элемент из массива со змеей
        this.snakeBody.pop();
        
        this.setControl();

        if (this.direction === 'right') {
             //Условие "отзеркаливания"
            if (this.headCoordinates[0] < 10) {
                //Добавляем на первое место массива ячейку с координатой x+1 относительно положения головы
                this.snakeBody.unshift(document.querySelector('[positionX = "' + (+this.headCoordinates[0] + 1) + '"][positionY = "' + this.headCoordinates[1] + '"]'));
            } else {
                this.snakeBody.unshift(document.querySelector('[positionX = "1"][positionY = "' + this.headCoordinates[1] + '"]'));
            }
        } else if (this.direction === 'left') {
                //Условие "отзеркаливания" при движении влево
            if (this.headCoordinates[0] > 1) {
                //Добавляем на первое место массива ячейку с координатой x-1 относительно положения головы
                this.snakeBody.unshift(document.querySelector('[positionX = "' + (+this.headCoordinates[0] - 1) + '"][positionY = "' + this.headCoordinates[1] + '"]'));
            } else {
                this.snakeBody.unshift(document.querySelector('[positionX = "10"][positionY = "' + this.headCoordinates[1] + '"]'));
            }
        } else if (this.direction ==='up') {
            //Условие "отзеркаливания" при движении вверх
            if (this.headCoordinates[1] < 10) {
                //Добавляем на первое место массива ячейку с координатой x+1 относительно положения головы
                this.snakeBody.unshift(document.querySelector('[positionX = "' + this.headCoordinates[0] + '"][positionY = "' + (+this.headCoordinates[1] + 1) + '"]'));
            } else {
                this.snakeBody.unshift(document.querySelector('[positionX = "' + this.headCoordinates[0] + '"][positionY = "1"]'));
            }
        } else if (this.direction === 'down') {
                //Условие "отзеркаливания"
            if (this.headCoordinates[1] > 1) {
                //Добавляем на первое место массива ячейку с координатой x+1 относительно положения головы
                this.snakeBody.unshift(document.querySelector('[positionX = "' + this.headCoordinates[0] + '"][positionY = "' + (+this.headCoordinates[1] - 1) + '"]'));
            } else {
                this.snakeBody.unshift(document.querySelector('[positionX = "' + this.headCoordinates[0] + '"][positionY = "10"]'));
            }
        }
        
        //Добавляем новой голове змеи класс snakeHead 
        this.snakeBody[0].classList.add('snakeHead');
        //Добавляем телу змеи класс snakeBody 
        for (let i = 1; i < this.snakeBody.length; i++) {
            this.snakeBody[i].classList.add('snakeBody');
        }
    }, 500);

    death() {
        //логика смерти змейки
    }

    update() {
        //логика изменения змейки при определнных параметрах
    }

}
export default Snake;