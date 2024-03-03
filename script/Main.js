import Area from "./Area.js";
import Snake from "./Snake.js";
import Score from "./Score.js";
import EatPoint from "./EatPoint.js";

class Main {
    constructor() {
        this.field = new Area();
        this.score = new Score(0);
        this.snake = new Snake('right', false, 500);
        this.rabbit = new EatPoint();
    }

    drawConst() {
        //отрисовка игрового поля
        this.score.draw();
        this.field.draw();
    }
    
    drawVar() {
        //отрисовка игровых элементов
        this.snake.draw();
        setTimeout(() => {
            this.rabbit.draw();
        }, 500);
    }
}

    const newMain = new Main();
    
    //Запускаем функцию отрисовки постоянных элементов
    newMain.drawConst();
    //Записываем очки в соответствующие окна
    newMain.score.getScores();
    newMain.score.updateRecord();
    newMain.score.writeRecord();
    //По клику на кнопку старт запускаем движение
    const startBtn = document.querySelector(".btn__start");
    startBtn.addEventListener('click', () => {
        newMain.drawVar();
        newMain.snake.startMove();
        startBtn.style.display = "none";
    });
    //при нажатии на кнопку рестарт переотрисовываем игровые элементы
    const restartBtn = document.querySelector(".btn__restart");
    restartBtn.addEventListener('click', () => {
        //Удаляем через перебор, отрисованных змею и кролика и их "dead" стили 
        newMain.field.cells.forEach((cell) => {
            cell.classList.remove("snakeBody");
            cell.classList.remove("snakeHead");
            cell.classList.remove("rabbit");
            cell.classList.remove("smile_rabbit");
            cell.classList.remove("dead_snake");
        });
        newMain.score.getScores();
        newMain.drawVar();
        newMain.snake.startMove();
        restartBtn.style.display = "none"
    });

    //при нажатии на иконку змеи обнуляем рекорд
    const clearRecord = document.querySelector(".btn__clear");
    clearRecord.addEventListener('click', () => {
        newMain.score.resetRecord();
        });

export default Main;