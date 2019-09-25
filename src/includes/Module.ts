import {Game, GameStarter} from '@/includes/Game'
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

    _tasks!: Set<Game>;

    _img!: File;

    constructor(nome: string, description: string, img: File, ...tasks: Game[]) {
        this._name = nome;
        this._description = description;
        this._img = img;
        this._tasks = new Set<Game>([...tasks]);
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

    public get tasks(): Game[] {
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

    public consumirAtividade(): Game | null {
        if (this.isEmpty())
            return null;

        let index: any = this.tasks.randomIndex();
        let result = this.tasks[index];

        this._tasks.delete(result);

        return result;
    }
}

export {Module};