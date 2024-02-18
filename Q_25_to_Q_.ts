// let foods = ["bir", "kabab", "fish"]; // doesnot work

// let ok = foods.includes("kabab");
// console.log(ok);

// ALIEN GAME
function alien_game (color:string) {
    let alien_color: string[] = ["green", "yellow", "red"];
    
    for (let i = 0; i < alien_color.length; i++) {
      if (alien_color[i] === "green") {
        console.log("you just earned 5 points");
      }
    }
    }
    alien_game("red")