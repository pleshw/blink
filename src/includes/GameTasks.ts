import { Task, TaskWithTime } from '@/includes/Task'



let felinos: string[] = ["um gato", "um leão", "um tigre", "uma onça"];
let roedores: string[] = ["um coelho", "um rato", "uma capivara", "um rato", "um timbu"];

let mimicas: Array<string[]> = [felinos, roedores];
class Mimica extends TaskWithTime {
    canBe!: string[];
    reallyIs!: string;

    constructor() {
        super("Você imita os outros acertam!!!", 60, 1);

        this.canBe = mimicas[Math.floor(Math.random() * mimicas.length)];
        this.reallyIs = this.canBe[Math.floor(Math.random() * this.canBe.length)];
    }
}


export { Mimica };