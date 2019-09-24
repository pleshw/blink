import { Game, GameStarter } from '@/includes/Game'

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
class Dança extends Game {
    alternativas!: File[];
    idCorreta!: number;
    correta!: File;

    constructor(alternativas: Array<File[]>) {
        super(
            "dança",
            "Só dance...",
            "Qual a sequencia certa?",
            "Você dança, os outros acertam sua coreografia.",
            60,
            ["exercicio", "performance"],
            1
        );

        this.alternativas = alternativas[Math.floor(Math.random() * alternativas.length)];
        this.idCorreta = Math.floor(Math.random() * this.alternativas.length);
        this.correta = this.alternativas[this.idCorreta];
    }
}


class Artes extends Game {
    img!: File;
    constructor(contexto: string, imagem: File) {
        super(
            "ilha de papel",
            "Aqui você é um artista.",
            "Se expresse. Seja você. Esse módulo não é sobre vencer. Mas se puder nos surpreenda.",
            contexto,
            10000,
            ["artesanato", "recorte e cole", "origami"],
            1
        );
        this.img = imagem;
    }
}
let saiaDaIlha = new Artes("Você está no mundo de papel, em uma das suas muitas ilhas de papel e precisa sair dela. O que você tem em mãos? Apenas tesoura e cola.", require('@/assets/ilha-de-papel.png'))

let TodasAsArtes: Artes[] = [saiaDaIlha];

export { TodasAsMimicas, TodasAsGerais, TodasAsArtes };