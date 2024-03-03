class Score {
    constructor(currentScore) {
        this._currentScore = currentScore;
    }

    //отрисовка зоны с табло подсчета очков и иконки сброса рекорда
    draw() {
        this.body = document.querySelector(".body");
        this.body.innerHTML = `<div class="head__container"></div>`;
        this.head__container = document.querySelector('.head__container');
        this.head__container.innerHTML = `<p>рекорд:</p>` + `<span class="record"></span>` + `<div class="btn__clear"></div>` + `<p>очки:</p>` + `<span class="current"></span>`;
    }
    //Увеличение колличества текущих очков на 10
    addScore() {
        this._currentScore += 10;
        this.updateRecord();
        this.getScores ();
    }
    //Запись рекорда при условии "побитии" старого рекорда  
    updateRecord() {
        if ((this._recValue < this._currentScore)) {
            localStorage.setItem("best", this._currentScore);
        }
    }
    //Получаем значение из localStorage
    //Прописываем значение текущих очков
    getScores() {
        this.current = document.querySelector(".current");
        this._recValue = localStorage.getItem("best");
        console.log(this._recValue);
        if (this._recValue === null) {
            this._recValue = 0;
        } 
        this.current.innerHTML = this._currentScore;
    }
    //Записываем очки в окошко рекордов
    writeRecord() {
        this.record = document.querySelector(".record");
        this.record.innerHTML = this._recValue;
    }
    //Сброс подсчета очков при проигрыше
    resetScore() {
        this._currentScore = 0;
        this.getScores ();
    }
    //Обнуление рекорда
    resetRecord() {
        localStorage.removeItem('best');
    }

    get currentScore() {
        return this._currentScore;
    }
    get recValue() {
        return this._recValue;
    }
}

export default Score;