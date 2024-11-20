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
        room_option()
    }


    function room_option(){
    let room_choice = prompt("Which room do you go into (1)bathroom (2)upstairs back (3)outside")

    if (room_choice == 1) {
        bathroom()
    }

    else if (room_choice == 2) {
        upstairs()
    }

    else if (room_choice == 3) {
        back_outside()
    }
    }
}
function bathroom() {
    alert ("You walked into a stall and sat on the toilet to handle your business but realized a zombie head was sitting in the toilet bowl and it scared you to death...🧟‍♂️ Maybe try again.")
}

function back_outside() {
    alert ("You leave the tavern but the guests yank you back inside and curse you into a halloween spirit to forever sit in the tarvern and drink Enchanted Goblets... Maybe try again.")
}

function enchant_goblet(){
    alert ("You stink and drank the goblet and died instantly")
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
    //+ in front of prompt tells code answer is supposed to be a number
    let difficulty_options = +prompt (difficulty)

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

if (selection == 2) {}
}

//Part 1 is_number else practise
function is_number(num) {
    if (typeof num == "number") {
        return true 
    }
    else {
        return false
    }
        
}


//Part 2 Validate
function which_day(day) {
    

    if (which_day == 1)
        
        prompt ("Yes its sunday!")
        

    else if (which_day == 2)
        prompt ("Then the day of the week is monday!")
}



function countdown(start, stop) {
if (stop > start) {
        return -1
}

    else {
        let count = true;
        let amount = 0

            while (count){
                console.log(start)
                start --
                amount ++

                if (start == stop) {
                    return amount;
        
            }

        }
        
    }
}

function average(n) {
    let avg = 0;
    let count = 1;
    avg = +prompt(`Please enter a value ${count}/${n}`)

    while (count <= n) {
        avg += +prompt(`Please enter a value ${count}/${n}`)
        count++;
    }

    avg = round(avg / n, 1);
    console.log(`The average is ${avg}`)
}


//!= ! is equal to "not"
function random_until(min, max, stop){

    //ERROR CHECKING

    //check that max is greater than min if not return -1
    if (max <= min) {
    return -1;
    }
    //check that stop is between or equal to min and max. if not return -1
    if (stop > max || stop < min) {
        return -1;
    }
    //You could also put (max <= min) inside ^ this if statement with another || (max <= min)

    //GENERATE RANDOM NUMBER
    let rnd = randInt(min, max);

    //Check to see if its the stop value
    while (rnd != stop){
        console.log(rnd);
        rnd = randInt(min, max)
    }
    //return
    return stop;
}

function print_reverse(str){
    let current_letter = str.length -1
    let reverse_output = ""

    while (current_letter >= 0) {
        reverse_output += (str[current_letter])
        current_letter--
    }
    console.log(reverse_output)
}

function dragons_and_goblins(str) {
    let dragons = 0
    let goblins = 0
    let current_letter = 0

    while (current_letter < str.length) {
        let letter_now = (str[current_letter])
    

    if (letter_now == "d"){
        dragons++
    }

    if (letter_now == "g"){
        goblins++
    }

    current_letter++
    }
    console.log(`Dragons: ${dragons} Goblins: ${goblins}`)
}
    

function parrot() {
    let input;
    do {
        input = prompt(`Please enter some text or the word "quit" to exit: `)
        let output = (input.toUpperCase())

        if (input.toLowerCase() != "quit") {
            console.log (output) 
        }
            
    } while (input.toLowerCase() != "quit")

    console.log("GOODBYE! 🦜")
}

function negative_only() {
    let input;
    do {
        input = +prompt(`Please enter ONLY a negative number and absolutely nothing else`)

    }while (input >= -1)
        return input
}

//PART 1  Functions loops practice
function count_up(start, stop) {
    for (let min = start; min <= stop; min++) {
        console.log(min)
    }
}

function count_down(start, stop) {
    for (let max = start; max >= stop; max--) {
        console.log(max)
    }
}

function print_chars(str, step) {
    for (let start = 0; start < str.length -1; start += step) {
    console.log(str[start])
    }
}


// PART 2 Functions
function sum(n) {
    let adding = 0
    for (let start = 1; start <= n; start++) {
        adding += start
    }
    return adding
}

function count4(begin, end) {

    //establishing a divisible variable to be able to divide end count
    let divisible = 0

    //loop saying Start = begin input in function; then if the start(being) is greater or equal to the end input from function; then add 1 to start
    for (let start = begin; start <= end; start++) {

        //If the start variable is divisible by 4 and its true
        if (start % 4 == 0)

            //add 1 to divisible variable
            {divisible ++ 
        }
    }

    //if all of that happens return the divisible variable to console
    return divisible
}

function sum_divisible(n, x) {
    
}