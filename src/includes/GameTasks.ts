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
        super("Você imita os outros acertam!!!", "O que ele estava imitando?", 5, 1, "Cuidado pra não fazer muito barulho.");

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
class Dança extends TaskWithTime {
    alternativas!: File[];
    idCorreta!: number;
    correta!: File;

    constructor(alternativas: Array<File[]>) {
        super("Só dance...", "Qual a sequencia certa?", 60, 1, "Você dança, os outros acertam sua coreografia.");

        this.alternativas = alternativas[Math.floor(Math.random() * alternativas.length)];
        this.idCorreta = Math.floor(Math.random() * this.alternativas.length);
        this.correta = this.alternativas[this.idCorreta];
    }


    verificarResposta(resposta: number) {
        this.stopTimer();
        return (resposta == this.idCorreta) ? "correta" : "incorreta";
    }
}

class Question extends TaskWithTime {
    alternativas!: string[];
    idCorreta!: number;
    correta!: string;

    constructor(title: string, alternativas: Array<string>, correta: number) {
        super("Responda essa pergunta", title, 60, 1, "Pode não ser tão fácil quanto parece...");

        this.alternativas = alternativas;

        this.idCorreta = correta - 1;
        this.correta = this.alternativas[correta - 1];
    }

    verificarResposta(resposta: number) {
        this.stopTimer();
        return (resposta == this.idCorreta) ? "correta" : "incorreta";
    }
}

let q1 = new Question("O que a palavra 'Blink' significa em português?",
    ["correr", "brinque", "piscar", "jogo"]
    , 3);

let q2 = new Question("Qual personagem folclórico costuma ser agradado pelos caçadores com a oferta de fumo?",
    ["Saci", "Curupira", "Iara", "Caipora"]
    , 4);

let q3 = new Question("Em qual local da Ásia o português é língua oficial?",
    ["India", "Macau", "congo", "chile"]
    , 2);

let q4 = new Question("Quem é o autor de 'O Príncipe'?",
    ["Saint-Exupéry", "george orwell", "H. P. Lovecraft", "Maquiavel"]
    , 4);

let q5 = new Question("Qual o sujeito na frase 'O gato comeu sua lingua'?",
    ["O gato", "Sua lingua", "Comeu"],
    1);

let q6 = new Question("Qual a religião monoteísta que conta com o maior número de adeptos no mundo?",
    ["Cristianismo", "Hinduísmo", "Islamismo", "budismo"]
    , 1);

let q7 = new Question("De onde é a invenção do chuveiro elétrico?",
    ["Brasil", "frança", "E.U.A", "Rússia"]
    , 1);

let q8 = new Question("Qual o número mínimo de jogadores numa partida de futebol?",
    ["11", "9", "5", "7"]
    , 4);

let q9 = new Question("Quanto tempo a luz do Sol demora para chegar à Terra?",
    ["24 horas", "8 minutos", "12horas", "1 segundo"]
    , 2);

let q10 = new Question("Qual país sul-americano é o maior produtor de vinho?",
    ["Brasil", "Chile", "Argentina", "peru"]
    , 3);


let q11 = new Question("Em que país fica a Torre Eiffel?",
    ["itália", "frança", "portugal", "brasil"]
    , 2);


let q12 = new Question("Quem foi Tarsila do Amaral?",
    ["apresentadora", "atriz", "dançarina", "pintora"]
    , 4);


let q13 = new Question("O que é Rupaul’s Drag Race?",
    ["um filme", "uma música", "um documentário", "um reality show"]
    , 4);


let q14 = new Question("Qual é o nome do principal vilão de Harry Potter?",
    ["draco malfoy", "basilisco", "voldermort", "hagrid"]
    , 3);

let q15 = new Question("Quantas temporadas tem a série da HBO 'Game of Thrones'?",
    ["8", "7", "4", "9"]
    , 1);

let q16 = new Question("Qual o felino mais rápido do mundo?",
    ["leão", "tigre", "onça", "guepardo"]
    , 4);

let q17 = new Question("Qual é a maior festa popular do Brasil, que mistura canto e dança do samba e desfiles de escolas de samba?",
    ["festa junina", "carnaval", "reveillon", "Boi Bumbá"]
    , 2);

let q18 = new Question("O frevo é uma dança típica de qual estado do Brasil?",
    ["Maranhão", "bahia", "pernambuco", "sergipe"]
    , 3);

let q19 = new Question("Qual animal é o símbolo da Austrália?",
    ["coala", "canguru", "beluga", "urso"]
    , 2);

