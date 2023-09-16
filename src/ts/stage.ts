class Stage {
    static readonly Size = 300;
    readonly #ctx: CanvasRenderingContext2D;
    constructor() {
        const canvas = document.getElementById('canvas') as HTMLCanvasElement;
        this.#ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    }

    get ctx() {
        return this.#ctx;
    }
}

export default Stage;
