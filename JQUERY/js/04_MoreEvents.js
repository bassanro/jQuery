

$("h1").click(function(){
    alert("H1 clicked");
})

$("submit").click(function(){
    console.log("Another Click");
})

$("button").click(function(){
    alert("Someone Clicked a button");
    $(this).css("background", "pink");
})


// KEYPRESS

$("input").keypress(function(event) {
    console.log(event);
    if (event.which === 13) {
        console.log("You hit enter");
    }
});


// ON EVENT. 
// on event can handle all events mentioned in text.

// click will add listner for existing elements. 
// on will add listner for potential future elements.
$("submit").on("click", function(){
    console.log("Another click!");
});


$("input").on('dblclick',function(){
    console.log("Double click")
});

$("h1").on("click", function(){
    $(this).css("color", "purple");
});



$("input").on("keypress", function(){
    console.log("keypressed");
});

$("button").on("mouseenter", function() {
    console.log("MOUSE ENTER");
})

var style = {
    
};

$("button").on("mouseenter", function() {
    $(this).toggleClass("boldMe");
;});