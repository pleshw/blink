
abstract class Task {
    title!: string;
    subtitle!: string;

    players!: number;

    description!: string;

    category!: Array<string>;
    materials!: Array<string>;

    constructor(title: string, description: string, players: number, subtitle?: string, ) {
        this.title = title;
        this.subtitle = subtitle || "";

        this.players = players || 1;

        this.description = description;
    }

    abstract init(): void;
}

abstract class TaskWithTime extends Task {
    time!: number;
    counter!: number;
    taskCicle!: number;

    constructor(title: string, description: string, time: number, players?: number, subtitle?: string, ) {
        super(title, description, players || 1, subtitle);
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