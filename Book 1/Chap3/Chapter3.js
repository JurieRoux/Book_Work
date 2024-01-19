// let myTopThreeDinosaurs = ["T-Rex", "Velociraptor", "Stegosaurus"];
// console.log (myTopThreeDinosaurs);

// let dinosaurs = 
//     [   "T-Rex", 
//         "Velociraptor", 
//         "Stegosaurus", 
//         "Triceratops", 
//         "Brachiosaurus", 
//         "Pteranodon", 
//         "Apatosaurus", 
//         "Diplodocus", 
//         "Compsognathus"
//     ];
// dinosaurs[0] = "Tyrannosaurus Rex";
// console.log (dinosaurs);

// console.log (dinosaurs[dinosaurs.length-1]);

// console.log (dinosaurs[dinosaurs.length-1]);
// console.log (dinosaurs.indexOf("Diplodocus"));
// dinosaurs[0] = "Tyrannosaurus Rex";
// console.log (dinosaurs);

// let golfBalls = [];
// golfBalls[0] = "Titleist";
// golfBalls[1] = "Taylormade";
// golfBalls[2] = "Callaway";
// golfBalls[3] = "Srixon";
// golfBalls[4] = "Mizuno";
// golfBalls[10] = "Wilson";
// console.log (golfBalls);

// let dinosaursAndNumbers = [3, "dinosaurs", ["triceratops", "stegosaurus", 3627.5], 10];
// console.log (dinosaursAndNumbers[2][1]);
// console.log (dinosaursAndNumbers[3]);

// let maniacs = ["Yakko", "Wakko", "Dot"];
// console.log (maniacs[0]);
// console.log (maniacs[1]);
// console.log (maniacs[2]);
// console.log (maniacs [maniacs.length-1]);
// console.log (maniacs.length-1);

// let animals = [];
//     animals.push("Cat");
//         console.log (animals);
//     animals.push("Dog");
//         console.log (animals);
//     animals.push("Llama");
//         console.log (animals);
//         console.log (animals.length);
//     animals.unshift("Monkey");
//     animals.unshift("Polar Bear");
//         console.log (animals);

// let lastAni = animals.pop();
//         // console.log (lastAni);
//         console.log (animals);
// let firstAni = animals.shift();
//         // console.log (firstAni);
//         console.log (animals);



// // console.log (animals);
// // let numberOfAnimals = animals.unshift ("Polar Bear");
// // console.log ("There are", numberOfAnimals, "animals in my array");
// // let lastAnimal = animals.pop();
// // console.log (animals);
// // console.log (lastAnimal);
// // let firstAnimal = animals.shift();
// // console.log (animals);
// // console.log (firstAnimal);

// let furryAnimals = ["Alpaca", "Ring-tailed Lemur", "Yeti"];
//     console.log (furryAnimals);

//  let scalyAnimals = ["Boa", "Godzilla"];
//     console.log (scalyAnimals);

//  let featherAnimals = ["Dove", "Parrot"];
//     console.log (featherAnimals);

//  let allAnimals = furryAnimals.concat(scalyAnimals, featherAnimals);
//     console.log (allAnimals);

// let colors = ["red", "green", "blue"];
// console.log (colors.indexOf("blue"));
// console.log (colors.indexOf("green"));
// colors.indexOf("green");
// console.log (colors[2]);
// console.log (colors.indexOf("pink"));

// let insects = ["Bee", "Ant", "Bee", "ant", "Bee", "Ant"];
// console.log (insects.indexOf("Bee"));
// console.log (insects.indexOf("Bee",3));

// let boringAnimals = ["Sloth", "Duck", "Fish", "Lizard"];
// console.log (boringAnimals.join(" | "));

// let myNames = ["Nicholas" , "Andrew" , "Maxwell" , "Morgan" ];
// console.log (myNames.join(","));


//  let landmarks = [];
//  landmarks.push("My house");
//  landmarks.push("Front path");
//  landmarks.push("Flickering streetlamp");
//  landmarks.push("Leaky fire hydrant");
//  landmarks.push("Fire station");
//  landmarks.push("Cat rescue center");
//  landmarks.push("My old school");
//  landmarks.push("My friend's house");
// console.log (landmarks);
// console.log (landmarks.pop());
// console.log (landmarks.pop());
// console.log (landmarks.pop());
// console.log (landmarks.pop());
// console.log (landmarks.pop());
// console.log (landmarks.pop());
// console.log (landmarks.pop());
// console.log (landmarks.pop());

// console.log (Math.random());
// console.log (Math.random() *10);
// console.log (Math.floor(82528.98925629));
// console.log(Math.floor (Math.random() * 5 ) + 1 );


// let randomWords = ["Blue", "Red", "Green", "Yellow", "Pink", "Brown"];
// let randomIndex = Math.floor (Math.random() * randomWords.length);
// console.log (randomWords [randomIndex]);

// let Colours = ["Red", "Blue", "Yellow", "Green", "Orange", "Pink"];
// let randomIndex = Math.floor (Math.random() * Colours.length);
// console.log ("The colour is", Colours [randomIndex]);

// let phrases = [
//     "That sounds good",
//     "Yes, you should definitely do that",
//     "I'm not sure that's a great idea",
//     "Maybe not today",
//     "Computer says no."
//     ];
//    console.log ("Should you work today? " + phrases[Math.floor(Math.random() * phrases.length)]);

// // Define initial Variable
// let randomBodyParts = ["Face", "Nose", "Hair"];
// let randomAdjectives = ["Smelly", "Boring", "Stupid"];
// let randomWords = ["Fly", "Marmot", "Stick", "Monkey", "Rat"];

// // Define Variable function
// let randomBodyPart = randomBodyParts[Math.floor(Math.random() * randomBodyParts.length)];
// let randomAdjective = randomAdjectives[Math.floor(Math.random() * randomAdjectives.length)];
// let randomWord = randomWords[Math.floor(Math.random() * randomWords.length)];

// // Create final Variable
// let randomInsult = "Your " + randomBodyPart + " is like a " + randomAdjective + " " + randomWord + " :)";
// console.log (randomInsult);

let randomMoves = ["walk", "smile", "dancing", "running"];
let randomAdjectives = ["alluring", "interesting", "dull"];
let action = ["silly" , "boring"];
let randomWords = ["Sloth", "Monkey", "Mongoose",];

randomMoves = randomMoves[Math.floor(Math.random() * randomMoves.length)];
let randomAdjective = randomAdjectives[Math.floor(Math.random()*randomAdjectives.length)];
let randomWord = randomWords[Math.floor(Math.random()*randomWords.length)];
let rAction = action[Math.floor(Math.random()*action.length)]
let randomInsult = "Your " + randomMoves + " is as " + randomAdjective + " " + "as that of a " + rAction + " " + randomWord + " :) ";

// let randomInsult = ["Your",randomMoves,"is as",randomAdjective,"as a",randomWord +"!"].join(" ");
console.log (randomInsult);

//  Challenge 4
let numbers = [3, 2, 1];
console.log (numbers.join(" is bigger than "));
