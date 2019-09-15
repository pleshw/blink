enum Categories {

}

abstract class Task {
    title!: string;
    description!: string;
    category!: Array<string>;
    materials!: Array<string>;

    constructor(title: string, description: string) {
        this.title = title;
        this.description = description;
    }

    abstract init(): void;
}

class TaskWithTime extends Task {
    time!: number;
    counter: number = -1;

    constructor(title: string, description: string, time: number) {
        super(title, description);
        this.time = time;
    }

    init(): void {
        if (this.counter != -1) return;


        let counter = this.time;

        let v = setInterval(() => {
            if (counter <= 0) {
                clearInterval(v);
            }
            counter -= 1;
        }, 1000);
    }
}

export { Task, TaskWithTime };