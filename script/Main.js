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














document.addEventListener('DOMContentLoaded', function () {
    const parent = document.querySelector(".body");
    parent.innerHTML += '<div class="area"></div>';
    const area = document.querySelector(".area");
    
    for (let i = 1; i <= 100; i++) {
        area.innerHTML += '<div class="cell"></div>'
    }

    const cell = document.querySelectorAll(".cell");
    let x = 1;
    let y = 10;

    for (let i = 0; i < cell.length; i++) {
        if(x > 10) {
            x = 1;
            y--;
        }
        cell[i].setAttribute('position-X', x);
        cell[i].setAttribute('position-Y', y);
        x++;
    }
});