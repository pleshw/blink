/**
 * Um gerenciador de rodadas para o GameManager
 * Sua função é guardar informações sobre as rodadas
 * Sua responsabilidade é:
 *  - Dar um sistema de roteamento para as rodadas
 */

// Congruencias lineares = arvore binária

import {Question} from "@/includes/Question";

class Round {
    protected index!: number;

    private question!: Question;

    constructor(q: Question) {
        this.question = q;
    }

    public setQuestion(q: Question): void {
        this.question = q;
    }

    public getQuestion(): Question {
        return this.question;
    }
}

class RoundManager {
    private now: number = 0;
    private router: Array<Round> = new Array<Round>();

    isLastRound(): boolean {
        return this.now === this.router.length - 1;
    }

    isFirstRound(): boolean {
        return this.now === 0;
    }

    push(q: Question): void {
        this.router.push(new Round(q));
    }

    pop(): Round {
        return <Round> this.router.pop();
    }

    next(): void {
        if (this.isLastRound())
            return;

        this.now += 1;
    }

    prev(): void {
        if (this.isFirstRound())
            return;

        this.now -= 1;
    }

    goTo(n: number): void {
        this.now = n;
    }

    getQuestion(): Question {
        return <Question>this.router[this.now].getQuestion();
    }
}

export {RoundManager}