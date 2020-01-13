

// Corgi mixes are <strong>super</strong> adorable 
// This will get the text and not tags around. 

// textContent - GET THE TEXT CONTENT ONLY

var tag = document.querySelector("p")
console.log(tag.textContent)

tag.textContent = "BLA BLA BLA"

// innerHTML -> Get the entire tag. 
// Here you can see the strong tag as well 

console.log(tag.innerHTML);



var p = document.querySelector("p");
console.log(p);

p.textContent = "Corgi Mixes are really really adorable."

var ul = document.querySelector("ul");

console.log(ul)
//Get all text of ul. 
console.log(ul.textContent)

var innerTag = document.querySelectorAll("p")[1];
console.log(innerTag)

console.log("Inner HTML " + ul.innerHTML);

// Change UL elements. 
//ul.innerHTML = "Plants are awesome";

document.querySelector("h1").textContent = "END OF THIS LESSON";

// INNER VS TEXTCONTENT
console.log("Entire body text innerHTML:");
console.log(document.body.innerHTML);



console.log("Entire body text Content:");
console.log(document.body.textContent);


// document.body.textContent = "<h1>Goodbye</h1>";
// document.body.innerHTML = "<h1>Goodbye</h1>";



var h1 = document.querySelector("h1");
h1.addEventListener("click", function(){
    alert("H1 was clicked.")
})


// Color each selected item using events. 
var lis = document.getElementsByTagName("li");
for (var i=0;i<lis.length;i++)
{
    lis[i].addEventListener("click", function() {
        this.style.color = "pink";
    })
}