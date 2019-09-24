abstract class Timer {
    protected _time!: number;
    protected _counter!: number;
    protected _interval!: number;


    protected constructor(tempo: number) {
        this._time = tempo;
        this._counter = 0;

        this._interval = -1;
    }

    protected init(): void {
        this.restart();
        this._interval = setInterval(() => {
            if (this._counter <= 0) {
                this.stop();
                return;
            }
            this._counter -= 1;
        }, 1000);
    }

    protected stop(): void {
        this.pause();
        this._counter = 0;
    }

    protected pause(): void {
        if (this._interval != -1) {
            clearInterval(this._interval);
        }
    }

    protected restart(): void {
        this._counter = this._time;
        this.init();
    }
}

export {Timer}