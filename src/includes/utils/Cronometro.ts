abstract class Cronometro {
    protected tempo!: number;
    protected contador!: number;
    protected temporizador!: number;


    constructor(tempo: number) {
        this.tempo = tempo;
        this.contador = 0;

        this.temporizador = -1;
    }

    protected iniciar(): void {
        this.reiniciar();
        this.temporizador = setInterval(() => {
            if (this.contador <= 0) {
                this.parar();
                return;
            }
            this.contador -= 1;
        }, 1000);
    }

    protected parar(): void {
        this.pausar();
        this.contador = 0;
    }

    protected pausar(): void {
        if (this.temporizador != -1) {
            clearInterval(this.temporizador);
        }
    }

    protected reiniciar(): void {
        this.contador = this.tempo;
        this.iniciar();
    }
}

export {Cronometro}