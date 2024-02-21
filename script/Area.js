class Area {
    constructor() {

    } 
    //отрисовка игрового поля
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
}

export default Area;