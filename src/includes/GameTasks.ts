import { Task, TaskWithTime } from '@/includes/Task'



let felinos: string[] = ["um gato", "um leão", "um tigre", "uma onça"];
let roedores: string[] = ["um coelho", "um rato", "uma capivara", "um esquilo"];
let aves: string[] = ["um pardal", "uma calopsita", "um periquito", "uma arara"];
let caninos: string[] = ["um lobo", "um cachorro", "uma hiena", "uma raposa"];

let profissoes: string[] = ["um encanador", "um ferreiro", "um professor", "um relojoeiro"];
let profissoes2: string[] = ["um cantor", "um locutor", "um apresentador", "um reporter"];

let objetos: string[] = ["uma cadeira", "uma mesa", "uma pia", "um sofá"]

class Mimica extends TaskWithTime {

    alternativas!: string[];
    idCorreta: number;
    correta!: string;

    constructor(alternativas: Array<string>) {
        super("Você imita os outros acertam!!!", 5, 1, "Cuidado pra não fazer muito barulho.");

        this.alternativas = alternativas;
        this.idCorreta = Math.floor(Math.random() * this.alternativas.length);
        this.correta = this.alternativas[this.idCorreta];
    }

    verificarResposta(resposta: number): string {
        this.stopTimer();
        return (resposta == this.idCorreta) ? "correta" : "incorreta";
    }
}
let MimicaRoedores: Mimica = new Mimica(roedores);
let MimicaFelinos: Mimica = new Mimica(felinos);
let MimicaAves: Mimica = new Mimica(aves);
let MimicaCaninos: Mimica = new Mimica(caninos);

let MimicaProfissoes: Mimica = new Mimica(profissoes);
let MimicaProfissoes2: Mimica = new Mimica(profissoes2);
let MimicaObjetos: Mimica = new Mimica(objetos);


let TodasAsMimicas = [MimicaRoedores, MimicaFelinos, MimicaAves, MimicaCaninos, MimicaProfissoes, MimicaProfissoes2, MimicaObjetos];
// let coreografiaSimples: File[] =
//     [
//         require('@/assets/user-circle.png'),
//         require('@/assets/user-triangle.png'),
//         require('@/assets/user-circle.png'),
//         require('@/assets/user-triangle.png')];

// let coreografiaMedia: File[] =
//     [
//         require('@/assets/user-circle.png'),
//         require('@/assets/user-triangle.png'),
//         require('@/assets/user-circle.png'),
//         require('@/assets/user-triangle.png')];

// let coreografiaAvançada: File[] =
//     [
//         require('@/assets/user-circle.png'),
//         require('@/assets/user-triangle.png'),
//         require('@/assets/user-circle.png'),
//         require('@/assets/user-triangle.png')];

// let coreografias: Array<File[]> = [coreografiaSimples];
class Dance extends TaskWithTime {
    alternativas!: File[];
    idCorreta!: number;
    correta!: File;

    constructor(alternativas: Array<File[]>) {
        super("Só dance...", 60, 1, "Você dança, os outros acertam sua coreografia.");

        this.alternativas = alternativas[Math.floor(Math.random() * alternativas.length)];
        this.idCorreta = Math.floor(Math.random() * this.alternativas.length);
        this.correta = this.alternativas[this.idCorreta];
    }


    verificarResposta(resposta: number) {
        return (resposta == this.idCorreta);
    }
}


class Question extends TaskWithTime {
    alternativas!: string[];
    correta!: string;

    constructor(alternativas: Array<string>, correta: string) {
        super("Responda essa pergunta", 60, 1, "Pode não ser tão fácil quanto parece...");

        this.alternativas = alternativas;
        this.correta = correta;
    }
}


export { TodasAsMimicas, Dance };