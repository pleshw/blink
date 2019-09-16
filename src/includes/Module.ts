import { Task, TaskWithTime } from '@/includes/Task'

class Module {
    name!: string;
    taskList!: Set<Task>;
    description!: string;
    img!: File;

    constructor(name: string, description: string, img: File, ...tasks: Task[]) {
        this.name = name;
        this.description = description;
        this.img = img;
        this.taskList = new Set<Task>([...tasks]);
    }
}

export { Module };