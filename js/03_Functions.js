// Functions. 


// Declare them first and then use it later. 
function doSomething() {
    console.log("Hello World");
}

doSomething();
doSomething();
doSomething();
doSomething();
doSomething();
console.log("******************************************");

// Functions with arguments. 

function Square(num) {
    console.log(num * num);
}

console.log(Square(10));   // Prints undefined since there is nothing being returned. 


console.log("******************************************");


function Square(num) {
    return (num * num);
}
console.log(Square(10)); 

var result = Square(104);
console.log(result);

console.log("******************************************");


// Function declaration.
function capatilize(str) {
    if (typeof str === 'number')
    {
        return "That's not a string!";
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Function expression
var capatilizeExp = function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

capatilizeExp("hello kitty");
var capatilizeExp = "hello World";
//capatilizeExp("hello kitty"); this is invalid since capatilizeExp is no longer a funciont. 

console.log(capatilize("hello world"));


console.log("******************************************");





function factorial(n) {

    var num = 1;
    for (var i=1; i<=n;i++)
    {
        num *= i;
    }
    return num;
}

console.log(factorial(4));

console.log("******************************************");



function kebabToSnake(str)
{
    return str.replace(/-/g, "_"); 
}

console.log(kebabToSnake("Hello-World-This-is-a-long-Line"));

console.log("******************************************");




// Higher order function -> function which takes function and return function. 
function sing() {
    console.log("Twinkle Twinkle little start");
}

var t =  setInterval(sing, 1000);
clearInterval(t);










