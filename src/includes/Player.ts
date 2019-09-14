

class Player {
  public confirmed: boolean = false;

  _name!: string | null;
  _id!: number | null;

  _picture!: File | null;

  constructor(name?: string, id?: number, picture?: File) {
    this._name = name || null;
    this._id = id || null;
    this._picture = picture || null;
  }

  set name(value: string | null) {
    this._name = value;
  }
  get name(): string | null { return this._name; }

  set id(value: number | null) {
    this._id = value;
  }
  get id(): number | null { return this._id; }

  set picture(value: File | null) {
    this._picture = value;
  }
  get picture(): File | null { return this._picture; }

}

export { Player };
