"use strict"

let string = document.getElementById("string").innerHTML = "Hello";
let reversedString = document.getElementById("reversedString").innerHTML = reverseString(string);


// takes a string and reverse it
function reverseString(string)
{
    let reversed="";
    for (let index = string.length-1; index >= 0; index--) 
    {
        reversed += string[index];
    }
    return reversed;
}


//Capitalize the firs letter of each word

let nonCapitalized = document.getElementById("capitalize").innerHTML = "hello world" 
let capitalized = document.getElementById("capitalized").innerHTML = capitalizeFirstLetter(nonCapitalized);

function capitalizeFirstLetter(nonCapitalized){
    let capitalized = "";
    for (let index = 0; index <= nonCapitalized.length-1; index++) 
        {
            if(index == 0){
                capitalized += nonCapitalized[index].toUpperCase();
            }
            else if (nonCapitalized[index] === " "){
                capitalized += " ";
                capitalized += nonCapitalized[index + 1].toUpperCase();
                index++;
            }
            else{

                capitalized += nonCapitalized[index];
            }
        }
    return capitalized;
}