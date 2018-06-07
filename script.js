// Define the objects in DOM

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var randomize = document.querySelector("button");
var body = document.getElementById("gradient");

// Test the selectors

console.log(css, color1, color2, body, randomize);

// Function to generate a random color

function getRandomColor() {
	var letters = '0123456789abcdef';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}


// Function to set gradient

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", "
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";
}

// Set the default background according to default color inputs

setGradient();


// Check the inputs of color selectors & random button

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomize.addEventListener("click", function(){
	color1.setAttribute("value",getRandomColor());
	color2.setAttribute("value",getRandomColor());
	setGradient();
});
