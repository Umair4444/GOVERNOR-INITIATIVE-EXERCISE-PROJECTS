// let foods = ["bir", "kabab", "fish"]; // doesnot work
// let ok = foods.includes("kabab");
// console.log(ok);
// ALIEN GAME
function alien_game(color) {
    var alien_color = ["green", "yellow", "red"];
    for (var i = 0; i < alien_color.length; i++) {
        if (alien_color[i] === "green") {
            console.log("you just earned 5 points");
        }
    }
}
alien_game("red");
