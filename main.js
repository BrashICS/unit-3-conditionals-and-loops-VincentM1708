/**
 * Unit 3 - Conditionals and Loops
 * ICS3 - Mr. Brash 🐿️
 * 
 * For this unit, Mr. Brash is trying something different. Each lesson will
 * be in this one repository, separated in the Lessons folder.
 * 
 * If you run into Git or Github issues, call Mr. Brash over.
 **/ 


'use strict';

/*** Event Listeners ***/
document.getElementById("gamestart").addEventListener("click", game_start)


/*** Functions ***/

// A very accurate rounding function
function round(value, decimals) {
    let multiplier = 10**decimals;
    return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
}

// Get a random number from min to max
function randInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



function game_start() {
    let name = prompt("A haunted tavern keeper asks for your name as you enter...🎃");
    alert("Welcome " + name + " to my haunted tavern please enjoy your evening.");

    let conversation = prompt("You glance over at the tavern keeper and he offers you a drink do you, drink from the Enchanted Goblet(1) or decline and go into another room(2).")

    if (conversation == 1) {
        enchant_goblet()
    }

    else if (conversation == 2) {
        room_choice()
    }
}

function enchant_goblet() {
    alert ("You drank the goblet and for a short moment you were the most powerful person in the universe...... Unfortunately you couldn't withstand it and died instantly.")
}


function room_choice() {
    alert("You politely decline the tarvern keep and make your way into another room.")
    prompt("Which room do you go into bathroom(1) upstairs(2) back outside(3)")
}