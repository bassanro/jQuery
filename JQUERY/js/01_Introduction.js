/*
    1. DOM API is no longer broken. 
    2. It doens't do anything you can't do on your own.
    3. It's an uncessary dependency. (Adding 100's of library makes it slower)
    4. Performance. 
    5. Lot's of people are moving away from jQuery!
*/ 



$('#trigger').click(function(){
    $('body').css("background", "yellow");

    // Return all the elements of css type li
    $('li').fadeOut(3000, function() {
        $(this).remove();
    });
});


// Manipulating styles 
//$(selector).css(property, value);

$("h1").css("color", "green");
document.querySelector("h1").style.color = "purple";


// We can change multiple styles using jQuery.
var styles = {
    color: "red",
    background: "pink",
    border: "2px solid purple",
}

$("h1").css(styles);

$("li").css("color", "orange");

var lis = document.querySelectorAll("li");
for (let i=0;i<lis.length;i++) {
    lis[i].style.color = "green";
}

$("li").css({
    fontSize: "30px",
    border: "3px dashed purple",
    background: "rgba(89,45,20,0.50)",
});