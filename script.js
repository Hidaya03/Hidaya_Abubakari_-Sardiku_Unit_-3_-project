/* Declare variables below to save the different sections (divs) of your story*/
let opening = document.querySelector(".story-opening")
let title = document.querySelector(".title")
let connorButton = document.querySelector(".connor-button")
let optionTwoScreen = document.querySelector(".option-two-screen")
let optionTwoEnd = document.querySelector(".option-two-end")
let optionOneEnd = document.querySelector(".option-one-end")
let paragraph = document.querySelector("p");
let img = document.querySelector('image')
let optionOneScreen = document.querySelector(".option-one-screen")
let optionOneScreenText = document.querySelector(".option-one-screen-text")
let optionOneButton = document.querySelector(".option-one-button")
let niceLadyImage = document.querySelector(".nice-lady-image")
let optionOne = document.querySelector(".option-one")
let optionTwo = document.querySelector(".option-two")
let optionThree = document.querySelector(".option-three")
let optionFour = document.querySelector(".option-four")
let optionOneInsertText = document.querySelector('.option-one-insert-text')
let optionThreeScreen = document.querySelector(".option-three-screen")
let optionFourScreen = document.querySelector(".option-four-screen")
let twoScreen = document.querySelector(".two-screen")
let caveButton = document.querySelector(".cave-button")

/* When you're ready to make event handlers, uncomment the code below. Then fill in the blanks with the correct variables!
*/
optionOneButton.onclick = function() {
  optionOneInsertText.innerHTML = "she opens her wide mouth and asks you if she is beautiful.(she's hideous due to an accident) you reply with yes. she turns around to leave.   she comes back around and eats you because she was hungry.   You were delicious."
  niceLadyImage.style.width = "1000px";
  optionOneEnd.style.display = "block";
  opening.style.display = "none";

};

optionOne.onclick = function() {
  optionOneScreen.style.display = "block";
  title.style.display = "none";
  opening.style.display = "none";
};


optionTwo.onclick = function() {
  optionTwoScreen.style.display = "block";
  title.style.display = "none"
  opening.style.display = "none";
}

optionThree.onclick = function() {
  optionTwoEnd.style.display = "block";
}

optionFour.onclick = function() {
  opening.style.display = "block";
}

connorButton.onclick = function() {
  
}

caveButton.onclick = function() {
  optionTwoScreen.style.display = "none";
}

/*
title.style.display = "block";
  opening.style.display = "block";
*/
//
