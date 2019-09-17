import { Task, TaskWithTime } from '@/includes/Task'

class Module {
    name!: string;
    taskList!: Array<Task>;
    description!: string;
    img!: File;

    constructor(name: string, description: string, img: File, ...tasks: Task[]) {
        this.name = name;
        this.description = description;
        this.img = img;
        this.taskList = new Array<Task>(...tasks);
    }

    useRandomTask(): Task {
        let id = Math.floor(Math.random() * this.taskList.length);
        let tmp: Task = this.taskList[id];
        this.taskList.splice(id, 1);
        return tmp;
    }
}

export { Module };