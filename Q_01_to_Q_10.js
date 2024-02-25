"use strict";
let person_name = "Umair Ali Khan";
console.log("hello", person_name, "How are you doing and great experience learning programming");
console.log("_______________________________________________________________________________");
let my_name = "UmAir AlI KhAn";
console.log(`hello, ${my_name.toLowerCase()}, how are you doing`);
console.log(my_name);
console.log(my_name.toLowerCase()); // convert to lowercase
console.log(my_name.toUpperCase()); // convert ot uppercase
// convert to uppercase through function
function convert_to_string(input_str) {
    return input_str.toUpperCase();
}
console.log(convert_to_string(my_name)); // pass arg here for function to perform
// title case
console.log("_______________________________________________________________________________");
console.log(`Thomas Edison once said, "I not only discovered a way to light a bulb but rather discovered 100 ways on how not to light a bulb"`);
const famous_personality = "Thomas A. Edison";
const per_messsage = "Many of life's failures are people who did not realize how close they were to success when they gave up.";
console.log(`${famous_personality} said, "${per_messsage}"`);
console.log("_______________________________________________________________________________");
const personality = "Gandhi";
const messsage = "You must be the change you wish to see in the world";
console.log(`${personality} said,"${messsage}" `);
console.log("_______________________________________________________________________________");
// let stringWithTab: string = "This is a\ttab-separated string.";
// let stringWithNewline: string = `This is a\nstring with a newline.`;
// console.log(stringWithTab);
// console.log(stringWithNewline);
let person_Name_With_Whitespace = "\t       John Doe         \t\n ";
// Print the name with whitespace
console.log("Name with whitespace:", person_Name_With_Whitespace);
// Strip whitespace from the name
let strippedName = person_Name_With_Whitespace.trim();
// Print the stripped name
console.log("Stripped name:", strippedName);
console.log("Stripped name:", strippedName);
console.log("_______________________________________________________________________________");
console.log(`5 + 3 = ${5 + 3}`); // addition
console.log(`11 - 3 = ${11 - 3}`); // subtraction
console.log(`64 / 8 = ${64 / 8}`); // division
console.log(`4 * 2 = ${4 * 2}`); // multiplication
console.log("_______________________________________________________________________________");
console.log(5 + 3);
console.log("_____________________________________");
console.log(13 - 5);
console.log("_____________________________________");
console.log(80 / 10);
console.log("_____________________________________");
console.log(4 * 2);
console.log("_____________________________________");
let fav_num = 44; // my favourite number
let private_messsage = `my favourite number is ${fav_num}`;
console.log(private_messsage); /* printing my message */
console.log("_______________________________________________________________________________");
