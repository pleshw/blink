function getRandom(): number {
    return Math.round(Math.random());
}

function getRandomArbitrary(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.round(Math.random() * (max - min + 1) + min);
}

function getRandomExcept(min: number, max: number, ...failOn: number[]): number {
    failOn = Array.isArray(failOn) ? failOn : [failOn];
    var num = getRandomArbitrary(min, max);
    return failOn.includes(num) ? getRandomExcept(min, max, ...failOn) : num;
}

export { getRandom, getRandomArbitrary, getRandomExcept }