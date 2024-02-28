import CoordRandom from "./CoordRandom.js";
import Control from "./Control.js"
import EatPoint from "./EatPoint.js";
import Score from "./Score.js";


class Snake extends Control {
    constructor(direction, steps) {
        super(direction, steps);
        this.CoordRandom = new CoordRandom();
        this.rabbit = new EatPoint();
        this.steps = false;
        this.score = new Score(0, 0);
        this.acceleration = 500;
    }

    draw() {
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

    //Перемещение змеи
    //Создаем функцию движения змеи
    moveSnake = () => {
        //Находим координаты головы змеи
        const headCoordinates = [this.snakeBody[0].getAttribute('positionX'), this.snakeBody[0].getAttribute('positionY')];
        //Удаляем класс snakeHead у головы
        this.snakeBody[0].classList.remove('snakeHead');
        //Удаляем класс snakeBody у последнего элемента змеи
        this.snakeBody[this.snakeBody.length - 1].classList.remove('snakeBody');
        //Временно удаляем последний элемент из массива со змеей
        this.snakeBody.pop();
        
        this.setControl();

        if (this.direction === 'right') {
             //Условие "отзеркаливания"
            if (headCoordinates[0] < 10) {
                //Добавляем на первое место массива ячейку с координатой x+1 относительно положения головы
                this.snakeBody.unshift(document.querySelector('[positionX = "' + (+ headCoordinates[0] + 1) + '"][positionY = "' + headCoordinates[1] + '"]'));
            } else {
                this.snakeBody.unshift(document.querySelector('[positionX = "1"][positionY = "' + headCoordinates[1] + '"]'));
            }
        } else if (this.direction === 'left') {
                //Условие "отзеркаливания" при движении влево
            if (headCoordinates[0] > 1) {
                //Добавляем на первое место массива ячейку с координатой x-1 относительно положения головы
                this.snakeBody.unshift(document.querySelector('[positionX = "' + (+ headCoordinates[0] - 1) + '"][positionY = "' + headCoordinates[1] + '"]'));
            } else {
                this.snakeBody.unshift(document.querySelector('[positionX = "10"][positionY = "' + headCoordinates[1] + '"]'));
            }
        } else if (this.direction ==='up') {
            //Условие "отзеркаливания" при движении вверх
            if (headCoordinates[1] < 10) {
                //Добавляем на первое место массива ячейку с координатой x+1 относительно положения головы
                this.snakeBody.unshift(document.querySelector('[positionX = "' + headCoordinates[0] + '"][positionY = "' + (+ headCoordinates[1] + 1) + '"]'));
            } else {
                this.snakeBody.unshift(document.querySelector('[positionX = "' + headCoordinates[0] + '"][positionY = "1"]'));
            }
        } else if (this.direction === 'down') {
                //Условие "отзеркаливания"
            if (headCoordinates[1] > 1) {
                //Добавляем на первое место массива ячейку с координатой x+1 относительно положения головы
                this.snakeBody.unshift(document.querySelector('[positionX = "' + headCoordinates[0] + '"][positionY = "' + (+ headCoordinates[1] - 1) + '"]'));
            } else {
                this.snakeBody.unshift(document.querySelector('[positionX = "' + headCoordinates[0] + '"][positionY = "10"]'));
            }
        }
        //Процесс поедания. Если голова змеи содержит класс 'rabbit', 'rabbit' исчезает а к телу змеи прибавляем 1 элемент.
        if (this.snakeBody[0].classList.contains('rabbit')) {
            this.snakeBody[0].classList.remove('rabbit');
            //Находим координаты последнего элемента змеи
            let lastX = this.snakeBody[this.snakeBody.length - 1].getAttribute('positionX');
            let lastY = this.snakeBody[this.snakeBody.length - 1].getAttribute('positionY');
            //Дублируем последний элемент змеи
            this.snakeBody.push(document.querySelector('[positionX = "' + lastX + '"][positionY = "' + lastY + '"]'));
            //Увеличиваем ускорение
            this.acceleration += 50;
            //Увеличиваем колличество текущих очков на 10
            this.score.currentScore += 10;
            this.current = document.querySelector(".current");
            this.current.innerHTML = this.score.currentScore;
            //Отрисовываем новую мышь
            setTimeout(() => {
                this.rabbit.draw();
            }, 500);
        };

        //Добавляем новой голове змеи класс snakeHead 
        this.snakeBody[0].classList.add('snakeHead');
        //Добавляем телу змеи класс snakeBody 
        for (let i = 1; i < this.snakeBody.length; i++) {
            this.snakeBody[i].classList.add('snakeBody');
        }

        this.steps = true;
    }; 

    death() {
        //Логика смерти змейки
        //Если голова змеи содержит класс 'snakeBody'. Останавливаем сетинтервал и Записываем колличество очков в память 
        //(если игра запущена впервые), либо сравниваем с ранее записанным результатом и обновляем рекорд при необхоимости.
        if (this.snakeBody[0].classList.contains('snakeBody')) {
                clearInterval(this.setInterval);
                if (this.score.recordScore < this.score.currentScore) {
                    this.record = document.querySelector(".record");
                    this.record.innerHTML = this.score.currentScore;
                }
                //Делаем кнопку restart видимой
                this.btn = document.querySelector(".btn__restart");
                this.btn.style.display = "inline-flex";
                this.rab = document.querySelector(".rabbit");
                this.rab.style.backgroundImage = "url(../images/svg/rabbit_bunny_smile.svg)";

                //Добавляем телу змеи прозрачности
                for (let i = 1; i < this.snakeBody.length; i++) {
                    this.snakeBody[i].style.opacity = "40%";
                }
        };
    }

    startMove() {
        //обновление данных при изменении
        //запускаем фун-ию движения змеи с интервалом 0.5 сек
        this.setInterval = setInterval(() => {
            this.moveSnake();
            this.death();
        }, this.acceleration);
    }

}
export default Snake;