// STEP 1 - Create a random number from 1 to 6 for each die

var die1 = Math.floor((Math.random()*6)+1); // creates number 1 to 6 for 1st die.
var die2 = Math.floor((Math.random()*6)+1); // creates number 1 to 6 for 2nd die.

// STEP 3 - Replace both dice images 

document.getElementsByTagName("img")[0].setAttribute("src", "images/dice" + die1 + ".png"); // gets die 1 image and replaces it
document.getElementsByTagName("img")[1].setAttribute("src", "images/dice" + die2 + ".png"); // gets die 2 image and replaces it

//STEP 3 - Replace the 'winner' message based on the two dice values

if (die1 === die2) {                                                // if both dice are equal...
    document.querySelector("h1").innerHTML = "Draw!";               // h1 = 'Draw!'
} else if (die1 > die2) {                                           // if die 1 is highest...
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";   // h1 = '[flag emoji] Player 1 Wins!'
} else {                                                            // if die 2 is highest...
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";   // h1 = 'Player 2 Wins! [flag emoji]'
}




// VERSION TWO BELOW BEFORE REFACTORING 

// STEP 1 - Create a random number from 1 to 6 for each die

var die1 = Math.floor((Math.random()*6)+1); // creates number 1 to 6 for 1st die.
var die2 = Math.floor((Math.random()*6)+1); // creates number 1 to 6 for 2nd die.

//STEP 2 - Create a new variable for 'winner' message based on the two dice values

if (die1 === die2) {                            // if both dice are equal...
    var winner = "Draw!";                       // new variable 'winner' = 'Draw!'
} else if (die1 > die2) {                       // if die 1 is highest...
    var winner = "&#128681; Player 1 Wins!";    // new variable 'winner' = '[flag emoji] Player 1 Wins!'
} else {                                        // if die 2 is highest...
    var winner = "Player 2 Wins! &#128681;";    // new variable 'winner' = 'Player 2 Wins! [flag emoji]'
}

// STEP 3 - Replace both dice images and the H1 message

document.getElementsByTagName("img")[0].setAttribute("src", "images/dice" + die1 + ".png"); // gets die 1 image and replaces it
document.getElementsByTagName("img")[1].setAttribute("src", "images/dice" + die2 + ".png"); // gets die 2 image and replaces it
document.querySelector("h1").innerHTML = winner; // replace H1 text with the 'winner' variable



// BELOW IS MY ORIGINAL CODE BEFORE UNDERSTANDING THAT THE ABOVE COMMANDS CAN BE GIVEN AS VARIABLES OR CONCATENATED VARIABLES AND TEXT. 

// var die1 = Math.floor((Math.random()*6)+1);
// var die2 = Math.floor((Math.random()*6)+1);
// if (die1 === die2) {
//     var winner = 0;
// } else if (die1 > die2) {
//     var winner = 1;
// } else {
//     var winner = 2;
// }
// if (die1 === 1) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice1.png");
// } else if (die1 === 2) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice2.png");
// } else if (die1 === 3) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice3.png");
// } else if (die1 === 4) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice4.png");
// } else if (die1 === 5) {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice5.png");
// } else {
//     document.getElementsByTagName("img")[0].setAttribute("src", "images/dice6.png");
// }
// if (die2 === 1) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice1.png");
// } else if (die2 === 2) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice2.png");
// } else if (die2 === 3) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice3.png");
// } else if (die2 === 4) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice4.png");
// } else if (die2 === 5) {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice5.png");
// } else {
//     document.getElementsByTagName("img")[1].setAttribute("src", "images/dice6.png");
// }
// if (winner === 1) {
//     document.querySelector("h1").innerHTML = "&#128681; Player 1 Wins!";
// } else if (winner === 2) { 
//     document.querySelector("h1").innerHTML = "Player 2 Wins! &#128681;";
// } else {
//     document.querySelector("h1").innerHTML = "Draw!";
// }
 