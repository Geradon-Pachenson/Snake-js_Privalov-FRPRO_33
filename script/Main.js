import Area from "./Area.js";
import Snake from "./Snake.js";
import Score from "./Score.js";
import EatPoint from "./EatPoint.js";

class Main {
    constructor() {
        this.field = new Area();
        this.score = new Score(0);
        this.snake = new Snake();
        this.rabbit = new EatPoint();
    }


    draw() {
        //отрисовка всех частей игры
        this.field.draw();
        this.score.draw();
        this.snake.draw();
        setTimeout(() => {
            this.rabbit.draw();
        }, 1000);
        
    } 
    
}

const newMain = new Main();
newMain.draw();
newMain.snake.startMove();
export default Main;
