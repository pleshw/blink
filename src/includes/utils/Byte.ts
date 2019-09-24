class Byte {
    private _status: number = 0;

    constructor(status: number) {
        this._status = status;
    }

    set status(n: number) {
        this._status = n;
    }

    add(novo_status: number): void {
        if (!Byte.is(this, novo_status))
            this.status += novo_status;
    }

    remove(novo_status: number): void {
        if (Byte.is(this, novo_status))
            this.status -= novo_status;
    }

    switch(novo_status: number): void {
        if (!Byte.is(this, novo_status))
            this.status += novo_status;
        else
            this.status -= novo_status;
    }

    public static is(alternativa: Byte, status: number): boolean {
        return (alternativa.status & status) === status;
    }
}

export { Byte }