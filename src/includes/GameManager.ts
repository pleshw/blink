//// FILTRAR TAREFAS QUE EXIGEM MAIS JOGADORES


import { Player } from '@/includes/Jogador'
import { Task, TaskWithTime } from '@/includes/Atividade'
import { Module } from '@/includes/Modulo'
import { Stack } from '@/includes/Stack'

function getRandomKey(collection: Map<any, any> | Set<any>) {
    let keys = Array.from(collection.keys());
    return keys[Math.floor(Math.random() * keys.length)];
}

class GameManager {
    players!: Map<number, Player>;


    modules: Set<Module> = new Set<Module>();


    tasks: Array<Task> = new Array<Task>();


    rounds: Stack<Task> = new Stack<Task>();

    getEnoughPlayers(n: number): Player[] {
        let arr: Player[] = [...this.players.values()];

        let result: Player[] = new Array<Player>();
        for (let i = 0; i < n; i++) {
            let id = Math.floor(Math.random() * arr.length);
            result.push(arr[id]);
            arr.splice(id, 1);
        }

        return result;
    }

    getRandomModule(): Module {
        let arr: Array<Module> = [...this.modules];

        if (arr.length <= 0) {
            return new Module("Fim de Jogo", "Bem esse é o fim. Até mais ver ;B", require('@/assets/modulo-not-ready.png'));
        }

        let result: Module = arr[Math.floor(Math.random() * arr.length)];
        if (result.isEmpty) {
            this.modules.delete(result);
            return this.getRandomModule();
        }

        return result;
    }


}

export { GameManager };