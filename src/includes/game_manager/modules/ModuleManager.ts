import {Module} from "@/includes/Module";
import {Task} from "@/includes/Task";

class ModuleManager {
    _modules!: Set<Module>;

    constructor(...modules: Module[]){
        this._modules = new Set<Module>(modules);

        this.removeEmptyModules();
    }

    public removeModule(m: Module): void {
        this._modules.delete(m);
    }

    public addModule(m: Module): void {
        this._modules.add(m);
    }

    get hasModules(): boolean{
        return this._modules.size > 0;
    }

    public getRandomModule(): Module  {
        let rand_module =  this._modules.random();

        if (rand_module.isEmpty()) return this.getRandomModule();

        return  rand_module;
    }

    private removeEmptyModules(): void {
        let m: Module[] = Array.from(this._modules)
            .filter(m => {
                return m.isEmpty()
            })
            .slice(0, 1);

        this._modules = new Set<Module>(m);
    }

    popRandomTask(): Task | boolean {
        let tmp_module: Module = this.getRandomModule();

        if (tmp_module.isEmpty()) {this.removeModule(tmp_module); return false;};

        let rand_task: Task = ModuleManager.getRandomTask(tmp_module);
        return tmp_module.popTask(rand_task);
    }

    public static getRandomTask(m: Module): Task {
        return m.tasks.random();
    }
}

export {ModuleManager}