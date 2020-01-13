console.log("******************************************");
// 1. Array basics
var friends = ['Charlie', 'Liz', 'David', 'Mattias'];
//indexed from 0 to n-1

console.log(friends[0]);
friends[0] = 'Chuk';

//  Change the value in index;
console.log(friends[0]);


// Insert in the end
friends[4] = 'Emmelia';
console.log(friends[4]);

console.log("******************************************");
//2. insert in any position. 

var colors = ["red", "orange", "yellow"];

// Add 7 undefined values;
colors[10] = "violet";

console.log(colors);


console.log("******************************************");
// 3. More about Arrays.

var friends = [];
var friends = new Array();

var random_collection = [49,true, 'Hermione', null];

var nums = [1,2,3,4,5,6,7];
console.log(nums.length);

console.log("******************************************");
// 4. Methods of arrays.  - Use MDN website documentation to check all syntax of Javascript;


function printMe(array)
{
    array.forEach(function(entry) {
        console.log(entry);
    });
    console.log("************************************************************");
}
printMe(colors);

colors.push('Green');

printMe(colors);

// removed will have violet.
var removed = colors.pop();

printMe(colors);

console.log("******************************************");
//5. Shift and unshift in an array.
// unshfift -> Add an element to the begin of an array. 

colors.unshift("infrared");
printMe(colors);

// shift will remove the first element in array.
var first = colors.shift();
printMe(colors);


console.log("******************************************");
//6. indexof -> find index of element in an array.

var friends = ['Charlie', 'Liz', 'David', 'Mattias'];

console.log(friends.indexOf('David'));  // Found - 0,1,2 --> 2
console.log(friends.indexOf("New"));   //Not find --> -1


console.log("******************************************");
//6. Slice -> Copy parts of an array.

var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];

var citrus = fruits.slice(1,3);   // Inclduing the start index and end index + 1.
printMe(citrus);



console.log("******************************************");

/* // Commented since this code asks for user input.
var todos = [];

//  Load the page before running the JavaScript.
window.setTimeout(function() 
{
    // put all of your JS code from the lecture here
    var input = prompt("What would you like to todo");
    while (input !== "quit") 
    {
        if (input === "list")
        {
            console.log(todos);
        }
        else if (input === "new")
        {
            var ask = prompt("enter a new todo");
            todos.push(ask);
        }
        input = prompt("What would you like to todo");
    }
    console.log("Okay you have quit.")

  }, 500);
*/ 

console.log("******************************************");
// Array Iterations. 

var colors = ["red", "orange", "yellow", "crimson", "teak"];
for (var i=0; i < colors.length; i++) 
{
    console.log(colors[i]);
}

console.log("******************************************");
// ForEach  --> arr.forEach(someFunction); 

// Syntax --> forEach(element per loop, index, actual array passed)
// --> forEach(el,i, arr)

[1,2,3].forEach(function(el,i,arr) {
    console.log(el,i,arr);
});

colors.forEach(function(color) {
    console.log(color);
});


function printColor(color) {
    console.log(color);
    console.log("=============");
}

// Note that we pass function and don't call it using () here. 
colors.forEach(printColor);

console.log("******************************************");
// Array splice. 
// Cut 1 element
var index = 2;
colors.splice(index,1)

console.log("Note that now yellow is gone")
printColor(colors);
colors.forEach(printColor);



console.log("******************************************");
//Exercise on Arrays. 


printReverse([1,2,3,4,5]);

function isUniform(arr)
{
    console.log("Uniformity check started ");
    if (checkUniformity(arr))
    {
        console.log("true");
    }
    else {
        console.log("false");
    }
}

console.log(isUniform([1,1,1,1,1])); // -> True
console.log(isUniform([1,2,3,4])); // -> False;


console.log(sumArray([1,2,3])); //6
console.log(sumArray([-5,100])); // 95

/*
max([1,2,3,4]); //4
*/


function printReverse(arr) {
    for (var i =arr.length-1; i>=0; i--)
    {
        console.log(arr[i]);
    }
}


function checkUniformity(arr) {
    var first = arr[0];

    // Does not work since the false is returned out of first function.
    arr.forEach(function(num) {
        if (num !== first)
        {
            return false;
        }
    });
    return true;
}

function sumArray(arr) {
    var sum = 0;
    arr.forEach(function(num) {
        sum += num;
    });
    return sum;
}
