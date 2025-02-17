// Array of objects
var users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];


var names = users.map(function(user) {
    return user.name;
});

console.log(names); 
