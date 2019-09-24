import {Atividade, Iniciador} from '@/includes/Atividade'
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

    _atividades!: Set<Atividade>;

    _imagem!: File;

    constructor(nome: string, descrição: string, imagem: File, ...atividades: Atividade[]) {
        this._nome = nome;
        this._descrição = descrição;
        this._imagem = imagem;
        this._atividades = new Set<Atividade>([...atividades]);
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

    public get atividades(): Atividade[] {
        return Array.from(this._atividades);
    }


    get categorias(): string[] {
        let categorias = new Array<string>();
        this.atividades.forEach(atividade => {
            categorias.concat(atividade.categorias);
        });

        return Array.from(new Set<string>(...categorias));
    }

    public vazio(): boolean {
        return this._atividades.size === 0;
    }

    public consumirAtividade(): Atividade | null {
        if (this.vazio())
            return null;

        let index: any = this.atividades.randomIndex();
        let result = this.atividades[index];

        this._atividades.delete(result);

        return result;
    }
}

export {Modulo};