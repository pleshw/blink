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

    private question!: Question | null;

    constructor(q?: Question) {
        this.question = q || null;
    }

    public setQuestion(): void {
    }

    public  getQuestion(): Question | null{
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
        return new Round();
    }

    next(): void {
    }

    prev(): void {
    }

    goTo(): void {
    }

    getQuestion(): Question | null {
        return this.router[this.now].getQuestion();
    }
}

export {RoundManager}