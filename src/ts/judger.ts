import Snake from './snake';
import Stage from './stage';

class Judger {
    static checkCollision(snake: Snake) {
        return (
            snake.mx < Snake.halfWidth ||
            snake.mx >= Stage.Size - Snake.halfWidth ||
            snake.my < Snake.halfWidth ||
            snake.my >= Stage.Size - Snake.halfWidth
        );
    }
}

export default Judger;
