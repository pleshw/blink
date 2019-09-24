import { Atividade } from '@/includes/Atividade'
import { Alternativa } from '@/includes/Alternativa'
import { getRandomArbitrary, getRandomExcept } from '@/includes/utils/Random'

class Mimica extends Atividade {

    alternativas!: Array<Alternativa>; // todas as alternativas
    imita!: Alternativa; // quem o jogador deve imitar
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
                new Alternativa(
                    element,
                    index,
                    Alternativa.ERRADA
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

        this.imita.marcarCorreta();
        this.imita.marcarUsada();
    }
}

export { Mimica };