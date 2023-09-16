import Stage from './stage';

class Snake {
    static readonly initialLength = 150;
    static readonly halfWidth = 8;
    readonly #positionList: [number, number][] = [];
    #mx = Stage.Size / 2;
    #my = Stage.Size / 2;
    constructor() {
        for (let i = 0; i < Snake.initialLength; i++) {
            this.#positionList.push([this.#mx, this.#my]);
        }
    }

    get positionList() {
        return this.#positionList;
    }
}

export default Snake;
