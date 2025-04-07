const searching = (query) => {
    console.log(`searching message is :- ${query}`)
}

function debounce (fn,delay) {
    let timerId;
    return function (...args) {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
            fn(...args);
        }, delay);
    }
}

const optimiseSearching = debounce(searching, 1000)

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