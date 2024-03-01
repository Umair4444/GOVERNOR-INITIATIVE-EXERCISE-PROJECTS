console.log("THE START");
// array
let fav_friends: string[] = [
  "Ahsan",
  "Usman",
  "Qasim",
  "Brock Lesnar",
  "leo",
  "taurus",
];
console.log(fav_friends);

console.log("accessing array by indexing \n");

console.log(fav_friends[0]);
console.log(fav_friends[1]);
console.log(fav_friends[2]);
console.log(fav_friends[3]);
console.log(fav_friends[4], "\n");

console.log(
  "_____________________________________________________________________________"
);

// greeting
console.log("accessing array by for loop\n");

for (let i = 0; i < fav_friends.length; i++) {
  console.log(`hello, ${fav_friends[i]} you are welcome to my array `);
}

console.log(
  "________________________________________________________________________"
);

let travelling_vechile: string[] = [
  "car",
  "bike",
  "helicopter",
  "tuktuk",
  "cycle",
  "bus",
];

for (let i = 0; i < travelling_vechile.length; i++) {
  console.log(`I use "${travelling_vechile[i]}" everyday to go to my school `);
}

console.log(
  "______________________________________________________________________________"
);
// original guest array
const guest_list: string[] = ["asim", "danial", "hina", "alexa", "jennfer"];
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `hello, ${guest_list[i]} you are invited to the dinner please be on time`
  );
}
console.log(
  "______________________________________________________________________________"
);
// removing and inviting new person "Mariam"
let remove_guest = (guest_list[2] = "Mariam");
console.log(guest_list);
console.log(remove_guest);

console.log(
  "______________________________________________________________________________"
);
// new guest list
for (let i = 0; i < guest_list.length; i++) {
  console.log(
    `hello, ${guest_list[i]} you are invited to the dinner please be on time`
  );
}

console.log(
  "______________________________________________________________________________"
);
// meesage to remove and newly invite guest
console.log(`sorry ${remove_guest} you are uninvited`);
console.log();

console.log(`hello ${guest_list[2]} you are now invited`);

console.log(
  "______________________________________________________________________________"
);
// add 3 members to guest list
guest_list.push("Tom Cruise", "Salman", "Sahir Lodhi");
console.log(guest_list);

console.log(
  "______________________________________________________________________________"
);
// printing new guest list
for (let i = 0; i < guest_list.length; i++) {
  console.log(`Good news to ${guest_list[i]} we just accquire a large table`);
}

console.log(
  "______________________________________________________________________________"
);
// add 1 member in start of array
guest_list.unshift("Leonardo");
console.log(guest_list);

console.log(
  "______________________________________________________________________________"
);

console.log(guest_list.length);

console.log(
  "______________________________________________________________________________"
);
// passing array in middle
guest_list.splice(5, 0, "Mehak");
console.log(guest_list);

console.log(
  "______________________________________________________________________________"
);
// append to the last in an array
guest_list.push("laraib");

// senting message to guest list
for (let i = 0; i < guest_list.length; i++) {
  console.log(`hello, ${guest_list[i]} you are invited to the party`);
}

console.log(
  "______________________________________________________________________________"
);

console.log("you can invite only two people for dinner.");
// poping and senting message to guest
let guest_list_1 = console.log(
  `Sorry,your invitation is cancelled ${guest_list.pop()}`
);
let guest_list_2 = console.log(
  `Sorry,your invitation is cancelled ${guest_list.pop()}`
);
let guest_list_3 = console.log(
  `Sorry,your invitation is cancelled ${guest_list.pop()}`
);
let guest_list_4 = console.log(
  `Sorry,your invitation is cancelled ${guest_list.pop()}`
);
let guest_list_5 = console.log(
  `Sorry,your invitation is cancelled ${guest_list.pop()}`
);
let guest_list_6 = console.log(
  `Sorry,your invitation is cancelled ${guest_list.pop()}`
);
let guest_list_7 = console.log(
  `Sorry,your invitation is cancelled ${guest_list.pop()}`
);
let guest_list_8 = console.log(
  `Sorry,your invitation is cancelled ${guest_list.pop()}`
);
let guest_list_9 = console.log(
  `Sorry,your invitation is cancelled ${guest_list.pop()}`
);

console.log(guest_list);

console.log(
  "______________________________________________________________________________"
);

console.log(`you are stil invited, ${guest_list[0]}`);
console.log(`you are stil invited, ${guest_list[1]}`);

console.log(
  "______________________________________________________________________________"
);
// Making my array empty
let empty_list = (guest_list.length = 0);
console.log(guest_list);

console.log(
  "______________________________________________________________________________"
);
let fav_place: string[] = [
  "Taj Mahal",
  "Northern Lights",
  "Safari",
  "Eifel Tower",
  "Burj Al Arab",
  "Burj Khalifa",
];
console.log(fav_place);

console.log(
  "______________________________________________________________________________"
);
// sort in alphabetical order
let a = console.log(fav_place.sort());
console.log(
  "______________________________________________________________________________"
);

//original array
console.log(fav_place);
console.log(
  "______________________________________________________________________________"
);

//reverse array
let b = console.log(fav_place.reverse());

console.log(
  "______________________________________________________________________________"
);

//original array
console.log(fav_place);