let q20 = new Question("Quantos planetas Terra cabem dentro no Sol?",
    ["5 mil", "750mil", "1 milhão", "55mil"]
    , 3);

let q21 = new Question("Quantos olhos a maior parte das aranhas têm?",
    ["dois olhos", "4 olhos", "6 olhos", "oito olhos"]
    , 4);

let q22 = new Question("Quanto mede uma girafa?",
    ["entre 4,8 e 5,5m", "7 metros", "entre 5,5 e 7 m", "3 metros"]
    , 1);

let q23 = new Question("Nesses pares, ambos são mamíferos:",
    ["baleia e golfinho", "porco e tucano", "rato e sapo", "tatu e jabuti"]
    , 1);

let q24 = new Question("Como se chama o maior continente do mundo?",
    ["brasil", "ásia", "américa do sul", "oceania"]
    , 2);

let q25 = new Question("Onde o arroz teve origem?",
    ["áfrica", "honduras", "japão", "brasil"]
    , 3);


let q26 = new Question("Que cantora é considerada a Rainha do Pop?",
    ["elis regina", "lady gaga", "madonna", "grimes"]
    , 3);

let q27 = new Question("A casa das abelhas:",
    ["ninho", "favo", "toca", "colmeia"]
    , 4);

let q28 = new Question("A mãe da mãe da minha tia é minha?",
    ["prima", "bisavó", "avó", "mãe"]
    , 2);

let q29 = new Question("Qual é a capital da Suíça?",
    ["Berlim", "suécia", "londres", "zurique"]
    , 4);

let q30 = new Question("Que naipe do baralho é representado por um losango vermelho?",
    ["ouros", "espadas", "copas", "paus"]
    , 1);

let q31 = new Question("Onde a acupuntura teve origem?",
    ["no japão", "no brasil", "na china", "na coréia"]
    , 3);

let q32 = new Question("Que tipo de Pokémon é o Pikachu?",
    ["água", "fogo", "fantasma", "elétrico"]
    , 4);

let q33 = new Question("Recipiente utilizado para depositar votos digitais ou físicos durante a eleição?",
    ["urna", "estojo", "envelope", "bolsa"]
    , 1);

let q34 = new Question("Estágio de vida da borboleta que antecede o casulo?",
    ["borboleta", "ovo", "lagarta", "ninfa"]
    , 3);

let q35 = new Question("O maior edifício do mundo fica localizado em:",
    ["nova iorque", "dubai", "brasil", "paris"]
    , 2);

let q36 = new Question("Qual esporte é considerado o mais popular do mundo?",
    ["basquete", "vôlei", "futebol", "surfe"]
    , 3);

let q37 = new Question("Que substância química tem suas moléculas formadas por dois átomos de hidrogênio e um de oxigênio?",
    ["sal", "hélio", "ouro", "água"]
    , 4);

let q38 = new Question("Qual dos algarismos romanos representa o número 4?",
    ["IX", "IV", "XL", "V"]
    , 2);


let q39 = new Question("Planta comumente conhecida por dar sorte?",
    ["samambaia", "capim-santo", "manjericão", "trevo-de-quatro-folhas"]
    , 4);

let q40 = new Question("Quais signos do zodíaco são de água?",
    ["leão, peixes e capricórnio", "sagitário, capricórnio e áries", "Peixes, Câncer e Escorpião", "touro, virgem e aquário"]
    , 3);

let q41 = new Question("Quantos Gigabytes possui um Terabyte?",
    ["1000", "264", "5000", "um milhão"]
    , 1);
let TodasAsGerais: Question[] = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11, q12, q13, q14, q15, q16, q17, q18, q19, q20, q21, q22, q23, q24, q25, q26, q27, q28, q29, q30, q31, q32, q33, q34, q35, q36, q37, q38, q39, q40, q41];


class Artes extends TaskWithTime {
    img!: File;
    constructor(contexto: string, imagem: File) {
        super("Aqui você é um artista.", contexto, 10000, 1, "Se expresse. Seja você. Esse módulo não é sobre vencer. Mas se puder nos surpreenda.");
        this.img = imagem;
    }
}
let saiaDaIlha = new Artes("Você está no mundo de papel em uma das suas ilhas de papel e precisa sair dela. O que você tem em mãos? Apenas tesoura e cola.", require('@/assets/ilha-de-papel.png'))

let TodasAsArtes: Artes[] = [saiaDaIlha];

export { TodasAsMimicas, TodasAsGerais, TodasAsArtes };