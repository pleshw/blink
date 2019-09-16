import { Mimica, Dance } from '@/includes/GameTasks'
import { Module } from '@/includes/Module'

let Artes = new Module("Artes", "Prepare a tesoura, a cola, a massinha de modelar, o papel, o lápis...", require(''));
let Teatro = new Module("Teatro", "Atividades performativas, dança, canto, imitação, mímica...", require(''), new Dance(), new Mimica());
let Geral = new Module("Geral", "Questões sobre tudo, 'Ser ou não ser?', 'Por que a galinha atravessou a rua?', você pode me dizer a raiz quadrada de 129?", require(''));

export { Artes, Teatro, Geral };