// Rather than directly maniplulating styles with JS, 
//we can define a CSS class and then toggle it on or off with JS.

var tag = document.querySelector("h1");


//add a class;
tag.classList.add("big");

//Remove
tag.classList.remove("big");

//Toggle
tag.classList.toggle("big");





