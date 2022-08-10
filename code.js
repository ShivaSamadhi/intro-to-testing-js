
// helloWorld function
let helloWorld = function () {
    return "Hello, World!";
}

// sayHello function
let sayHello = function (name) {
    if (name === undefined || typeof name == "boolean" || name === ""){
        return helloWorld();
    } else if (typeof name == "number" || name === null || isNaN(name) === false){
        return "Invalid input";
    }
    return `Hello, ${name}`;
}
console.log(sayHello(5))

// isFive function
let isFive = function (num) {
    return parseInt(num) === 5
}
// isEven function
let isEven = function (num) {
    return parseInt(num) % 2 === 0
}

// isVowel function
let isVowel = function (input) {
    let vowels = ['a','e','i','o','u']
    if (typeof input == "string"){
        return vowels.includes(input.toLowerCase())
    } else {
        return false
    }
}
console.log(isVowel("banana"))