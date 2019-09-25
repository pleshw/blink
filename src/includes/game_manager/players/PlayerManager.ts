/**
 * Um gerenciador de jogadores para o GameManager
 * Sua função é adicionar ou remover jogadores confirmados
 * Sua responsabilidade é:
 *  - Selecionar jogadores ativos que sejam suficiente para cumprir uma atividade
 */


import {Player} from "@/includes/Player";

class PlayerManager {
    private players!: Player;

    add(): void{}
    remove(): void{}

    getEnoughPlayers(): Player[] { return new Array<Player>(); }
}

export {PlayerManager}