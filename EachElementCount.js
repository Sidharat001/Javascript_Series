let word = 'Javascript';

function displayCount (val) {
    let result = {};
    for(str of val) {
        result[str] = (result[str] || 0) + 1
    }
    console.log(result)
}

displayCount(word)