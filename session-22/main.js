// Easy (7 Exercise)

// 1. Pokémon Battle – Function Basics

// function compareAttack(pokemon1, attack1, pokemon2, attack2) {
//     if (attack1 > attack2) {
//         console.log(`${pokemon1} is stronger!`);
//     } else {
//         console.log(`${pokemon2} is stronger`);
//     }
// }
// compareAttack("Pikachu", 55, "Charizard", 84);



// 2. Hogwarts Spell Casting – Function Parameters

// function castSpell(spell, wizard) {
//     console.log(`Wizard casts Spell ${spell}`);
// }
// castSpell("Expelliarmus", "Hermione");



// 3.  One Piece Bounty Calculator – Return Values

// function calculateBaunty(currentBaunty, increase) {
//     return currentBaunty + increase;
// }
// let result = calculateBaunty(1_500_000_000, 500_000_000);
// console.log(result);



// 4.  One Piece Bounty Calculator – Return Values

// function trainJedi(name, strength = 50) {
//     console.log(`${name} has ${strength} power`);
// }
// trainJedi("Jedi");



// 5. Gollum’s Precious – String Manipulation

// function gollumSays(phrase) {
//     return `${phrase}... ${phrase}... ${phrase}`;
// }
// let goll = gollumSays("My precious");
// console.log(goll);



// 6. Super Mario Power-Up – Function Expressions

// function powerUp(jumpHeight) {
//     jumpHeight = jumpHeight * 2;
//     console.log(jumpHeight);
// }
// powerUp(5);



// 7. Naruto’s Shadow Clone Jutsu – Arrow Functions

// let shadowClon = (count) => count * 5;
// let newCount = shadowClon(10);
// console.log(newCount);



// Medium (4 Exercises)

// 8. Sorting the Sorting Hat – Callback Functions

// function sortStudent(name, callBack) {
//     console.log(`Sorting ${name} into ... `);
//     function callBack() {
//         ("Gryffindor", "Slytherin", "Ravenclaw", "Hufflepuff");
//     }
// }
// sortStudent(("Harry", () => "Gryffindor"));
// console.log(sortStudent);



// 9. Infinity Gauntlet – Function Scope

// function snapFingers() {
//     let stones = 6;
//     function chackStones() {
//         console.log( "Thanos has 6 stones. The universe trembles!")
//     }
//     chackStones(stones)
// }
// console.log(snapFingers);


// 10. Time-Turner – Function Hoisting

function turnBackTime() {
    console.log( "Going back in time!");
}
function Hoisting(params) {
    
}



// 11. Batman’s Secret Identity – Function Closures

// function batman() {
//     function batman2() {
//         console.log(I am Batman);
//     }
// }



// 12. The Enchanted Mirror – Higher-Order Functions

function magicMirror(magic, transformFunction) {
    
}