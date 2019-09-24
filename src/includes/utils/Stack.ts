class Node<T> {
    back!: Node<T>;
    value!: T | null;
    front!: Node<T>;

    constructor(value?: T) {
        this.value = value || null;
    }

    get prev(): Node<T> { return this.back; }
    set prev(node: Node<T>) { this.back = node; }

    get next(): Node<T> { return this.front; }
    set next(node: Node<T>) { this.front = node; }
}

class Stack<T> {
    public size: number = 0;
    start: Node<T> = new Node<T>();
    end: Node<T> = new Node<T>();

    constructor() {
        this.start.next = this.end;
        this.end.prev = this.start;
    }

    private upgrade(): boolean {
        this.size += 1;
        return true;
    }

    private downgrade(): boolean {
        this.size -= 1;
        return true;
    }

    push(value: T): boolean {
        let attach = new Node<T>(value);
        attach.next = this.end;

        if (this.size === 0) {
            attach.prev = this.start;
            this.start.next = attach;
            this.end.prev = attach;
            return this.upgrade();
        }


        this.end.prev.next = attach;
        attach.prev = this.end.prev;
        this.end.prev = attach;

        return this.upgrade();
    }


    pop(): T | null {
        if (this.size === 0) {
            return null;
        }

        let val = this.end.prev.value;

        this.end.prev = this.end.prev.prev;
        this.end.prev.next = this.end;


        this.downgrade();
        return val;
    }
}

export { Stack };