//// FILTRAR TAREFAS QUE EXIGEM MAIS JOGADORES


import { Player } from '@/includes/Player'
import { Task, TaskWithTime } from '@/includes/Task'
import { Module } from '@/includes/Module'
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
        return arr[Math.floor(Math.random() * arr.length)];
    }


}

export { GameManager };