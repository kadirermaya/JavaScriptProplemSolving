"use strict"

let string = document.getElementById("string").innerHTML = "Hello";
let reversedString = document.getElementById("reversedString").innerHTML = reverseString(string);


// takes a string and reverse it
function reverseString(string)
{
    var reversed="";
    for (let index = string.length-1; index >= 0; index--) 
    {
        reversed += string[index];
    }
    return reversed;
}