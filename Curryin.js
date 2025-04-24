function Currying(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}

function infinityCurrying(a) {
   return function (b) {
    if(b) return infinityCurrying(a + b);
    return a;
   }
}

console.log(Currying(1)(2)(3)); // 6
console.log(infinityCurrying(1)(2)(3)(4)(5)(6)()); // 21
console.log(infinityCurrying(1)(2)(3)(4)(5)(6)(7)(8)(9)()); // 45