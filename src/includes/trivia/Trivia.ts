import { Atividade } from '@/includes/Atividade';
import { Alternativa } from '@/includes/Alternativa';


class Trivia extends Atividade {
    alternativas!: Map<number, Alternativa>;

    constructor(title: string, alternativas: string[], correta: number) {
        super(
            "trivia", // Nome
            "Você tem o que é preciso para acertar essa questão?", // Titulo
            "Não é tão fácil... Só as vezes.", // Subtitulo
            title, // Descrição
            30, // Tempo
            ["conhecimentos gerais", "perguntas"], // Categorias
            1 // Numero de jogadores
        );

        for (const [index, alternativa] of alternativas.entries()) {
            /// Se a alternativa for a correta então ela será marcada.
            this.alternativas.set(index, new Alternativa(
                alternativa,
                index,
                (index === correta) ? Alternativa.CORRETA : Alternativa.ERRADA
            ));
        }
    }

    // Retorna verdadeiro se a resposta for correta
    verificarResposta(n: number): boolean {
        if (n >= this.alternativas.size || n < 0) {
            throw new Error('Alternativa inválida');
        }
        return this.alternativas.get(n)!.correta;
    }
}

export { Trivia };