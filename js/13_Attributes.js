/*
   getAttribute() and setAttribute() to read and write atributes like src and href.  
*/

var link = document.querySelector("a");
link.getAttribute("href"); 
link.setAttribute("href", "http://www.google.co.in");



var img = document.querySelector("img");
console.log(img);
img.setAttribute("src", "corgi.png");

