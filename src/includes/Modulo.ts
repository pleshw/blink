import { Atividade, Iniciador } from '@/includes/Atividade'

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

    get nome(): string { return this._nome; }

    get descrição(): string { return this._descrição; }

    get imagem(): File { return this._imagem; }

    get atividades(): Atividade[] { return Array.from(this._atividades); }


    get categorias(): string[] {
        let categorias = new Array<string>();
        this.atividades.forEach(atividade => {
            categorias.concat(atividade.categorias);
        });

        return Array.from(new Set<string>(...categorias));
    }
}

export { Modulo };