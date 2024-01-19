// ** LONG WAY**
// let ourFirstFunction = function () {
//     console.log("Hello world!");
//     };

//  ***EFFICIENT WAY 4 FUNCTIONS***
// ourFirstFunction();

// function ourFirstFunction() {
//     console.log("Hello world!");
// }

// sayHello ("Jurie");

// function sayHello (name) {
//     console.log ("Hello " + name);
// }


// drawCats(8);
// function drawCats(howManyTimes) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " =^.^=");
//     }
// }

// function printPlenty (howManyTimes, whatToDraw) {
//     for (let i = 0; i < howManyTimes; i++) {
//         console.log(i + " " + whatToDraw);
//     }
// }
// printPlenty(10, ":)" );

// function double(number) {
//     return number * 2;
// }
// console.log(double(3));
// console.log(double(2) + double(5));

// // Spacing helps reading
// double( double ( double(3) ) );

// function pickRandomWord(wordMix) {
//     let word = wordMix[Math.floor(Math.random() * wordMix.length)];
//     return word;
// }
// function genRandomInsult() {
//     let randomBodyParts = ["Face", "Nose", "Hair"];
//     let randomAdjectives = ["Smelly", "Boring", "Stupid"];
//     let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

//     let randomString = "Your " + pickRandomWord(randomBodyParts) + " is like a " + pickRandomWord(randomAdjectives) + " " + pickRandomWord(randomWords) + "!";
//     console.log(randomString);
// }
// genRandomInsult();

// function fifthLetter (name){
//     if (name.length < 5) {
//         return
//     }
//     return "The fifth letter of your name is " + name[4] + ".";
// }
// console.log (fifthLetter("Jurie"));

// function medalForScore (score){
//     if (score < 3) {
//         return "Bronze";
//     }
//     if (score < 7) {
//         return "Silver";
//     }
//     return "Gold"
// }
// let score = prompt ("What is your score? ");
// alert (medalForScore(score));

// **Challenge 1*****
function add(num1, num2) {
    return num1 + num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(add(multiply(36325, 9824), 777));

// **Challenge Two**
// function areArSame(array1, array2) {
//     if (array1.length !== array2.length) {
//         return false;
//     }
//     for (let i = 0; i < array1.length; i++) {
//         if (array1[i] !== array2[i]) {
//             return false;
//         }
//     }
//     return true
// }
// console.log (areArSame([1,2,3], [4,5,6]));
// console.log (areArSame([1,2,3], [1,2,3]));
// console.log (areArSame([1,2,3], [1,2,3,4]));