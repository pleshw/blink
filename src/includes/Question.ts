import {Byte} from '@/includes/utils/Byte'

class Question {
    public static WRONG = 0;
    public static RIGHT = 1;
    public static ALREADY_USED = 2;

    public id!: number;
    public status!: Byte;
    public content!: string;

    constructor(content: string, id: number, status: number) {
        this.content = content;
        this.id = id;
        this.status.add(status);
    }

    public get wrong(): boolean {
        return Byte.is(this.status, Question.WRONG)
    }

    public get right(): boolean {
        return Byte.is(this.status, Question.RIGHT)
    }

    public get alreadyUsed(): boolean {
        return Byte.is(this.status, Question.ALREADY_USED)
    }

    public makeWrong(): void {
        this.status.add(Question.WRONG);
        this.status.remove(Question.RIGHT)
    }

    public makeRight(): void {
        this.status.add(Question.RIGHT);
        this.status.remove(Question.WRONG)
    }

    public use(): void {
        this.status.add(Question.ALREADY_USED)
    }
}

export {Question};