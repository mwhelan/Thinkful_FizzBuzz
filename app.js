$(document).ready(function() {
	for(var number = 1; number <= 100; number++) {
		var fizzBuzz = getFizzBuzzValueFor(number);
		printLine(fizzBuzz);
	}
});

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

function printLine(line) {
	var output = line + "<br>";
	$("body").append(output);
}