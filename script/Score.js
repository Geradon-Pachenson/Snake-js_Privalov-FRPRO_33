class Score {
    constructor(currentScore, recordScore) {
        this.currentScore = currentScore;
        this.recordScore = recordScore;
    }
    //отрисовка зоны с табло подсчета очков
    draw() { 
        this.body = document.querySelector(".body");
        this.body.innerHTML = `<div class="head__container"></div>`;
        this.head__container = document.querySelector('.head__container');
        this.head__container.innerHTML = `<p>лучший результат:</p>` + `<span class="record"></span>` + `<p>очки:</p>` + `<span class="current"></span>`;
        this.record = document.querySelector(".record");
        this.current = document.querySelector(".current");
        this.record = document.querySelector(".record");
        this.record.innerHTML = this.recordScore;
        this.current = document.querySelector(".current");
        this.current.innerHTML = this.currentScore;
        } 
    
    // fixScore() {
    //     this._currentScore += 1;
    //     this.setRecord();
    //     this.create();
    // }

    // increase() {
    //     //изменение колличества очков и перерисовка на табло
    //     this.scoreboard += 10;
    //     this.draw();
    // }
}

export default Score;