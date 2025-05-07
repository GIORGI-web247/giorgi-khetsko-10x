//  Exercise 1: The Power of Variables and Operators 

// let gandalfTheGrey = 4;
// let dambldore = 5;

// gandalfTheGrey += 1
// dambldore -= 1

// if (gandalfTheGrey > dambldore) {
//     console.log("gandalfTheGray");
// } else {
// console.log("dambldore");
// }



// Exercise 2: The Treasure Chest of Data Types

// let goldCoins = 10;
// let treasureMap = "the best treasure";
// let cursedAmulet = true;

// console.log(typeof goldCoins);
// console.log(typeof treasureMap);
// console.log(typeof cursedAmulet);

// treasureMap = " second treasure";



// Exercise 3: The Potion Shop’s Price Calculator

// let firstHealthPotion = 20;
// let secondHealthPotion = 25;
// let thirdHealthPotion = 30;
// let firstManaPotion = 15;
// let secondManaPotion = 10;
// let total = firstHealthPotion + secondHealthPotion + thirdHealthPotion + firstManaPotion + secondManaPotion;

// if (total = total * 0.8) {
//     console.log("price after discount: " + total);
// } else {
// console.log("price: " + total); 
// }



// Exercise 4: The Brave Knight’s Inventory

// let swordPower = 6;
// let armor = "iron armor";
// let shield = true;

// console.log(`Knight is attaking with ${armor} his power is ${swordPower} and he has shield`);



// Exercise 5: The Bakery's Daily Earnings

// let breadPrice = 5;
// let breadSales = 4;
// let cakePrice = 3;
// let cakeSales = 2;
// let earningForDay = breadPrice * breadSales + cakePrice * cakeSales;

// console.log(`The bakery has earned ${earningForDay}`);



// Exercise 6: The Space Mission’s Fuel Check

// let fuelCapacity = 200;
// let fuelCurrent = 120;
// let enoughFuel = 200 * 0.8;

// if (fuelCurrent >= enoughFuel) {
//     console.log("ready for launch");
// } else {
// console.log("less Fuel");
// }



// Exercise 7: The Time Traveler’s Stopwatch (Updated)
// let currentDate = new Date();
// let currentYear = currentDate.getFullYear();
// let yearsJumped = 2013;
// let newYear = currentYear + yearsJumped;

// console.log(newYear);



// Exercise 8: The Wizard’s Spell Strength Test

// let spellOne = 4;
// let spellTwo = 2;
// let spellThree = 6;

// if (spellOne === spellTwo === spellThree) {
//     console.log("all spells are equal");
// } else if (spellOne > spellTwo > spellThree) {
//     console.log("spellOne is the stongest");
// } else if (spellTwo > spellOne > spellThree) {
//     console.log("spellTwo is the stongest");
// } else {
//     console.log("spellThree is the strongest")
// } 



// Exercise 9: The Haunted House Mystery

// let kitchenHasGhost = true;
// let livingRoomHasGhost = false;
// let isHouseSafe = kitchenHasGhost === false && livingRoomHasGhost === false;

// if (isHouseSafe) {
//     console.log("The house is safe! No ghosts in the Kitchen or Living Room.");
// } else {
//    console.log("Danger! The house is NOT safe. Ghosts detected!"); 
// }



// Exercise 10: The Robot’s Battery Check

// let batteryLevel = 50;
// let batteryIsAbove = batteryLevel > 30;

// if (batteryIsAbove) {
//     console.log("battery sufficient");
// } else {
//     console.log("low battery");
// }



// Exercise 11: The Dragon’s Health Meter

// let dragonHealth = 100;
// let knightAttackDamage = 25;
// let reduceDragonHealth = dragonHealth -= knightAttackDamage;

// console.log(`dragon health after attack ${reduceDragonHealth}`);



//  Exercise 12: The Speeding Race Car

// let speedLimit = 50;
// let carSpeed = 25;
// let carSpeedLimit = speedLimit += carSpeed;

// if (speedLimit > carSpeed) {
//      console.log("Speed Warning: You are going too fast!.");
//  } else {
//     console.log("Speed is okay.");
//  }

//  console.log(`carrent speed: ${carSpeed}`);



// Exercise 13: The Superhero Strength Test

//  let valiantStength = 95;
//  let malakorStangth = 90;
//  let strangthDiferences = Math.abs(valiantStength - malakorStangth);

//  if (valiantStength === malakorStangth) {
//      console.log("It's a strength stalemate! Neither Valiant nor Malakor can overpower the other.");
//  } else if (valiantStength > malakorStangth) {
//      if (strangthDiferences >= 10) {
//          console.log("Valiant triumphs decisively! Malakor is utterly outmatched!");
//      } else {
//          console.log("Valiant barely edges out! A close call victory against Malakor!");
//      }
// } else {
//      if (strangthDiferences >= 10) {
//         console.log("Malakor's power is overwhelming! Valiant is soundly defeated!");
//      } else {
//          console.log("Malakor narrowly prevails! A hard-fought win over Valiant!");
//     }
// }



// 14 The Tricky Treasure Hunt

// let hasTreasureMap = true;
// let foundAncientKey = false;
// let solvedRiddleScroll = true;
// let hasCompass = true;
// let isFullMoon = false;
// let canFindTreasure = false;

// if (hasTreasureMap) {
//     if ((foundAncientKey || (solvedRiddleScroll && hasCompass))) {
//        canFindTreasure = true; 
//     }
// } else {
//    if (foundAncientKey) {
//     canFindTreasure = true;
//    }
//    if (solvedRiddleScroll && hasCompass) {
//     canFindTreasure = true;
//    } 
// }
// if (canFindTreasure) {
//     console.log( "Success! Alex can find the legendary treasure!");
// } else {
//     console.log("Alas, Alex is missing crucial clues and cannot find the treasure yet.")
// }



// Exercise 15: The Ice Cream Shop’s Daily Sales with Volume Discount

// let iceCreamCone = 4;
// let conesSoldToday = 250;
// let iceCreamSandae = 8;
// let sandaesSoldToday = 120;

// let earningFromCone = iceCreamCone * conesSoldToday;
// let earningFromSandae = iceCreamSandae * sandaesSoldToday;

// let totalDailyEarnings = earningFromCone + earningFromSandae;
// let discount = 0;

// if (totalDailyEarnings >= 1000) {
//     discount = totalDailyEarnings * 0.05;
// }

// console.log(`Total earnings before discount: ${totalDailyEarnings}`);
// console.log(`The amount of discount applied: ${discount}`);
// console.log(`Final total daily earnings after discount: ${totalDailyEarnings - discount}`);
// console.log(`Volume Discount Applied: ${discount > 0 ? "YES" : "NO"}`);



// Exercise 16: Music Band Concert Profit Check 

// let ticketPrice = 20;
// let ticketsSold = 500;
// let concertCosts = 8000;

// let totalEarnings = ticketPrice * ticketsSold;
// let profit = totalEarnings - concertCosts;

// if (profit > 0) {
//     console.log(`Concert Profit: ${profit}`);
// } else {
//     console.log(`Concert did not cover costs. Earnings: ${profit} Costs: ${profit}`);
// }