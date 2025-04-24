function greeting() {
    console.log("Good Morning");
    return new Promise((resolve, reject) => {
        console.log("How are you ??");
        resolve();
        reject("Something went wrong");
    })
}

greeting()
.then(
    () => console.log("Promise Executes Successfully")
).catch((error)=> console.log("Promise Fail to execute"))