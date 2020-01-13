
// Gives all details of DOM in object syntax.
//console.dir(document);

// SELECT AND MANIPULATE. 

var h1 = document.querySelector("h1");        // Returns an object from DOM
var body = document.querySelector("body");
 
setInterval(function () {
  if (h1.style.color === "black") {
    body.style.background = "pink";
  } else {
    body.style.background = "orange";
  }
  h1.style.color = "red";
}, 1000)



// document.getElementsbByClassName() -> returns HTML Collection.