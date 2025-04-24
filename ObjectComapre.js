const shallowCompare = (source, target) => {
    if (Object.is(source, target)) return true;
    
    const sourceKeys = Object.keys(source);
    const targetKeys = Object.keys(target);
    
    if (sourceKeys.length !== targetKeys.length) return false;
    
    return sourceKeys.every((key) => {
        // Deep Compare for nested objects
        if (typeof source[key] === 'object' && typeof target[key] === 'object') {
            return shallowCompare(source[key], target[key]);
        }
        return source[key] === target[key];
    });
}

const person1 = {
    name: "Alice",
    age: 25,
    job: "Engineer",
    hobbies: ["reading", "cycling"],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

const person2 = {
    name: "Alice",
    age: 25,
    job: "Engineer",
    hobbies: ["reading", "cycling"],
    address: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
    }
};

console.log(shallowCompare(person1, person2))