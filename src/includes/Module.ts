import {Task} from '@/includes/Task'
import "@/includes/utils/Random";

/**
 *  Um módulo é responsável por prover e categorizar tasks.
 *
 *  Sendo assim um módulo pode e geralmente deve apresentar tasks com diferentes tags
 * porém essas tarefas devem se assemelhar em temática.
 */

class Module {
    _name!: string;
    _description!: string;

    _tasks!: Set<Task>;

    _img!: File;

    constructor(nome: string, description: string, img: File, ...tasks: Task[]) {
        this._name = nome;
        this._description = description;
        this._img = img;
        this._tasks = new Set<Task>([...tasks]);
    }

    public get name(): string {
        return this._name;
    }

    public get description(): string {
        return this._description;
    }

    public get img(): File {
        return this._img;
    }

    public get tasks(): Task[] {
        return Array.from(this._tasks);
    }


    get tags(): string[] {
        let all_tags = new Array<string>();
        this.tasks.forEach(task => {
            all_tags.concat(task.tags);
        });

        return Array.from(new Set<string>(...all_tags));
    }

    public isEmpty(): boolean {
        return this._tasks.size === 0;
    }

    public popTask(t: Task): Task | boolean {
        if (this.isEmpty() || !this.contains(t)) return false;

        this._tasks.delete(t);
        return t;
    }

    public contains(t: Task): boolean {
        return this._tasks.has(t);
    }
}

export {Module};