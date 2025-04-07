const searching = (query) => {
    console.log(`searching message is :- ${query}`)
}

const throttle = (fn, delay) => {
    let timeoutId = 0;
    return function (...args) {
        const now = Date.now();
        if (now - timeoutId >= delay) {
            timeoutId = now;
            fn(...args);
        }
    }
}

const optimiseSearching = throttle(searching, 1000)

optimiseSearching("H")
optimiseSearching("HI")
optimiseSearching("HI, I")
optimiseSearching("HI, I a")
optimiseSearching("HI, I am ")
optimiseSearching("HI, I am k")
optimiseSearching("HI, I am ka")
optimiseSearching("HI, I am kart")
optimiseSearching("HI, I am karth")
optimiseSearching("HI, I am karthik")