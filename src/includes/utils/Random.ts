declare global {
    interface Array<T> {
        random(): T;

        randomIndex(): number;

        popRandom(): T;
    }
}

Array.prototype.random = function () {
    return this[getRandomArbitrary(0, this.length - 1)];
};

Array.prototype.randomIndex = function () {
    return getRandomArbitrary(0, this.length - 1);
};

Array.prototype.popRandom = function () {
    let index = this.randomIndex();
    let result = this[index];
    this.splice(index, 1);
    return result;
};

function getRandom(): number {
    return Math.round(Math.random());
}

function getRandomArbitrary(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min + 1) + min);
}

function getRandomExcept(min: number, max: number, ...failOn: number[]): number {
    if (!Array.isArray(failOn)) {
        failOn = [failOn];
    }
    let num = getRandomArbitrary(min, max);
    return failOn.includes(num) ? getRandomExcept(min, max, ...failOn) : num;
}

export {getRandom, getRandomArbitrary, getRandomExcept}