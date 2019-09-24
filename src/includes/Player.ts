class Player {
  private _ready: boolean = false;

  public _name!: string;
  private _score: number = 0;

  private readonly _id!: number;

  protected _img!: File;

  constructor(name: string, id: number, img: File) {
    this._name = name;
    this._id = id;
    this._img = img;
  }

  get id(): number { return this._id; }
  get score(): number { return this._score; }
  get img(): File { return this._img; }

  set img(value: File) {
    this._img = value;
  }

  public signUp(): void {
    this._ready = true;
  }

  public remove(): void {
    this._ready = false;
  }

  get ready(): boolean { return this._ready; }

  public point(): void {
    this._score += 1;
  }

  public losePoint(): void {
    this._score += 1;
  }

  public changeScore(p: number): void {
    this._score = p;
  }
}

export { Player };
