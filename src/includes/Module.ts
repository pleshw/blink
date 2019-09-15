import { Task, TaskWithTime } from '@/includes/Task'

class Module {
    name!: string;
    taskList!: Set<Task>;

    constructor(name: string, ...tasks: Task[]) {
        
    }
}

export { Module };