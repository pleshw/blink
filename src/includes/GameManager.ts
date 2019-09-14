import { Player } from '@/includes/Player'

class GameManager {
    players!: Map<number, Player>;

    /// Um modulo é um aglomerado de questões de várias categorias com um tema em comum
    modules: Array<Module> = new Array<Module>();

    /// Uma tarefa é algo a ser feito no jogo, e que possui
    /// informações sobre como essa tarefa deve ser feita
    tasks: Array<String> = new Array<Task>();

    materials: Array<String> = new Array<String>();

    rounds: Stack<Rounds> = new Stack<Rounds>();

    public addMaterial(material: Array<string>): void {
        this.materials = [...material];
    }

    public StartGame(): void {
        // prepara todas as tarefas dos módulos
        this.getTasksFromModules();
        // filtra tarefas com os materiais disponiveis
        this.prepareAvailableTasks();
        // divide as tarefas preparando as rodadas do jogo
        this.setupRounds();
    }

    public getRandomAvailableQuestion(): task;

}

export { GameManager };