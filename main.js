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

document.getElementById("menustart").addEventListener("click", menu)
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

    let conversation = prompt("You glance over at the tavern keeper and he offers you a drink do you, drink from the (1)Enchanted Goblet or decline and go into (2)another room.")

    if (conversation == 1) {
        enchant_goblet()
    }

    else if (conversation == 2) {
        room_choice()
    }
}

function enchant_goblet() {
    alert ("You drank the goblet and for a short moment you were the most powerful person in the universe...... Unfortunately you couldn't withstand it and died instantly... Maybe try again.")
}


function room_choice() {
    alert("You politely decline the tarvern keep and make your way into another room.")
    let room_option = prompt("Which room do you go into (1)bathroom (2)upstairs back (3)outside")

    if (room_option == 1) {
        bathroom()
    }

    else if (room_option == 2) {
        upstairs()
    }

    else if (room_option == 3) {
        back_outside()
    }
}

function bathroom() {
    alert ("You walked into a stall and sat on the toilet to handle your business but realized a zombie head was sitting in the toilet bowl and it scared you to death...🧟‍♂️ Maybe try again.")
}

function back_outside() {
    alert ("You leave the tavern but the guests yank you back inside and curse you into a halloween spirit to forever sit in the tarvern and drink Enchanted Goblets... Maybe try again.")
}


function upstairs() {
    alert ("You walk upstairs to see you could enter 2 unkown rooms or go into the attic or you could ignore all of that and leave.")
    let upstairs_choice = prompt("do you decide to (1)enter room, (2)room or (3)climb into the attic or completely ignore those options and go back down to (4)leave")

    if (upstairs_choice == 1) {
        first_room()
    }

    else if (upstairs_choice == 2) {
        second_room()
    }

    else if (upstairs_choice == 3) {
        Attic()
    }

    else if (upstairs_choice == 4) {
        back_outside()
    }
}

function first_room() {

}

function menu() {
// Setup the menu
let message = `Hi! Please make a selection:
1 - Play
2 - Options
3 - DLC
4 - Check for Updates
5 - Exit
`

let difficulty = `What difficulty would you like to try?
Easy(1)
Medium(2)
Hard(3)
`
// Prompt with the menu
let selection = Number(prompt(message));


if (selection == 1) {
    alert ("Alright let's play!")
    let difficulty_options = prompt (difficulty)

    if (difficulty_options == 1){
        alert ("You selected the easy route, your kind of boring")
    } 

    else if (difficulty_options == 2) {
        alert ("Most people choose medium.")
    }
    
    else if (difficulty_options == 3) {
        alert ("I like that you chose the challenging option!")
    }
}
}


