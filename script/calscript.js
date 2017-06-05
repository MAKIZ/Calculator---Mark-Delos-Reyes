
function myAvg() {
    myCalc = calc.input.value;
    myInput = myCalc.split('+');
    calc.input.value = eval(calc.input.value)/myInput.length;
    
}

// this will change the background every click of button
document.getElementById('color').onclick = myRgb;

function myRgb() {
	var randomColor1 = Math.floor(Math.random() * 256 + 1);
	var randomColor2 = Math.floor(Math.random() * 256 + 3);
	var randomColor3 = Math.floor(Math.random() * 256 + 4);
	var mixColor = "rgb(" + randomColor1 + "," + randomColor2+ "," + randomColor3 + ")"; 
	document.body.style.background = mixColor;
	return false;
}

// document.getElementById('btn').onclick = changeColor;   

// function changeColor() {
//     document.body.style.background = "white";
//     return false;
// }  

document.getElementById('reset').onclick = myRgb;

function myRgb() {
	var randomColor1 = Math.floor(Math.random() * 256 + 2);
	var randomColor2 = Math.floor(Math.random() * 256 + 3);
	var randomColor3 = Math.floor(Math.random() * 256 + 4);
	var mixColor = "rgb(" + randomColor1 + "," + randomColor2+ "," + randomColor3 + ")"; 
	document.body.style.background=mixColor;
	return false;
}

// this is for the addition game
//this will create a random number for box 1 and 3
var firstBox = Math.floor((Math.random() * 10) + 5);
var thirdBox = Math.floor((Math.random() * 10) + 7);

// this will assign random number in box1 & box3 
function setValues() {
    document.getElementById('box1').innerHTML = firstBox;
    document.getElementById('box3').innerHTML = thirdBox;
}

function sum() {
    setValues();
    var correctAnswer = firstBox + thirdBox;
    var userAnswer = document.getElementById('answer').value;
}

function answer() {
    sum();
    var correctAnswer = firstBox + thirdBox;
    var userAnswer = document.getElementById('answer').value;

    function click() {
        var userAnswer = document.querySelector('answer').value;
    if (userAnswer === correctAnswer) {
        alert("Right on!");
    } else {
        alert ('The correct answer is ' + correctAnswer + ' Please use a calculator')
    }

    }

}

setValues();
sum();


