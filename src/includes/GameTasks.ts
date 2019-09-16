import { Task, TaskWithTime } from '@/includes/Task'



let felinos: string[] = ["um gato", "um leão", "um tigre", "uma onça"];
let roedores: string[] = ["um coelho", "um rato", "uma capivara", "um rato", "um timbu"];
let aves: string[] = ["um pardal", "uma galinha", "um periquito", "uma arara"];
let caninos: string[] = ["um lobo", "um cachorro", "uma hiena", "uma raposa"];

let mimicas: Array<string[]> = [felinos, roedores, aves, caninos];
class Mimica extends TaskWithTime {
    canBe!: string[];
    reallyIs!: string;

    constructor() {
        super("Você imita os outros acertam!!!", 60, 1);

        this.canBe = mimicas[Math.floor(Math.random() * mimicas.length)];
        this.reallyIs = this.canBe[Math.floor(Math.random() * this.canBe.length)];
    }
}

let coreografiaSimples: File[] =
    [
        require('@/assets/user-circle.png'),
        require('@/assets/user-triangle.png'),
        require('@/assets/user-circle.png'),
        require('@/assets/user-triangle.png')];

let coreografiaMedia: File[] =
    [
        require('@/assets/user-circle.png'),
        require('@/assets/user-triangle.png'),
        require('@/assets/user-circle.png'),
        require('@/assets/user-triangle.png')];

let coreografiaAvançada: File[] =
    [
        require('@/assets/user-circle.png'),
        require('@/assets/user-triangle.png'),
        require('@/assets/user-circle.png'),
        require('@/assets/user-triangle.png')];

let coreografias: Array<File[]> = [coreografiaSimples];
class Dance extends TaskWithTime {
    canBe!: File[];
    reallyIs!: File;

    constructor() {
        super("Só dance...", 60, 1, "Você dança, os outros acertam sua coreografia.");

        this.canBe = coreografias[Math.floor(Math.random() * coreografias.length)];
        this.reallyIs = this.canBe[Math.floor(Math.random() * this.canBe.length)];
    }
}

export { Mimica, Dance };