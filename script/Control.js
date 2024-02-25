
export default class Control {
    constructor(direction) {
        this.direction = direction;
    }
    //Упраление змейкой. Прописываем нажаите кнопок стрелками и (W,D,S,A). Создаем условие невозможности менять движение сразу на противоположное 
    setControl() {
        document.addEventListener('keydown', (e) => {
        if ((e.code === 'KeyW' || e.code === 'ArrowUp') && this.direction !== 'down') {
            this.direction = 'up';
        } 
        if ((e.code === 'KeyD' || e.code === 'ArrowRight') && this.direction !== 'left') {
            this.direction = 'right';
        } 
        if ((e.code === 'KeyS' || e.code === 'ArrowDown') && this.direction !== 'up') {
            this.direction = 'down';
        } 
        if ((e.code === 'KeyA' || e.code === 'ArrowLeft') && this.direction !== 'right') {
            this.direction = 'left';
        }
    });
        console.log(this.direction);
    }
}