"use strict"

let string = document.getElementById("string").innerHTML = "Hello";
let reversedString = document.getElementById("reversedString").innerHTML = reverseString(string);


// 1.	Reverse a string
function reverseString(string) {
    let reversed = "";
    for (let index = string.length - 1; index >= 0; index--) {
        reversed += string[index];
    }
    return reversed;
}


//2.	Capitalize letter

let nonCapitalized = document.getElementById("capitalize").innerHTML = "hello world"
let capitalized = document.getElementById("capitalized").innerHTML = capitalizeFirstLetter(nonCapitalized);

function capitalizeFirstLetter(nonCapitalized) {
    let capitalized = "";
    for (let index = 0; index <= nonCapitalized.length - 1; index++) {
        if (index == 0) {
            capitalized += nonCapitalized[index].toUpperCase();
        }
        else if (nonCapitalized[index] === " ") {
            capitalized += " ";
            capitalized += nonCapitalized[index + 1].toUpperCase();
            index++;
        }
        else {

            capitalized += nonCapitalized[index];
        }
    }
    return capitalized;
}

//3.	Compress a string of characters

let nonCompressed = document.getElementById("nonCompressed").innerHTML = "aaabbbbbccccaacccbbbaaabbbaaa";
let compressed = document.getElementById("compressed").innerHTML = compressString(nonCompressed);

function compressString(nonCompressed) {

    let compressed = "";
    let counter = 1;
    let tempString = "";

    for (let index = 0; index <= nonCompressed.length; index++) {

        if (nonCompressed[index] == nonCompressed[index + 1]) {
            counter++;
            tempString += nonCompressed[index];
        }
        else if (nonCompressed[index] !== nonCompressed[index + 1]) {
            compressed += counter.toString();
            counter = 1;
            compressed += tempString[0];
            tempString = "";
        }
    }
    return compressed;
}

//4.	Palindrome

let userInput = document.getElementById("palindrome").innerHTML = ifWordPolindrome(getUserInput());

function ifWordPolindrome(userInput) {
    
    let downCounter = userInput.length-1;
    let result = "";
    for (let index = 0; index <= userInput.length-1; index++) {
        if(userInput[index] === userInput[downCounter])
        {
            result += userInput[downCounter];
            downCounter--;
        }
        
    }
            if (result == userInput){
                alert("Yayyyy Palindrome")
            }
            else{
                alert("it is not a Palindrome")
            }
    return userInput;
}

function getUserInput() {
    let userInput = window.prompt("Enter the word I can check if Palindrome.");
    return userInput;
}



function primeNumbers(){
    
    for (var counter = 0; counter <= 100; counter++) {

        var notPrime = false;
        for (var i = 2; i <= counter; i++) {
            if (counter%i===0 && i!==counter) {
                notPrime = true;
            }
        }
        if (notPrime === false) {
                    console.log(counter);
        }
    }
}
primeNumbers();
