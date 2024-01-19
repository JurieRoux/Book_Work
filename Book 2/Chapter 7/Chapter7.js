// document.getElementById("lefteye").style.backgroundColor = "purple";
// // Rotate the head by set Deg 
// document.getElementById("head").style.transform = "rotate(345deg)";
// // Put yellow dots around his right eye.
// document.getElementById("righteye").style.border ="4px yellow dotted";
// // Left to Square
// document.getElementById("lefteye").style.borderRadius= "10%";
// // Right to Square
// document.getElementById("righteye").style.borderRadius= "10%";
// // Change his left arm’s color.
// document.getElementById("leftarm").style.backgroundColor ="#FF00FF";
// // Change the text color.
// document.getElementById("body").style.color ="#FF0000";
// // Give Douglas hair.
// document.getElementById("head").style.borderTop ="10px solid black";
// // Change his right arm’s color.
// document.getElementById("rightarm").style.backgroundColor ="green";
// // Change his mouth color.
// document.getElementById("mouth").style.backgroundColor ="pink";
// // Change his nose shape
// document.getElementById("nose").style.borderRadius = "50%";

// Making Robot Move with a listener - Easier for large code volume
let rightEye = document.getElementById("righteye");
rightEye.addEventListener("click", moveUpDown);

// // Alt method
// document.getElementById("righteye").addEventListener("click",moveUpDown);

function moveUpDown(a) {
    let robotPart = a.target;
    let tTop = 0;
    let animation = setInterval(frame, 33) // Interval for tTop to move at X milliseconds

    function frame() {
        robotPart.style.top = tTop + "%";
        tTop++;
        if (tTop === 20) {
            clearInterval(animation);
        }
    }
}

// Left Eye
let leftEye = document.getElementById("lefteye");
leftEye.addEventListener("click", moveUpDown);

// Left arm
let leftArm = document.getElementById("leftarm");
leftArm.addEventListener("click", moveRightLeft);

function moveRightLeft(b) {
    let robotPart = b.target;
    let lLeft = 20;
    let animation = setInterval(frame, 1) 

    function frame() {
        robotPart.style.left = lLeft + '%';
        lLeft++;
        if (lLeft === 71) {
            clearInterval(animation);
        }
    }
}

// Nose
let Nose = document.getElementById("nose");
Nose.addEventListener("click", moveLeftRight);

function moveLeftRight(c) {
    let robotPart = c.target;
    let nRight = 90;
    let animation = setInterval(frame, 1) 

    function frame() {
        robotPart.style.left = nRight + '%';
        nRight--;
        if (nRight=== 45) {
            clearInterval(animation);
        }
    }
}
