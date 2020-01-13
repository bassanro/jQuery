
// Fading and sliding. 
// Multiple events doesn't work at same time. 

// $("button").on("click", function() {
//     $("div").fadeOut(1000, function() { // This is Async, that why we need to place code inside the call.
//         console.log("Fade Completed");
//         $(this).remove();  // See this in Elements section of Chrome Inspect tool.
//     }); // THis is async
// })



// $("button").on("mouseover", function() {
//     $("div").fadeIn(1000, function() { // This is Async, that why we need to place code inside the call.
//     }); 
// })


// $("button").on("mouseover", function() {
//     $("div").toggle(1000, function() { // This is Async, that why we need to place code inside the call.
//     }); 
// })



// SlideDown
// $("#slide").on("click", function() {
//     $('div').slideDown();
// });



$("#slide").on("click", function() {
    $('div').slideToggle(1000, function(){
        console.log("SLIDE IS DONE");
        $(this).remove();
    });
});
