import { Byte } from '@/includes/utils/Byte'

class Alternativa {
    public static ERRADA = 0;
    public static CORRETA = 1;
    public static USADA = 2;

    public id!: number;
    public status!: Byte;
    public conteudo!: string;

    constructor(conteudo: string, id: number, status: number) {
        this.conteudo = conteudo;
        this.id = id;
        this.status.add(status);
    }

    public get errada(): boolean { return Byte.is(this.status, Alternativa.ERRADA) }
    public get correta(): boolean { return Byte.is(this.status, Alternativa.CORRETA) }
    public get usada(): boolean { return Byte.is(this.status, Alternativa.USADA) }

    public marcarErrada(): void { this.status.add(Alternativa.ERRADA) }
    public marcarCorreta(): void { this.status.add(Alternativa.CORRETA) }
    public marcarUsada(): void { this.status.add(Alternativa.USADA) }
}

export { Alternativa };