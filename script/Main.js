import Area from "./Area.js";
import Snake from "./Snake.js";
import Score from "./Score.js";
import EatPoint from "./EatPoint.js";

class Main {
    constructor() {
        this.area = new Area();
        this.Snake = new Snake();
        this.rabbit = new EatPoint();
        this.Score = new Score(0);
    }

    update() {
        //обновление данных при изменении
    }

    draw() {
        //отрисовка всех частей игры
        //this.area.draw();
        this.rabbit.draw();
    }
}

const newMain = new Main();
newMain.draw();

export default Main;
