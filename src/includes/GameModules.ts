import { TodasAsMimicas, TodasAsGerais, TodasAsArtes } from '@/includes/GameTasks'
import { Modulo } from '@/includes/Modulo'


let Artes = new Modulo(
    "Artes",
    "Prepare a tesoura, a cola, a massinha de modelar, o papel, o lápis, a caneta, o pincel, o quadro, a tinta guache...",
    require('@/assets/modulo-artes.png'),
    ...TodasAsArtes);

let Teatro = new Modulo(
    "Teatro",
    "Atividades performativas. Dance, cante, imite, faça mímica. Esse módulo é para quem vive pelo aplauso.",
    require('@/assets/modulo-teatro.png'),
    ...TodasAsMimicas);

let Geral = new Modulo(
    "Geral",
    "Questões sobre tudo. 'Ser ou não ser?', 'Por que a galinha atravessou a rua?', você pode me dizer a raiz quadrada de 129?",
    require('@/assets/modulo-geral.png'),
    ...TodasAsGerais);



let NotReady = new Modulo(
    "Em breve",
    "Calma aí... Esse módulo está sendo implementado.",
    require('@/assets/modulo-not-ready.png'));

let TodosOsModulos: Array<Modulo> = [Artes, Teatro, Geral];

export { Artes, Teatro, Geral, NotReady, Modulo, TodosOsModulos };