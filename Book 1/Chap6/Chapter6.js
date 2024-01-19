
// let name = prompt ("What is your name?");
//     // Alert

// if (name.length > 5) {
// alert ("Hi "+ name + "! " + "Wow, you have a REALLY long name!");
// }
// else { alert ("Hi "+ name + "! " + "Wow, you have a short name.");
// }

    // Console
// console.log ("Hi " + name);
// if (name.length > 5) {
// console.log ("Wow, you have a REALLY long name!");
// }
// else { console.log ("Wow, you have a short name.");
// }

// let lemonChicken = confirm ("Do you have Lemon Chicken?");
// let beefWithBlackBean = confirm ("Do you have Beef with Blackbean?");
// let sweetAndSourPork = confirm ("Do you have Sweet and Sour Pork?");

// if (lemonChicken) {
// alert("Great! I'm having lemon chicken!");
// } 
// else if (beefWithBlackBean) {
// alert("I'm having the beef.");
// } 
// else if (sweetAndSourPork) {
// alert("OK, I'll have the pork.");
// } 
// else {
//     alert("Well, I guess I'll have rice then.");
//     }
    
    // let lemonChicken = false;
    // let beefWithBlackBean = true;
    // let sweetAndSourPork = false;
    
    // if (lemonChicken) {
    // console.log("Great! I'm having lemon chicken!");
    // } 
    // else if (beefWithBlackBean) {
    // console.log("I'm having the beef.");
    // } 
    // else if (sweetAndSourPork) {
    // console.log("OK, I'll have the pork.");
    // } 
    // else {
    //     console.log("Well, I guess I'll have rice then.");
    //     }

// let name = prompt ("Who are you in relation to JR?");
// if (name === "JR") {
// alert("Hello ME");
// }
// else if (name === "Dad") {
//     alert("Hello Dad");
// }
// else if (name === "Mom") {
//     alert("Hello Mom");
// }    
// else { alert ("Hi Stranger");
// }


// *********** While Loops ************

let sheepCounted = 0;
while (sheepCounted < 10) {
console.log("I have counted " + sheepCounted + " sheep!");
sheepCounted++;
}
console.log ("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");

//  ******** FOR Loop************
for (let sheepCounted = 0; sheepCounted < 10; sheepCounted++) {
    console.log("I have counted " + sheepCounted + " sheep!");
    }

// let timesToSayHello = 3;
// for (let i = 0; i < timesToSayHello; i++) 
// {
// console.log("Hello!");
// }


// let animals = ["Lion", "Flamingo", "Polar Bear", "Boa Constrictor"];
// for (let i = 0; i < animals.length; i++) 
// {
// console.log("This zoo contains a " + animals[i] + ".");
// }

// let name = prompt ("What is your name?");
// for (let i = 0; i < name.length; i++) 
// {
// console.log("Your name contains the letter " + name[i]);
// }

// for (let x = 3; x < 100; x = x * 3) {
//     console.log(x);
//     }

// //  *****Challenge One*******
// let animals = ["Cat", "Fish", "Lemur", "Komodo Dragaon"];
// for (let i = 0; i < animals.length; i++) 
// {
// animals [i] = "Awesome " + animals[i];
// }
// console.log (animals);

// // ********Challenge Two********
// **FOR**
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = "";
// for (let i = 0; i < 6; i++)
// {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
// }
// console.log (randomString);

//**While**
// let alphabet = "abcdefghijklmnopqrstuvwxyz";
// let randomString = "";
// let i = 0; 
// while (i < 6)
// {
//     randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
//     i++;
// }
// console.log (randomString);



// // ****** Challenge 3******** 
// let input = prompt ("Enter a word");
// let output = "";

// for (let i = 0; i < input.length; i++)
// {
//     if (input [i] === "a"){
//         output += "4";  }
//     else if (input[i] === "e"){
//         output += "3";    }
//     else if  (input[i] === "i"){
//         output += "1";    }
//     else if (input[i] === "o"){
//         output += "0";    }
//     else {
//         output += input[i];   }
// }
// console.log (output);
