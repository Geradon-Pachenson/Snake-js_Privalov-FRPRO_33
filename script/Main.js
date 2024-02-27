import Area from "./Area.js";
import Snake from "./Snake.js";
import Score from "./Score.js";
import EatPoint from "./EatPoint.js";

class Main {
    constructor() {
        this.field = new Area();
        this.snake = new Snake();
        this.rabbit = new EatPoint();
        this.score = new Score(0);
    }


    draw() {
        //отрисовка всех частей игры
        this.field.draw();
        this.snake.draw();
        this.rabbit.draw();
        
    } 
    
    start() {
        //обновление данных при изменении
        //запускаем фун-ию движения змеи с интервалом 0.5 сек
        setInterval(() => {
            this.snake.moveSnake();
        }, 500);
    }
}

const newMain = new Main();
newMain.draw();
newMain.start();

export default Main;
