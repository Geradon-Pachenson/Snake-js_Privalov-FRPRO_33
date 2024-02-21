import Area from "./Area.js";
import EatPont from "./EatPont.js";
import Score from "./Score.js";
import Snake from "./Snake.js";

class Main {
    constructor() {
        this.Area = new Area();
        this.EatPont = new EatPont();
        this.Snake = new Snake();
        this.Score = new Score(0);
    }

    update() {
        //обновление данных при изменении
    }

    draw() {
        //отрисовка всех частей игры
    }
}

export default Main;
