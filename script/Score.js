class Score {
    constructor(currentScore, recordScore, recValue) {
        this.currentScore = currentScore;
        this.recordScore = recordScore;
        this.recValue = recValue;
        //отрисовка зоны с табло подсчета очков
        this.body = document.querySelector(".body");
        this.body.innerHTML = `<div class="head__container"></div>`;
        this.head__container = document.querySelector('.head__container');
        this.head__container.innerHTML = `<p>лучший результат:</p>` + `<span class="record"></span>` + `<p>очки:</p>` + `<span class="current"></span>`;
    }
    //Увеличение колличества текущих очков на 10
    addScore() {
        this.current = document.querySelector(".current");
        console.log(`addScore - ${this.currentScore}`);
        this.currentScore += 10;
        this.current.innerHTML = this.currentScore;
    }
    //Запись рекорда при условии начала игры или "побитии" старого рекорда  
    updateRecord() {
        this.record = document.querySelector(".record");
        if ((this.recordScore < this.currentScore)) {
            localStorage.setItem("record", this.currentScore);
            this.record.innerHTML = this.currentScore;;
        }
    }
     //Получаем значение из localStorage, если оно есть
    getRecord () {
        this.record = document.querySelector(".record");
        this.recValue = localStorage.getItem("record");
        if (this.recValue) {
            this.recordScore = this.recValue;
        } else {
            this.recordScore = 0;
        }
        this.record.innerHTML = this.recordScore;
    }
    //Сброс подсчета очков при проигрыше
    resetScore () {
        this.current = document.querySelector(".current");
        this.currentScore = 0;
        this.current.innerHTML = this.currentScore;
    }
}

export default Score;