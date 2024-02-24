import Area from "./Area.js";
import Snake from "./Snake.js";
import Score from "./Score.js";
import EatPont from "./EatPont.js";

class Main {
    constructor() {
        this.Area = new Area();
        this.Snake = new Snake();
        this.EatPont = new EatPont();
        this.Score = new Score(0);
    }

    update() {
        //обновление данных при изменении
    }

    draw() {
        //отрисовка всех частей игры
    }
}

const newMain = new Main();

export default Main;
