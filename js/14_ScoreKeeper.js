var p1Btn = document.querySelector("#p1");
var p2Btn = document.getElementById("p2");
var h1 = document.querySelector("h1");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var input = document.querySelector("#input");
var roundsDisplay = document.querySelector("p span");
var rounds = 5; 


var p1Score = 0;
var p2Score = 0;
var stateGameOver = false;

p1Btn.addEventListener("click", function() {
    if (!stateGameOver)
    {
        p1Score++;
        p1Display.textContent = p1Score;
        if (p1Score === rounds)
        {
            p1Display.classList.add("winner");
            console.log("Game Over");
            stateGameOver = true;
        }
    }
});

p2Btn.addEventListener("click", function() {
    if (!stateGameOver)
    {
        p2Score++;
        p2Display.textContent = p2Score;
        if (p2Score === rounds)
        {
            p2Display.classList.add("winner");
            console.log("Game Over");
            stateGameOver = true;
        }
    }
});



reset.addEventListener("click", function() {
    resetMe();
});


input.addEventListener("change", function() {
    rounds = Number(this.value);
    roundsDisplay.textContent = rounds;
    resetMe();
});

// Why Reset is not working.
function resetMe() {
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p2Display.textContent = p2Score;
    stateGameOver = false;
    p1Display.classList.remove("winner");
    p2Display.classList.remove("winner");
};