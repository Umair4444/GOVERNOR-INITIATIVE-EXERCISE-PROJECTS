// let foods = ["bir", "kabab", "fish"]; // doesnot work
// let ok = foods.includes("kabab");
// console.log(ok); // error
// ALIEN GAME QUESTION  NO :- 25
var alien_color1 = "green";
var alien_color2 = "red";
var alien_color3 = "yellow";
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
var favorite_fruits = ["Apple", "Orange", "Mango"];
console.log(favorite_fruits);
for (var i = 0; i < favorite_fruits.length; i++) {
    if (favorite_fruits[i] === "mango") {
        console.log("You really like bananas!");
    }
    if (favorite_fruits[i] === "Apple") {
        console.log("You really like apples!");
    }
    if (favorite_fruits[i] === "strawberry") {
        console.log("You really like strawberries!");
    }
    if (favorite_fruits[i] === "Orange") {
        console.log("You really like oranges!");
    }
    if (favorite_fruits[i] === "Mango") {
        console.log("You really like kiwis!");
    }
}
console.log("__________________________________________________________________________");
// QUESTION NO :- 30  Hello Admin
var username = [
    "admin",
    "umair",
    "azhar",
    "qasim",
    "altaf",
    "imran",
    "zardari",
];
for (var i = 0; i < username.length; i++) {
    if (username[i] === "admin") {
        console.log("Hello ".concat(username[i], ", would you like to see a status report "));
    }
    else {
        console.log("hello ".concat(username[i], " you are now logged in"));
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
    for (var i = 0; i < username.length; i++) {
        if (username[i] === "admin") {
            console.log("Hello ".concat(username[i], ", would you like to see a status report "));
        }
        else if (username[i] !== "admin") {
            console.log("hello ".concat(username[i], " you are now logged in"));
        }
    }
}
console.log("__________________________________________________________________________");
// QUESTION 
var current_username = [
    "Umair",
    "Azhar",
    "imran",
    "Alexander",
    "JOHN",
];
var new_username = ["Umair", "uzair", "JOHN", "simran"];
function check_username(new_username) {
    for (var i = 0; i < new_username.length; i++) {
        var is_user_taken = false;
        for (var j = 0; j < current_username.length; j++) {
            if (new_username[i].toLowerCase() === current_username[j].toLowerCase()) {
                is_user_taken = true;
                break;
            }
        }
        if (is_user_taken) {
            console.log("The username '".concat(new_username[i], "' is already taken. Please choose another username."));
        }
        else {
            console.log("The username '".concat(new_username[i], "' is available."));
        }
    }
}
check_username(["JOHN"]);
check_username(["umair"]);
check_username(["Umair"]);
check_username(["selena"]);
console.log("____________________________________________________________________");
