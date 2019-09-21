/** 
 * Uma atividade representa uma tarefa a ser feita com um tempo para sua conclusão
 * 
 * O iniciador é a classe responsável por iniciar uma atividade.
 * Provendo funções para que a execução da tarefa seja iniciada, parada, pausada ou reiniciada
 */

abstract class Atividade {
    private _nome!: string;

    private _titulo!: string;
    private _subtitulo!: string;
    private _descrição!: string;

    private _tempo!: number; // Em segundos.

    private _categorias!: Set<string>;

    private _numero_de_jogadores!: number;


    constructor(
        nome: string,
        titulo: string, subtitulo: string, descrição: string,
        tempo: number,
        categorias: string[],
        numero_de_jogadores: number
    ) {
        this._nome = nome;
        this._titulo = titulo;
        this._subtitulo = subtitulo;
        this._descrição = descrição;

        this._tempo = tempo;
        this._categorias = new Set<string>(categorias);
        this._numero_de_jogadores = numero_de_jogadores;
    }

    get nome(): string { return this._nome; }
    get titulo(): string { return this._titulo; }
    get subtitulo(): string { return this._subtitulo; }
    get descrição(): string { return this._descrição; }

    get tempo(): number { return this._tempo; }
    set tempo(t: number) { this._tempo = t; }

    get categorias(): string[] { return Array.from(this._categorias) }
    get numero_de_jogadores(): number { return this._numero_de_jogadores; }
}

class Iniciador {
    private _tempo!: number;
    private _contador: number = 0;

    private _temporizador!: number;

    constructor(atividade: Atividade) {
        this._tempo = atividade.tempo;
    }

    public get contador(): number {
        return this._contador;
    }

    public iniciar(): void {
        if (this._contador == 0) this._contador = this._tempo;
        this._temporizador = setInterval(() => {
            if (this._contador <= 0) {
                this.parar();
                return;
            }
            this._contador -= 1;
        }, 1000);
    }

    public parar(): void {
        this.pausar();
        this._contador = 0;
    }

    public pausar(): void {
        clearInterval(this._temporizador);
    }

    public reiniciar(): void {
        this._contador = this._tempo;
        this.iniciar();
    }
}

export { Atividade, Iniciador };