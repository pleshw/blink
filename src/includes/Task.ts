enum Categories {

}

abstract class Task {
    title!: string;
    description!: string;

    players!: number;

    category!: Array<string>;
    materials!: Array<string>;

    constructor(title: string, players: number, description?: string, ) {
        this.title = title;
        this.description = description || "";

        this.players = players || 1;
    }

    abstract init(): void;
}

abstract class TaskWithTime extends Task {
    time!: number;
    counter: number = -1;

    constructor(title: string, time: number, players?: number, description?: string, ) {
        super(title, players || 1, description);
        this.time = time;
    }

    init(): void {
        if (this.counter != -1) return;


        this.counter = this.time;

        let v = setInterval(() => {
            console.log(this.counter);
            if (this.counter <= 0) {

                clearInterval(v);
            }
            this.counter -= 1;
        }, 1000);
    }
}

export { Task, TaskWithTime };