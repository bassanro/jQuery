
// Retirive or update using these elements. Can change multiple things at oen go.
// textContent
$("h1").text();

// Like InnerHTML
$("h1").html();


// Retrive value of an atribute.
//$("h1").attr();


//height="300px" width="300px"

var style = { 
    width: "200px",
    height: "100px"
}

$("img").css(style)

$("img").css("width", "200px");
$("img").css("heigth", "100px");

$('img').attr("src", "images/3.jpg")
//$('input').attr('type','color');

//$('img:first').attr('height', "400px");
$('img:nth-of-type(1)').attr('height', "400px");

$('img').last().attr("height", "500px");


// val method. 
$("input").val("Rusty Steel");
$("input").val();

let x = $("select").val();
console.log(x);

$("select").change(function() {
    console.log($("select").val())
})




$("h1").addClass("correct");
$("li").addClass("wrong");
//$("input").addClass("done");

// Similary removeClass and toggleClass.

$("#checkMe").click(function() {
    $("#textIn").toggleClass("correct");
})
