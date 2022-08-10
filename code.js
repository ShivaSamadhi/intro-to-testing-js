
// helloWorld function
let helloWorld = function () {
    return "Hello, World!";
}

// sayHello function
let sayHello = function (name) {
    if (name === undefined || typeof name == "boolean" || name === ""){
        return helloWorld()
    } else if (typeof name == "number" || name === null || isNaN(name) === false){
        return "Invalid input"
    }
    return `Hello, ${name}`
}
console.log(sayHello(5))

let isFive = function (num) {
    return parseInt(num) === 5
}

let isEven = function (num) {
    return parseInt(num) % 2 === 0
}
