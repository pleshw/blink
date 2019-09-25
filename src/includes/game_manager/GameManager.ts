//// FILTRAR TAREFAS QUE EXIGEM MAIS JOGADORES


import {Player} from '@/includes/Player'
import {Game} from '@/includes/Game'
import {Module} from '@/includes/Module'
import "@/includes/utils/Random";
import {Stack} from '@/includes/utils/Stack'
import {PlayerManager} from "@/includes/game_manager/players/PlayerManager";
import {ModuleManager} from "@/includes/game_manager/modules/ModuleManager";
import {RoundManager} from "@/includes/game_manager/rounds/RoundManager";

class GameManager {
    private playerManager = new PlayerManager();
    private roundManager = new RoundManager();
    private moduleManager = new ModuleManager();

    private _players: Array<Player> = new Array<Player>();

    private _modules: Set<Module> = new Set<Module>();

    private _rounds: Stack<Game> = new Stack<Game>();


    set players(value: Array<Player>) {
        this._players = value;
    }

    set modules(value: Set<Module> | Module[]) {
        if (Array.isArray(value))
            this._modules = new Set<Module>(value);
        else
            this._modules = value;
    }

    public selectPlayers(n: number): Player[] {
        let arr: Player[] = [...this._players.values()];

        let result: Player[] = new Array<Player>();
        for (let i = 0; i < n; i++) {
            if (!arr.length) break;
            result.push(arr.popRandom());
        }

        return result;
    }

    get moduloAleatorio(): Module | null {
        let arr: Module[] = [...this._modules];

        if (arr.length <= 0) {
            return null;
        }

        return arr.random();
    }


}

export {GameManager};