class Jogador {
  private _confirmado: boolean = false;

  public nome!: string;
  private _pontos: number = 0;

  private _id!: number;

  protected _imagem!: File;

  constructor(nome: string, id: number, imagem: File) {
    this.nome = nome;
    this._id = id;
    this._imagem = imagem;
  }

  get id(): number { return this._id; }
  get pontos(): number { return this._pontos; }
  get imagem(): File { return this._imagem; }

  set imagem(value: File) {
    this._imagem = value;
  }

  public confirmar(): void {
    this._confirmado = !this._confirmado;
  }
  get confirmado(): boolean { return this._confirmado; }

  public marcarPonto(): void {
    this._pontos += 1;
  }

  public perderPonto(): void {
    this._pontos += 1;
  }

  public alterarPontos(p: number): void {
    this._pontos = p;
  }
}

export { Jogador };
