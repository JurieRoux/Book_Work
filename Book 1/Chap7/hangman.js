let words = [
    "javascript",
    "coding",
    "developer",
    "software",
    "java"
];

let word = words[Math.floor(Math.random() * words.length)];

let answerArray = [];
for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
}
let remainingLetters = word.length;
let guess;
let guessesAllowed = word.length;
while (remainingLetters > 0 && guessesAllowed > 0) {
    alert("Your Progress:    " + answerArray.join(" "))
    alert("You have " + guessesAllowed + " left.");
    guess = prompt("Please enter a single letter, or click cancel to EXIT");

    if (guess === null) {
        break;
    } else if (guess.length > 1) {
        alert("Please enter a single letter only");
    } else {
        guess = guess.toLowerCase();
        guessesAllowed--;
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                if (answerArray[j] === "_") {
                    answerArray[j] = guess;
                    remainingLetters--;
                } else {
                    alert("You have already guessed letter " + guess);
                    break;
                }
            }
        }

    }
}
if (guess === null) {
    alert("Sorry you to see you leave. The answer was " + word);
} else if (remainingLetters === 0) {
    alert("Your Final Result:    " + answerArray.join(" "));
    alert("Good job!");
} else if (guessesAllowed === 0) {
    alert("Sorry you ran out of guesses!");
} else {
    alert("something went wrong!!!");
}




