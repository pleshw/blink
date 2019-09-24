//// FILTRAR TAREFAS QUE EXIGEM MAIS JOGADORES


import {Jogador} from '@/includes/Jogador'
import {Atividade} from '@/includes/Atividade'
import {Modulo} from '@/includes/Modulo'
import "@/includes/utils/Random";
import {Stack} from '@/includes/utils/Stack'

class GerenciadorDeJogadores {}
class GerenciadorDeAtividades {}
class GerenciadorDeMódulos {}

class Gerenciador {
    private gerenciador_de_jogadores = new GerenciadorDeJogadores();
    private gerenciador_de_atividades = new GerenciadorDeAtividades();
    private gerenciador_de_módulos = new GerenciadorDeMódulos();

    private _jogadores: Array<Jogador> = new Array<Jogador>();

    private _modulos: Set<Modulo> = new Set<Modulo>();

    private rodadas: Stack<Atividade> = new Stack<Atividade>();


    set jogadores(value: Array<Jogador>) {
        this._jogadores = value;
    }

    set modulos(value: Set<Modulo> | Modulo[]) {
        if (Array.isArray(value))
            this._modulos = new Set<Modulo>(value);
        else
            this._modulos = value;
    }

    public selecionarJogadores(n: number): Jogador[] {
        let arr: Jogador[] = [...this._jogadores.values()];

        let result: Jogador[] = new Array<Jogador>();
        for (let i = 0; i < n; i++) {
            if (!arr.length) break;
            result.push(arr.popRandom());
        }

        return result;
    }

    get moduloAleatorio(): Modulo | null {
        let arr: Modulo[] = [...this._modulos];

        if (arr.length <= 0) {
            return null;
        }

        return arr.random();
    }


}

export {Gerenciador};