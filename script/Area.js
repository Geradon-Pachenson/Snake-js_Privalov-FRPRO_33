class Area {
    constructor() {
        this.body = document.querySelector(".body");
        this.body.innerHTML += '<div class="area"></div>';
        this.area = document.querySelector(".area");
        this.draw()
    }

    draw() { 
        //отрисовка игрового поля
        for (let i = 1; i <= 100; i++) {
            this.area.innerHTML += '<div class="cell"></div>'
        }
    
        this.cell = document.querySelectorAll(".cell");
        let x = 1;
        let y = 10;
    
        for (let i = 0; i < this.cell.length; i++) {
            if(x > 10) {
                x = 1;
                y--;
            }
            this.cell[i].setAttribute('positionX', x);
            this.cell[i].setAttribute('positionY', y);
            x++;
        } 
    }
}

export default Area;