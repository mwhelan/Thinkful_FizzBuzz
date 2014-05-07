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
	var className;
	if(line == "fizz") {
		className = "alert-success";
	}
	else if(line == "buzz"){
		className = "alert-warning";
	}
	else if(line == "fizzbuzz"){
		className = "alert-danger";
	}
	else {
		className = "alert-info";
	}

	var output = "<div class='alert " + className + "'>" + line + "</div>";
	$("#data").append(output);
}