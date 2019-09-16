import { Player } from '@/includes/Player'
import { Task, TaskWithTime } from '@/includes/Task'
import { Module } from '@/includes/Module'
import { Stack } from '@/includes/Stack'

class GameManager {
    players!: Map<number, Player>;

    /// Um modulo é um aglomerado de questões de várias categorias com um tema em comum
    modules: Array<Module> = new Array<Module>();

    /// Uma tarefa é algo a ser feito no jogo, e que possui
    /// informações sobre como essa tarefa deve ser feita
    tasks: Array<Task> = new Array<Task>();

    // guarda as tarefas de cada rodada da partida
    rounds: Stack<Task> = new Stack<Task>();

    public StartGame(): void {
        // prepara todas as tarefas dos módulos
        // this.getTasksFromModules();
        // // filtra tarefas com os materiais disponiveis
        // this.prepareAvailableTasks();
        // // divide as tarefas preparando as rodadas do jogo
        // this.setupRounds();
    }


}

export { GameManager };