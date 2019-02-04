var numSquares = 6;
var colors = generateRandomColor(numSquares);
var squares = document.querySelectorAll(".square");
var picked = pickColor();
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#messageDisplay");
var newColor = document.querySelector("#newColor");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");

easyButton.addEventListener("click",function(){
	hardButton.classList.remove("selected");
	easyButton.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColor(numSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	for(var i = 0; i < 6; i++){
		if( i < 3 ){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
})

hardButton.addEventListener("click",function(){
	hardButton.classList.add("selected");
	easyButton.classList.remove("selected");
	colors = generateRandomColor(numSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	for(var i = 0; i < 6; i++){
		if(i < 3){
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "block";
		}
	}
})


colorDisplay.textContent = picked;

//Code for the new color button
newColor.addEventListener("click",function(){
	//0console.log("hello");
	colors=generateRandomColor(numSquares);
	picked = pickColor();
	colorDisplay.textContent = picked;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	}
})

for(var i = 0; i < squares.length; i++){
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	// add Event Listener t o the squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor != picked){
			var body = document.querySelector("body");
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again"
		}else{
			messageDisplay.textContent = "Correct"
			changeColor(picked);
			newColor.textContent = "Play Again?";
		}
	})
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		//change each color to match the background color
		squares[i].style.backgroundColor = color;
	}
	document.querySelector("#align").style.backgroundColor = color;
}

function generateRandomColor(num){
	// Generate num colors and return the array!!
	var colors = [];
	for(var i = 0; i < num; i++){
		// get random color and push into the array.
		colors[i] = randomColor();
	}
	return colors;
}

function pickColor(){
	var x = Math.floor((Math.random()*colors.length));
	return colors[x];
}

function randomColor(){
	// Pick any number from 0 to 255.
	var r = Math.floor((Math.random()*256));
	var g = Math.floor((Math.random()*256));
	var b = Math.floor((Math.random()*256));
	var color = "rgb(" + r + ", " + g + ", " + b + ")";
	return color;
}