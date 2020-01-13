// Adding methods to objects. 
var obj = {
    name: "Chuck",
    age : 45,
    isCool: false,
    friends: ["bob", "tina"],
    add: function(x,y) {
        return x+y;
    }
}

console.log(obj.add(10,15));

// Functions can be wrapped in objects within object namespace.
var dogSpace = {};
dogSpace.speak = function() 
{
    return "Woof!";
}

var catSpace = {};
catSpace.speak = function() 
{
    return "Meow!";
}


console.log(dogSpace.speak());


// this keyword

var comments = {};
comments.data =  [ "Good job", "Bye", "Boaring" ];

function print(array) {
    array.forEach(function(el) {
        console.log(el);
    })
}


comments.print = function() {
    this.data.forEach(function(el) {
        console.log(el);
    })
}

print(comments.data);
console.log("===========================");
comments.print();