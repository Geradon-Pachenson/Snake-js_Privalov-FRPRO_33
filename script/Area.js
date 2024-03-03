class Area {
    constructor(cells) {
        this.cells = cells;
    }

    draw() { 
        this.body = document.querySelector(".body");
        this.body.innerHTML += '<div class="area"></div>';
        this.area = document.querySelector(".area");
        //создаем  кнопки start и restart. Делаем restart невидимой.
        this.area = document.querySelector(".area");
        this.area.innerHTML = `<button type="button" class="btn__start">start</button>`;
        this.area.innerHTML += `<button type="button" class="btn__restart">restart</button>`;
        //отрисовка игрового поля
        for (let i = 1; i <= 100; i++) {
            this.area.innerHTML += '<div class="cell"></div>'
        }
    
        this.cells = document.querySelectorAll(".cell");
        let x = 1;
        let y = 10;
    
        for (let i = 0; i < this.cells.length; i++) {
            if(x > 10) {
                x = 1;
                y--;
            }
            this.cells[i].setAttribute('positionX', x);
            this.cells[i].setAttribute('positionY', y);
            x++;
        } 
    }
}

export default Area;