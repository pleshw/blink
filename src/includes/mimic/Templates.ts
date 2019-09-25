import { Mimica } from '@/includes/mimic/Mimica';


let Felinos: string[] = ["um gato", "um leão", "um tigre", "uma onça"];
let Roedores: string[] = ["um coelho", "um rato", "uma capivara", "um esquilo"];
let Aves: string[] = ["um pardal", "uma calopsita", "um periquito", "uma arara"];
let Caninos: string[] = ["um lobo", "um cachorro", "uma hiena", "uma raposa"];
let Profissoes: string[] = ["um encanador", "um eletricista", "um professor", "um relojoeiro"];
let Profissoes2: string[] = ["um cantor", "um locutor", "um apresentador", "um reporter"];
let Objetos: string[] = ["uma cadeira", "uma mesa", "uma pia", "um sofá"];


namespace Template {
    export let MimicaRoedores: Mimica = new Mimica(Roedores);
    export let MimicaFelinos: Mimica = new Mimica(Felinos);
    export let MimicaAves: Mimica = new Mimica(Aves);
    export let MimicaCaninos: Mimica = new Mimica(Caninos);
    export let MimicaProfissoes: Mimica = new Mimica(Profissoes);
    export let MimicaProfissoes2: Mimica = new Mimica(Profissoes2);
    export let MimicaObjetos: Mimica = new Mimica(Objetos);

    export let TodasAsMimicas = [MimicaRoedores, MimicaFelinos, MimicaAves, MimicaCaninos, MimicaProfissoes, MimicaProfissoes2, MimicaObjetos];
}


export { Template };