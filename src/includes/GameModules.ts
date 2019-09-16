import { Mimica, Dance } from '@/includes/GameTasks'
import { Module } from '@/includes/Module'

let Artes = new Module("Artes", "Prepare a tesoura, a cola, a massinha de modelar, o papel, o lápis...", require('@/assets/modulo-artes.png'));
let Teatro = new Module("Teatro", "Atividades performativas, dança, canto, imitação, mímica...", require('@/assets/modulo-teatro.png'), new Dance(), new Mimica());
let Geral = new Module("Geral", "Questões sobre tudo.\n 'Ser ou não ser?', 'Por que a galinha atravessou a rua?', você pode me dizer a raiz quadrada de 129?", require('@/assets/modulo-geral.png'));
let NotReady = new Module("Em breve", "Calma aí... Esse módulo está sendo implementado.", require('@/assets/modulo-not-ready.png'));

let AllModules: Array<Module> = [Artes, Teatro, Geral];

export { Artes, Teatro, Geral, NotReady, Module, AllModules };