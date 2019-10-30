const logo = document.querySelectorAll("#logo path");

for (let i = 0; i < logo.length; i++) {
    console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
}

// const box2 = document.querySelector(".skills-svg");
// const buttoniz = document.body;

// //box2.style.display = 'none';

// buttoniz.onwheel = expan1d;
// //buttoniz.ontouchstart = expan1d;

// function expan1d() {
//     console.log("yebalu");
//     box2.style.visibility = 'visible';
// };


const box2 = document.querySelector(".skills-svg");
const buttoniz = document.body;
var isHidden = true;


buttoniz.onwheel = expan1d;

function expan1d() {
    console.log(isHidden);
    if (isHidden) {
        box2.hidden = !box2.hidden;
    };
    isHidden = false;
    console.log("123123");
    console.log(isHidden);
};






// function expan1d() {
//     box2.style.display = 'flex';
//     document.getElementById('logo').style.visibility = 'visible';
//     console.log("ytest123");
//     box2.style.visibility = 'visible';
// };

// const box2 = document.querySelector(".skills-svg");

// document.addEventListener("wheel", function () {
//     event.preventDefault();
//     box2.backgroundColor = "red";
// }, true);