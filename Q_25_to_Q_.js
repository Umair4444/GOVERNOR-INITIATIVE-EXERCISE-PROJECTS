"use strict";
// let foods = ["bir", "kabab", "fish"]; // doesnot work
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// let ok = foods.includes("kabab");
// console.log(ok); // error
// ALIEN GAME QUESTION  NO :- 25
let alien_color1 = "green";
let alien_color2 = "red";
let alien_color3 = "yellow";
function alien_game(alien_color) {
    if (alien_color === alien_color1) {
        console.log("you earned five points");
    }
    else if (alien_color === alien_color2) {
        console.log("you earned 10 points");
    }
    else if (alien_color === alien_color3) {
        console.log("you just earned 10 points");
    }
    else {
    }
}
alien_game("green");
alien_game("red");
alien_game("yellow");
alien_game("blue");
// let alien_color = ["green", "yellow", "red"]; // i cant access my desire output
// for (let i = 0; i < alien_color.length; i++) {
//   if (alien_color[i] === "green") {
//     console.log("you earned five points");
//     break;
//   } else if (alien_color[i] === "red") {
//     console.log("");
//     break;
//   } else if (alien_color[i] === "yellow") {
//     console.log("");
//     break;
//   }
// }
// cannot access array in function
// function alien_game1(alien_color: string) {
//   if (alien_color === "green") {
//     console.log("you earned five points");
//   } else if (alien_color === "red") {
//     console.log("");
//   } else if (alien_color === "yellow") {
//     console.log("");
//   } else {
//   }
// }
// alien_game1("green");
// alien_game1("red");
// alien_game1("blue");
console.log("__________________________________________________________________________");
// ALIEN GAME QUESTION  NO :- 26
function alien_game2(alien_color) {
    if (alien_color === alien_color1) {
        console.log("you earned 5 points");
    }
    else {
        console.log("You Earned 10 Points");
    }
}
alien_game2("green");
alien_game2("red");
alien_game2("yellow");
alien_game2("blue");
console.log("__________________________________________________________________________");
// ALIEN GAME QUESTION  NO :- 27
function alien_game3(alien_color) {
    if (alien_color === alien_color1) {
        console.log("you earned five points");
    }
    else if (alien_color === alien_color2) {
        console.log("you earned 10 points");
    }
    else if (alien_color === alien_color3) {
        console.log("you just earned 15 points");
    }
    else {
    }
}
alien_game("green");
alien_game("red");
alien_game("yellow");
alien_game("blue");
console.log("__________________________________________________________________________");
// QUESTION NO:- 28  stages of life
function stages_of_life(age) {
    if (age < 2) {
        console.log("the person is a baby");
    }
    else if (age >= 2 && age < 4) {
        console.log("the person is a toddler");
    }
    else if (age >= 4 && age < 13) {
        console.log("the person is a kid");
    }
    else if (age >= 13 && age < 20) {
        console.log("the person is a teenager");
    }
    else if (age >= 20 && age < 65) {
        console.log("the person is a adult");
    }
}
stages_of_life(29);
console.log("__________________________________________________________________________");
// QUESTION NO:- 29  FAVORITE FRUITS
let favorite_fruits = ["Apple", "Orange", "Mango"];
console.log(favorite_fruits);
for (let i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === "banana") {
        console.log("You really like bananas!");
    }
    if (favorite_fruits[i] === "Apple") {
        console.log("You really like apples!");
    }
    if (favorite_fruits[i] === "Strawberry") {
        console.log("You really like strawberries!");
    }
    if (favorite_fruits[i] === "Orange") {
        console.log("You really like oranges!");
    }
    if (favorite_fruits[i] === "Mango") {
        console.log("You really like mango!");
    }
}
console.log("__________________________________________________________________________");
// QUESTION NO :- 30  Hello Admin
let username = [
    "admin",
    "umair",
    "azhar",
    "qasim",
    "altaf",
    "imran",
    "zardari",
];
for (let i = 0; i < username.length; i++) {
    if (username[i] === "admin") {
        console.log(`Hello ${username[i]}, would you like to see a status report `);
    }
    else {
        console.log(`hello ${username[i]} you are now logged in`);
    }
}
console.log("__________________________________________________________________________");
// from previous question
// i will empty my array and print message "please add some users"
// // QUESTION NO :- 31  No Users
username = [];
if (username.length === 0) {
    console.log("please enter username to print log-in statement");
}
else {
    for (let i = 0; i < username.length; i++) {
        if (username[i] === "admin") {
            console.log(`Hello ${username[i]}, would you like to see a status report `);
        }
        else if (username[i] !== "admin") {
            console.log(`hello ${username[i]} you are now logged in`);
        }
    }
}
console.log("__________________________________________________________________________");
// QUESTION NO.32  LOG_IN_STATEMENT
let current_username = [
    "Umair",
    "Azhar",
    "imran",
    "Alexander",
    "JOHN",
];
let new_username = ["Umair", "uzair", "JOHN", "simran"];
function check_username(new_username) {
    for (let i = 0; i < new_username.length; i++) {
        let is_user_taken = false;
        for (let j = 0; j < current_username.length; j++) {
            if (new_username[i].toLowerCase() === current_username[j].toLowerCase()) {
                is_user_taken = true;
                break;
            }
        }
        if (is_user_taken) {
            console.log(`The username '${new_username[i]}' is already taken. Please choose another username.`);
        }
        else {
            console.log(`The username '${new_username[i]}' is available.`);
        }
    }
}
check_username(["JOHN"]);
check_username(["umair"]);
check_username(["Umair"]);
check_username(["selena"]);
console.log("____________________________________________________________________");
// QUESTION NO.33 ORDINAL NUMBERS
let my_number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// console.log(my_number[1]);
for (let i = 0; i < my_number.length; i++) {
    if (my_number[i] == 1) {
        console.log(`${my_number[i]}st`);
    }
    else if (my_number[i] == 2) {
        console.log(`${my_number[i]}nd`);
    }
    else if (my_number[i] == 3) {
        console.log(`${my_number[i]}rd`);
    }
    else {
        console.log(`${my_number[i]}th`);
    }
}
console.log("____________________________________________________________________");
// QUESTION NO.34 PIZZAS
let pizza_flavor = [
    "Arabian",
    "Paparoni",
    "Fajita",
    "B.B.Q",
    "Tikka",
];
for (let i = 0; i < pizza_flavor.length; i++) {
    console.log(`I like ${pizza_flavor[i]} pizza`);
}
// let my_favorite = pizza_flavor.map((food) => {
//   return food;
// });
console.log("I love eating pizza on weekend with my friends.", pizza_flavor[3], "is my favorite flavor and I can eat it everyday ");
console.log("____________________________________________________________________");
// QUESTION NO.35 ANIMALS
let my_pets = ["Dog", "Cat", "horse", "parrot"];
for (let i = 0; i < my_pets.length; i++) {
    const element = my_pets[i];
    console.log(element);
}
for (let j = 0; j < my_pets.length; j++) {
    console.log(`The ${my_pets[j]} is a very friendly animal`);
}
console.log("Any pet such as,", my_pets.toString(), "bring joy, companionship, and a sense of responsibility into our lives");
console.log("____________________________________________________________________");
// QUESTION NO.36 T-SHIRT
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let prompt = (0, prompt_sync_1.default)();
let shirt_size_input = prompt("enter your desired size : ");
let shirt_size = parseInt(shirt_size_input, 10);
let shirt_message = prompt("enter your message : ");
function Make_shirt(size, message) {
    console.log("your size is :", size, "and your message is :", message);
}
Make_shirt(shirt_size, shirt_message);
console.log("____________________________________________________________________");
// QUESTION NO.37 T-SHIRT
function Make_shirt_2(size = "large", message = "I love TypeScript") {
    console.log(`Your size is: ${size} and your message is: ${message}`);
}
// Make a shirt of any size with a different message
let shirt_size_input_2 = prompt("Enter your desired size: ");
// let shirt_size: string = shirt_size_input.toLowerCase(); // Convert to lowercase for case-insensitive comparison
// Make a large shirt with the default message
Make_shirt_2();
// Make a medium shirt with the default message
Make_shirt_2("medium");
let shirt_message_2 = prompt("Enter your message: ");
Make_shirt_2(shirt_size_input_2, shirt_message_2);
console.log("____________________________________________________________________");
// QUESTION NO.38 CITIES
//Cities: Write a function called describe_city() that accepts the name of
// a city and its country. The function should print a simple sentence, such as
// Karachi is in Pakistan. Give the parameter for the country a default value.
// Call your function for three different cities, at least one of which is not in the
// default country.
function describe_city(city, country = "Pakistan") {
    console.log(city, "is in", country);
}
describe_city("Karachi");
describe_city("islamabad");
describe_city("Lahore");
describe_city("London", "England");
describe_city("New York", "U.S.A");
console.log("____________________________________________________________________");
// QUESTION NO.39 CITY NAMES
//import promptSync from "prompt-sync";
//let prompt = promptSync();
let User_input_data = [];
for (let i = 0; i < 3; i++) {
    let city_name = prompt("your city name: ");
    let country_name = prompt("your country name: ");
    let city_country = (city_name, country_name) => {
        console.log(`"${city_name},${country_name}"`); // my format to show input by user
        return `${city_name}, ${country_name}`; // will return value outside loop
    };
    User_input_data.push(city_country(city_name, country_name)); // takes your input here as paramaeter and show in an array
}
console.log(User_input_data);
console.log("____________________________________________________________________");
function make_album(artist, name, track) {
    let my_info = {
        album_artist: artist,
        album_name: name,
        album_track: track,
    };
    console.log(my_info);
    return my_info;
}
make_album("Demilovato", "confident");
make_album("Becky G", "Shower");
make_album("Michael Jackson", "Dangerous", 1);
console.log("____________________________________________________________________");
// QUESTION NO.41 MAGICIANS
let magicians_names = [
    "Chris Angel",
    "David Blaine",
    "David Copperfield",
    "Merlin",
];
function show_magicians() {
    console.log(`${magicians_names}`);
}
// console array on a singel line
show_magicians();
// applying for each
function show_magicians_1(magician) {
    magician.forEach((magician) => {
        console.log(`${magician}`);
    });
    return magician;
}
console.log("****** using for each loop *******");
// console array using foreach loops
const original_arr = show_magicians_1(magicians_names);
console.log("____________________________________________________________________");
// QUESTION NO.42 GREAT MAGICIANS
let great_magicians = () => {
    let new_magician = [];
    for (let i = 0; i < magicians_names.length; i++) {
        console.log(`The Great ${magicians_names[i]}`);
        new_magician.push(`the great, ${magicians_names[i]}`);
    }
    return new_magician;
};
const new_arr = great_magicians();
console.log("____________________________________________________________________");
// QUESTION NO.43 UNCHANGED MAGICIANS
//my original array
console.log("original arr : ", original_arr);
// my new array with the great word added to arrays strings
console.log("new arr : ", new_arr);
console.log("____________________________________________________________________");
// QUESTION NO.44 SANDWICH
function sandwich(...orders) {
    const myorder = [];
    console.log(`"My Order is : ",${orders}`);
    myorder.push(...orders);
    return myorder;
}
let result_order = sandwich("Club Sandwich", " Grill Sandwich with Chesse", " Shahi Toast", " Chicken Sandwich");
console.log(result_order[2]);
console.log("____________________________________________________________________");
// QUESTION NO.44 CARS
function cars(manufacture, model, color, open_top) {
    let info = {
        Manufacturer: manufacture,
        Model: model,
        Color: color || "NO Preference",
        Roof_Top: open_top || false,
    };
    console.log(info);
}
cars("Ferrari", 2024);
cars("Bugati", 2023, "Black", false);
cars("Lamborghini", 2024, "Red", true);
