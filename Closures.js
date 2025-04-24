const createCounter = (val) => {
    let intial = val;
    return function (...agrs) {
        return ++intial;
    }
}

let callCounter = createCounter(0);
console.log(callCounter())
console.log(callCounter())
console.log(callCounter())
console.log(callCounter())
console.log(callCounter())
console.log(callCounter())
console.log(callCounter())
console.log(callCounter())