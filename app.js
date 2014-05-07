$(document).ready(function() {
	$("#submitButton").click(function() {
		var playFizzBuzz = true;
		while(playFizzBuzz)
		{
			var input = prompt("Please enter an integer number");
			if(isInteger(input)) {
				fizzBuzz(input);
				playFizzBuzz = false;
			} else {
				playFizzBuzz = confirm("'" + input + "' is not an integer number. Press 'OK' to enter an integer number or 'Cancel' to finish.");
			}	
		}
	});

});

function fizzBuzz(limit) {
	$("#data").empty();
	for(var number = 1; number <= limit; number++) {
		printLine(getFizzBuzzValueFor(number));
	}
}

function getFizzBuzzValueFor(number) {
	if (number % 3 == 0 && number % 5 == 0) {
		return "fizzbuzz";
	}
	else if (number % 3 == 0) {
		return "fizz";
	} 
	else if (number % 5 == 0) {
		return "buzz";
	}
	else {
		return number;
	}
}

function isInteger(input) {
	var value = +input;
	if(isNaN(input)){
		return false; 
	}
	if(input % 1 != 0){
		return false;
	}
	return true;
}

function printLine(line) {
	var output = line + "<br>";
	$("#data").append(output);
}