
// 4 ways to select the first tag. 

//Only select first element
var first1 = document.querySelector("#first");
console.log(first1);


// Learn the right way.
var first2 = document.querySelectorAll(".special");
console.log(first2[0].outerHTML);

// Notice here that # is not required since it's selecting by id.
var first3 = document.getElementById("first");
console.log(first3);


var first4 = document.getElementsByClassName("special");
console.log(first4[0]);

var first5 = document.getElementsByTagName("p");
console.log(first5[0]);


//CSS selector. 

var first6 = document.querySelector("h1 + p");
console.log(first6);
