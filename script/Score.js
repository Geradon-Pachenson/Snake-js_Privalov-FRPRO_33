class Score {
    constructor(score) {
        //создаем начальное колличество очков
        this.score = score;
    }

    draw() {
        //отрисовка табло с очками
    }

    increase() {
        //изменение колличества очков и перерисовка на табло
        this.score += 10;
        this.draw();
    }
}

export default Score;