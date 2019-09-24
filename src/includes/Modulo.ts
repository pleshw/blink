import {Game, GameStarter} from '@/includes/Game'
import "@/includes/utils/Random";

/**
 *  Um módulo é responsável por prover e categorizar atividades.
 *
 *  Sendo assim um módulo pode e geralmente deve apresentar atividades com diferentes categorias
 * porém essas tarefas devem se assemelhar em temática.
 */

class Modulo {
    _nome!: string;
    _descrição!: string;

    _atividades!: Set<Game>;

    _imagem!: File;

    constructor(nome: string, descrição: string, imagem: File, ...atividades: Game[]) {
        this._nome = nome;
        this._descrição = descrição;
        this._imagem = imagem;
        this._atividades = new Set<Game>([...atividades]);
    }

    public get nome(): string {
        return this._nome;
    }

    public get descrição(): string {
        return this._descrição;
    }

    public get imagem(): File {
        return this._imagem;
    }

    public get atividades(): Game[] {
        return Array.from(this._atividades);
    }


    get categorias(): string[] {
        let categorias = new Array<string>();
        this.atividades.forEach(atividade => {
            categorias.concat(atividade.tags);
        });

        return Array.from(new Set<string>(...categorias));
    }

    public vazio(): boolean {
        return this._atividades.size === 0;
    }

    public consumirAtividade(): Game | null {
        if (this.vazio())
            return null;

        let index: any = this.atividades.randomIndex();
        let result = this.atividades[index];

        this._atividades.delete(result);

        return result;
    }
}

export {Modulo};