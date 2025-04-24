const findMaxMin = (arr) => {
    const removeDuplicates = [...new Set(arr)]; // Remove duplicates from index array
    removeDuplicates.sort((a,b) => b- a);   // Sort the array in descending order
    return { 
        max: removeDuplicates[0], // Largest number
        min: removeDuplicates[removeDuplicates.length - 1] // Smallest number
    };
}

const Employees = [
    { name: "Karthik", age: 30 },
    { name: "Ajay", age: 25 },
    { name: "Ajay", age: 25 },
    { name: "Bittu", age: 25 },
    { name: "Suraj", age: 35 },
    { name: "Vishal", age: 35 }
];

const sortObject = (obj) => {
    const uniqueEmployeesObj = obj.filter((value,index,arr) => 
        index === arr.findIndex((current) => current.name === value.name && current.age === value.age))
        .sort((a, b) => a.name.localeCompare(b.name));
    return uniqueEmployeesObj;
}

console.log(sortObject(Employees)); // Sort and remove duplicates

// console.log(findMaxMin([5, 3, 9, 1, 7, 9]).max); // 9
// console.log(findMaxMin([5, 3, 9, 1, 7, 9]).min); // 1