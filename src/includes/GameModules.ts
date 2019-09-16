import { Mimica, Dance } from '@/includes/GameTasks'
import { Module } from '@/includes/Module'

let Artes = new Module("Artes", "Prepare a tesoura, a cola, a massinha de modelar, o papel, o lápis...", require('@/assets/waves-up.png'));
let Teatro = new Module("Teatro", "Atividades performativas, dança, canto, imitação, mímica...", require('@/assets/waves-up.png'), new Dance(), new Mimica());
let Geral = new Module("Geral", "Questões sobre tudo, 'Ser ou não ser?', 'Por que a galinha atravessou a rua?', você pode me dizer a raiz quadrada de 129?", require('@/assets/waves-up.png'));
let NotReady = new Module("Em breve", "Calma aí...", require('@/assets/waves-up.png'));

export { Artes, Teatro, Geral, NotReady };