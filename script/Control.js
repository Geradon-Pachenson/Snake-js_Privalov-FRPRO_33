
export default class Control {
    constructor(direction, steps) {
        this.direction = direction;
        this.steps = steps;
    }
    //Упраление змейкой. Прописываем нажаите кнопок стрелками и (W,D,S,A). Создаем условие невозможности менять движение сразу на противоположное 
    setControl() {
        document.addEventListener('keydown', (e) => {
            //Устраняем баг с "разворотом змеи при быстром нажатии клавиш. После каждого нажатия клавишы переменная steps принимает false,
            //после сделанного хода true - и опять можно нажимать клавишу.
            if (this.steps === true) {
                if ((e.code === 'KeyW' || e.code === 'ArrowUp') && this.direction !== 'down') {
                    this.direction = 'up';
                    this.steps = false;
                } 
                if ((e.code === 'KeyD' || e.code === 'ArrowRight') && this.direction !== 'left') {
                    this.direction = 'right';
                    this.steps = false;
                } 
                if ((e.code === 'KeyS' || e.code === 'ArrowDown') && this.direction !== 'up') {
                    this.direction = 'down';
                    this.steps = false;
                } 
                if ((e.code === 'KeyA' || e.code === 'ArrowLeft') && this.direction !== 'right') {
                    this.direction = 'left';
                    this.steps = false;
                }
            }
        });
    }
}