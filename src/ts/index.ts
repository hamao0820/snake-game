import '../style.css';
import Game from './game';
import StartButton from './startButton';

class Main {
    constructor() {
        const game = new Game();
        game.init();

        StartButton.init(game);
    }
}

new Main();
