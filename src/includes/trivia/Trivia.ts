import { Game } from '@/includes/Game';
import { Question } from '@/includes/Question';


class Trivia extends Game {
    alternativas!: Map<number, Question>;

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
            /// Se a alternativa for a right então ela será marcada.
            this.alternativas.set(index, new Question(
                alternativa,
                index,
                (index === correta) ? Question.RIGHT : Question.WRONG
            ));
        }
    }

    // Retorna verdadeiro se a resposta for right
    verificarResposta(n: number): boolean {
        if (n >= this.alternativas.size || n < 0) {
            throw new Error('Question inválida');
        }
        return this.alternativas.get(n)!.right;
    }
}

export { Trivia };