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
