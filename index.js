var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;


//Player 1
if (randomNumber1 === 1) {
    $(".img-1").attr("src", "images/dice1.png");
}

if (randomNumber1 === 2) {
    $(".img-1").attr("src", "images/dice2.png");
}

if (randomNumber1 === 3) {
    $(".img-1").attr("src", "images/dice3.png");
}

if (randomNumber1 === 4) {
    $(".img-1").attr("src", "images/dice4.png");
}

if (randomNumber1 === 5) {
    $(".img-1").attr("src", "images/dice5.png");
}

if (randomNumber1 === 6) {
    $(".img-1").attr("src", "images/dice6.png");
}


// player 2
if (randomNumber2 === 1) {
    $(".img-2").attr("src", "images/dice1.png");
}

if (randomNumber2 === 2) {
    $(".img-2").attr("src", "images/dice2.png");
}

if (randomNumber2 === 3) {
    $(".img-2").attr("src", "images/dice3.png");
}

if (randomNumber2 === 4) {
    $(".img-2").attr("src", "images/dice4.png");
}

if (randomNumber2 === 5) {
    $(".img-2").attr("src", "images/dice5.png");
}

if (randomNumber2 === 6) {
    $(".img-2").attr("src", "images/dice6.png");
}

// Changing the h1
if (randomNumber1 > randomNumber2) {
    $("h1").html("Player 1 wins🚩 !!");
}

if (randomNumber1 < randomNumber2) {
    $("h1").html("Player 2 wins🚩 !!");
}

if (randomNumber1 === randomNumber2) {
    $("h1").html("DRAW !!!");
}

$("button").on("click", function() {
    $(".img-1").attr("src", "images/dice6.png");
    $(".img-2").attr("src", "images/dice6.png");
    $("h1").html("Refresh Me !!!");
});