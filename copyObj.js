let user1 = {
    name: "karthik",
    age: 23,
    address: {
        city: "Jaipur",
        state: "Rajasthan",
        country: "India"
    }
}

// let User2 = User1;  // Update also User1 Object copy refences X not right way

// Shallow Copy 2 way
// let user2 = Object.assign({}, user1) // 1st way
let user2 = {...user1} // 2nd way by spread operetors
user2.name = "Karthik Jaiswal";

// Shallow copy can't work with nested object
user2.address.city = "delhi";

// Deep Copy way Issue 
let user3 = JSON.parse(JSON.stringify(user1)); // Issue with JSON.stringify and JSON.parse is that it doesn't work with functions
user3.address.city = "delhi";
user3.address.state = "New delhi";

// Deep Copy way Solution by lodash library
let user3 = _.cloneDeep(user1); // lodash library
user3.address.city = "delhi";
user3.address.state = "New delhi";

console.log(user3);