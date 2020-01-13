//objects  - store data in key/value pairs and unlike arrays, objects have no order. 

var person = { 
    name: 'Cindy',
    age: 32,
    city: "Missoula"
};


// Access member. 
console.log(person["name"]);
console.log(person.city);

/*
// Cannot use (.) notation if property starts with a number. 
someobject.1blah // INVALID
someobject["1blah"]   //VALID!


// . can't resolve or evaluate variable and expression.
var str = "name";
someobject.str; // doesn't look for "name"
someobject[str] // looks for name after evaluating. 

// . can't work on spaces
someobject.fav color //Invalid. 
someobject["fav color"] // Valid. 

*/


var peson = {};
person.name = "travis";
person.age = 21;
person.city = "LA";

var person = {
    name: "Travis",
    age: 21,
    city: "New York"
};

// another way of init. 
var person = new Object();
person.name = "travis";
person.age = 21;
person.city = "LA";

// They can hold any type of data and stores as a dictonary (key/value) pairs. 
// Array of objects 
var posts = [
    {
        title: "Cats are intelligent",
        author: "Roshan",
        comments : ["Awesome posts", "Terrible post"]
    },
    {
        title: "Cats are actually awesome",
        author: "Cat Luvr",
        comments: ["<3", "Go to hell, I hate you!"]
    }
]

console.log(posts);
console.log(posts[0].title);
console.log(posts[0].comments[1]);


// Quiz. 
var someObject =  {};
someObject._name = "Hello";
someObject.age = 6;
var prop = "color";
someObject[prop] = "red";
//someObject.12 = true;   // Invalid can't start with number 

var someObject = {
    friends: [
        { name: "Nonu" },
        { name: "Nona" },
        { name: "Nonudi" }
    ],
    color: "baby blue",
    isEvil: true
};

// Extract Nonu. 
console.log(someObject.friends[0].name);



// Exercice 2. 

var movie = [
    {name: "In Burgers", rating: 5, haswatched: true},
    {name: "Frozen", rating: 4.5, haswatched: false},
    {name: "Mad Max Furry Road", rating: 5, haswatched: true}
]
    
movie.forEach(function(movie) {
    var result = "You have ";
    if (movie.haswatched) {
        result += "watched ";
    }
    else 
        result += "not seen "

    result += "\"" + movie.name + "\"";
    result += " - " + movie.rating + " stars";
    console.log(result);
});