class Area {
    constructor() {
        this.body = document.querySelector(".body");
        this.body.innerHTML += '<div class="area"></div>';
        this.area = document.querySelector(".area");
        //отрисовка игрового поля
        for (let i = 1; i <= 100; i++) {
            this.area.innerHTML += '<div class="cell"></div>'
        }
    
        this.cell = document.querySelectorAll(".cell");
        this.x = 1;
        this.y = 10;
    
        for (let i = 0; i < this.cell.length; i++) {
            if(this.x > 10) {
                this.x = 1;
                this.y--;
            }
            this.cell[i].setAttribute('position-X', this.x);
            this.cell[i].setAttribute('position-Y', this.y);
            this.x++;
        } 
    };
}

export default Area;