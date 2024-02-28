class Score {
    constructor() {
    }

    draw() { 
        this.body = document.querySelector(".body");
        this.body.innerHTML += '<div class="scoreboard"></div>';
        this.scoreboard = document.querySelector(".scoreboard");
        //отрисовка табло подсчета очков
        } 
    

    // increase() {
    //     //изменение колличества очков и перерисовка на табло
    //     this.scoreboard += 10;
    //     this.draw();
    // }
}

export default Score;