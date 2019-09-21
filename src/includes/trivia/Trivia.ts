import { Atividade } from '@/includes/Atividade';

class Alternativa {
    public static ERRADA = 0;
    public static CORRETA = 1;
    public static USADA = 2;

    public id!: number;
    public flag!: number;
    public conteudo!: string;

    constructor(conteudo: string, id: number, flag: number) {
        this.conteudo = conteudo;
        this.id = id;
        this.flag = Alternativa.ERRADA;
    }
}

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

    verificarResposta(n: number): boolean {
        if (n >= this.alternativas.size || n < 0) {
            throw new Error('Alternativa inválida');
        }
        return this.alternativas.get(n)!.flag === Alternativa.CORRETA;
    }
}

export { Trivia };