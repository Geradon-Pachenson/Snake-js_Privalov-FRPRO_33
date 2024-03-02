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

document.addEventListener("DOMContentLoaded", () => {
    const newMain = new Main();
    newMain.score.getRecord();
    newMain.score.resetScore();
    console.log(`1 - ${newMain.score.currentScore}`);
    //Запускаем функцию отрисовки постоянных элементов
    newMain.drawConst();
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
        console.log('777');
        newMain.score.updateRecord();
        newMain.score.resetScore ();
        console.log(`restartBtn - ${newMain.score.currentScore}`);
        newMain.drawVar();
        newMain.snake.startMove();
        restartBtn.style.display = "none"
    });
})

export default Main;