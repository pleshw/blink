/**
 * Um Task representa uma tarefa a ser feita com um _time para sua conclusão
 *
 * O iniciador é a classe responsável por init um Task.
 * Provendo funções para que a execução da tarefa seja iniciada, parada, pausada ou reiniciada
 */

import {Timer} from '@/includes/utils/Timer.js'

abstract class Task {
    private readonly _name!: string;

    private readonly _title!: string;
    private readonly _subtitle!: string;
    private readonly _desc!: string;

    private _time!: number; // Em segundos.

    private readonly _tags!: Set<string>; // tags

    private readonly _teamSize!: number;


    protected  constructor(
        nome: string,
        title: string, subtitle: string, desc: string,
        time: number,
        tags: string[],
        n_players: number
    ) {
        this._name = nome;
        this._title = title;
        this._subtitle = subtitle;
        this._desc = desc;

        this._time = time;
        this._tags = new Set<string>(tags);
        this._teamSize = n_players;
    }

    public get name(): string {
        return this._name;
    }

    public get title(): string {
        return this._title;
    }

    public get subtitle(): string {
        return this._subtitle;
    }

    public get desc(): string {
        return this._desc;
    }

    public get time(): number {
        return this._time;
    }

    public set time(t: number) {
        this._time = t;
    }

    public get tags(): string[] {
        return Array.from(this._tags)
    }

    public get teamSize(): number {
        return this._teamSize;
    }
}

class GameStarter extends Timer {
    gameName!: string;

    constructor(game: Task) {
        super(game.time);
        this.gameName = game.name;
        this._time = game.time;
    }

    public init() {
        super.init();
        console.log(this.gameName + ' foi iniciada.');
    }

    public restart(): void {
        super.restart();
        console.log(this.gameName + ' foi reiniciada.');
    }

    public stop(): void {
        super.stop();
        console.log(this.gameName + ' foi parada.');
    }

    public pause(): void {
        super.pause();
        console.log(this.gameName + ' foi pausada.');
    }

    public get time(): number {
        return this._time;
    }

    public get now(): number {
        return this._counter;
    }
}

export {Task, GameStarter};