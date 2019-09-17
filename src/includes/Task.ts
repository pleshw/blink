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
    counter!: number;
    taskCicle!: number;

    constructor(title: string, time: number, players?: number, description?: string, ) {
        super(title, players || 1, description);
        this.time = time;
        this.counter = this.time;
    }

    init(): void {
        this.taskCicle = setInterval(() => {
            if (this.counter <= 0) {
                this.stopTimer();
                return;
            }
            this.counter -= 1;
        }, 1000);
    }

    stopTimer(): void {
        clearInterval(this.taskCicle);
    }
}

export { Task, TaskWithTime };