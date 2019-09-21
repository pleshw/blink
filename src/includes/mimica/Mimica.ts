import { Atividade } from '@/includes/Atividade'
import { Template } from '@/includes/mimica/modelos'

class Mimica extends Atividade {

    alternativas!: Array<string[]>;

    constructor(...alternativas: Array<string[]>) {
        super(
            "mimica", // Nome
            "Você imita os outros acertam!!!", // Titulo
            "Não pode fazer barulho...", // Subtitulo
            "Ele pode ser qualquer uma das opções abaixo.", // Descrição
            30, // Tempo
            ["exercicio", "performance", "imitação"], // Categorias
            1 // Numero de jogadores
        );

        this.alternativas = alternativas;
    }
}

export { Mimica };