console.log(
  "______________________________________________________________________________"
);
// reverse the array
console.log(fav_place.reverse());
console.log(fav_place.reverse());

console.log(
  "______________________________________________________________________________"
);
// alphabetical order from a-z
console.log(fav_place.sort());
console.log("original array change", fav_place);

// alphabetical order from z-a
console.log(fav_place.sort().reverse());

console.log("original array change", fav_place);

console.log(
  "______________________________________________________________________________"
);
console.log(guest_list.length);

console.log(
  "______________________________________________________________________________"
);

let countries: string[] = [
  "U.S.A",
  "U.K",
  "PAKISTAN",
  "CHINA",
  "AUSTRALIA",
  "IRAN",
  "SAUDIA ARABIA",
];
console.log(countries);

console.log(
  "______________________________________________________________________________"
);

// Create an array of movie titles
let movieTitles: string[] = [
  "The Shawshank Redemption",
  "Inception",
  "The Godfather",
  "The Matrix",
  "The Dark Knight",
];

// Print the list of movie titles
console.log("List of Movie Titles:", movieTitles);

// Create TypeScript objects for each movie
let movies: { title: string; director: string; year: number }[] = [
  { title: "The Shawshank Redemption", director: "Frank Darabont", year: 1994 },
  { title: "Inception", director: "Christopher Nolan", year: 2010 },
  { title: "The Godfather", director: "Francis Ford Coppola", year: 1972 },
  { title: "Pulp Fiction", director: "Quentin Tarantino", year: 1994 },
  { title: "The Dark Knight", director: "Christopher Nolan", year: 2008 },
];

// Print the list of movie objects
console.log("List of Movie Objects:", movies);
console.log("List of Movie at index 0 is :", movies[0]);
console.log("List of Movie at index 0 is with title :", movies[0].title);

console.log(
  "______________________________________________________________________________"
);

// console.log(movieTitles[6]); // error because only 0-5 index are allowed
console.log(movieTitles[2]);

console.log(
  "______________________________________________________________________________"
);

// let movieTitles: string[] = [
//   "The Shawshank Redemption",
//   "Inception",
//   "The Godfather",
//   "The Matrix",
//   "The Dark Knight",
// ];

// searching movie in loop
for (let i = 0; i < movieTitles.length; i++) {
  console.log(
    movieTitles[i],
    "is",
    movieTitles[i] == "The Shawshank Redemption"
  );
  console.log(movieTitles[i], "is", movieTitles[i] == "Inception");
  console.log(movieTitles[i], "is", movieTitles[i] == "The Godfather");
  console.log(movieTitles[i], "is", movieTitles[i] == "The Matrix");
  console.log(movieTitles[i], "is", movieTitles[i] == "The Dark Knight");
}
console.log(
  "______________________________________________________________________________"
);

let equality_check_foods: string = "Biryani";

console.log(equality_check_foods == "Kabab"); // false
console.log(equality_check_foods == "Biryani"); // true
console.log(equality_check_foods != "Kabab"); // true
console.log(equality_check_foods != "Biryani"); // false

console.log(
  "______________________________________________________________________________"
);

console.log(equality_check_foods == "biryani"); // false because of differenecc in upper and lower case

console.log(
  "______________________________________________________________________________"
);

let numa: number = 5;
let numb: number = 8;

let first_check = console.log(numa > numb);
let second_check = console.log(numa < numb);
let three_check = console.log(numa >= numb);
let fourth_check = console.log(numa <= numb);
let fifth_check = console.log(numa == numb);
let sixth_check = console.log(numa != numb);
let seventh_check = console.log(6 != 6);
let eighth_check = console.log(6 == 6);

console.log(
  "______________________________________________________________________________"
);
// let numa: number = 5;
// let numb: number = 8;
// console.log(first_check && second_check); // throws error
console.log(numa > numb && numa < numb); // false
console.log(numa < numb && numa > numb); // false
console.log(numa > numb || numa < numb); //true
console.log(numa < numb || numa > numb); //true
console.log(!(numa > numb)); //true
console.log(!(numa < numb)); //false

console.log("______________________________________________________");

let mountain_array: string[] = ["K2", "EVEREST", "FUJI", "HIMALYAS"];
let found: boolean = false;

// // // print all value to check found and not found
// for (let i=0;i<mountain_array.length;i++){
//   // console.log(mountain_array[i] == "FUJI"); // WILL WORK SAME AS IF ELSE STATEMENT
// if(mountain_array[i] === "FUJI") {
//   console.log("FOUND IT");
// }else{console.log("NOT FOUND");}
// }

// NOW ONLY WILL PRINT FOUND OR NOT FOUND ONCE

for (let i = 0; i < mountain_array.length; i++) {
  if (mountain_array[i] === "K2") {
    found = true;
  }
}

if (found) {
  console.log("FOUND IT");
} else {
  console.log("NOT FOUND");
}
found = false; // resetting value to false BEACAUSE FOUND IS SET TO TRUE AFTER ABOVE OPERATION
for (let i = 0; i < mountain_array.length; i++) {
  if (mountain_array[i] === "K3") {
    found = true;
  }
}

if (found) {
  console.log("FOUND IT");
} else {
  console.log("NOT FOUND");
}
console.log(
  "______________________________________________________________________________"
);
