import { Game } from '@/includes/Game'
import { Question } from '@/includes/Question'
import { getRandomArbitrary, getRandomExcept } from '@/includes/utils/Random'

class Mimica extends Game {

    alternativas!: Array<Question>; // todas as alternativas
    imita!: Question; // quem o jogador deve imitar
    usadas!: Array<number>; // alternativas que já foram utilizadas

    constructor(alternativas: Array<string>) {
        super(
            "mimica", // Nome
            "Você imita os outros acertam!!!", // Titulo
            "Não pode fazer barulho...", // Subtitulo
            "Ele pode ser qualquer uma das opções abaixo.", // Descrição
            30, // Tempo
            ["exercicio", "performance", "imitação"], // Categorias
            1 // Numero de jogadores
        );

        // Instanciando todas as alternativas
        alternativas.forEach((element, index) => {
            this.alternativas.push(
                new Question(
                    element,
                    index,
                    Question.WRONG
                )
            );
        });

        this.prepararAlternativa();
    }


    /**
     * prepara uma nova alternativa que ainda não foi utilizada.
     */
    prepararAlternativa(): void {
        let n_alternativa = getRandomExcept(0, this.alternativas.length, ...this.usadas);

        this.usadas.push(n_alternativa);

        this.imita = this.alternativas[n_alternativa];

        this.imita.makeRight();
        this.imita.use();
    }
}

export { Mimica };