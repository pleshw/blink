/**
 * Uma atividade representa uma tarefa a ser feita com um tempo para sua conclusão
 *
 * O iniciador é a classe responsável por iniciar uma atividade.
 * Provendo funções para que a execução da tarefa seja iniciada, parada, pausada ou reiniciada
 */

import {Cronometro} from '@/includes/utils/Cronometro.js'

abstract class Atividade {
    private readonly _nome!: string;

    private readonly _titulo!: string;
    private readonly _subtitulo!: string;
    private readonly _descrição!: string;

    private _tempo!: number; // Em segundos.

    private readonly _categorias!: Set<string>;

    private readonly _numero_de_jogadores!: number;


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

    public get nome(): string {
        return this._nome;
    }

    public get titulo(): string {
        return this._titulo;
    }

    public get subtitulo(): string {
        return this._subtitulo;
    }

    public get descrição(): string {
        return this._descrição;
    }

    public get tempo(): number {
        return this._tempo;
    }

    public set tempo(t: number) {
        this._tempo = t;
    }

    public get categorias(): string[] {
        return Array.from(this._categorias)
    }

    public get numero_de_jogadores(): number {
        return this._numero_de_jogadores;
    }
}

class Iniciador extends Cronometro {
    nome_da_atividade!: string;

    constructor(atividade: Atividade) {
        super(atividade.tempo);
        this.nome_da_atividade = atividade.nome;
        this.tempo = atividade.tempo;
    }

    public iniciar() {
        super.iniciar();
        console.log(this.nome_da_atividade + ' foi iniciada.');
    }

    public reiniciar(): void {
        super.reiniciar();
        console.log(this.nome_da_atividade + ' foi reiniciada.');
    }

    public parar(): void {
        super.parar();
        console.log(this.nome_da_atividade + ' foi parada.');
    }

    public pausar(): void {
        super.pausar();
        console.log(this.nome_da_atividade + ' foi pausada.');
    }

    public get tempo_limite(): number {
        return this.tempo;
    }

    public get tempo_atual(): number {
        return this.contador;
    }
}

export {Atividade, Iniciador};