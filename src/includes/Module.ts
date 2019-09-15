import { Task, TaskWithTime } from '@/includes/Task'

class Module {
    name!: string;
    taskList!: Set<Task>;

    constructor(name: string, ...tasks: Task[]) {
        this.name = name;
        this.taskList = new Set<Task>([...tasks]);
    }
}

export { Module };