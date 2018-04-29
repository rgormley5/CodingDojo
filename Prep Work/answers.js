// PAGE 16 // PAGE 16 // PAGE 16 // PAGE 16 // PAGE 16 // PAGE 16 // PAGE 16 // PAGE 16 
	
	// setting and swapping
	var myNumber = 42;
	var myName = "Robert";
	var temp = myNumber;

	myNumber = myName;
	myName = temp;
	console.log("Number: ", myNumber, "Name: ", myName);

	// Print -52 to 1066
	for (var i = -52; i < 1067; i++) {
		console.log(i);
	}

	// Don't worry, be happy
	function beCheerful(){
		console.log("good morning!")
	}
	for (var i = 0; i < 98; i++) {
		beCheerful();
	}

	// Multiples of Three - but not all
	for (var i = 3; i > -301; i--) {
		if (i % 3 == 0) {
			if (i === -3 || i === -6) {
				continue;
			}
		console.log(i);
		}	
	}

	// Printing Intigers with While (2000 to 5280)
	var i = 2000;
	while (i < 5281) {
		console.log(i);
		i++
	}

	// Say it's your birthday
	function birthday(num1, num2){
		if ((num1 == 11 || num1 == 14) && (num2 == 11 || num2 == 14)) {
			console.log("How did you know?");
		}
		else {
			console.log("Just another day...")
		}
	}

	// Leap Year
	function leapYear(year){
		if (((year % 4 === 0) && (year % 100 !== 0)) || (year === 400)) {
			console.log("This year is a leap year.");
		}
		else {
			console.log("This is not a leap year.")
		}
	}

	// Print and Count
	var count = 0;

	for (i = 512; i < 4096; i++) {
		if (i % 5 === 0) {
			console.log(i);
			count++;
		}
	}
	console.log(count);


	// Multiples of Six

	var x = 0;

	while (x < 60000) {
		if (x % 6 === 0) {
			console.log(x);
		}
		x++;
	}

	// Counting, the Dojo Way
	for (var i = 0; i < 100; i++) {
		if (i % 5 === 0) {
			console.log("Coding");
		}
		if (i % 10 === 0) {
			console.log("Dojo");
		}
		else {
			console.log(i);
		}
	}

	// What do you Know?

	function thisFunction(incoming){
		console.log(incoming);
	}
	thisFunction();

	// Whoa, that sucker's huge...
	var sumz = 0;
	var sumy = 0;

	for (z = -300000; z < 0; z++) {
		if (z % 2 !== 0) {
			sumz += z;
		}
	}

	for (y = 0; y < 300000; y++) {
		if (y % 2 !== 0) {
			sumy += y;
		}
	}

	var sumtotal = sumz + sumy;
	console.log(sumtotal);

	// Countdown by Fours

	var pos = 2016;

	while (pos > 0) {
		if (pos % 4 === 0) {
			console.log(pos);
		}
		pos--;
	}

	// The Final Countdown

	function finalCountdown(param1, param2, param3, param4){
		while (param2 < param3) {
			if (param2 % param1 === 0) {
				if (param2 === param4) {
					continue;
				}
			console.log(param2);
			param2++;
			}
		}
	}


// PAGE 20 // PAGE 20 // PAGE 20 // PAGE 20 // PAGE 20 // PAGE 20 // PAGE 20 // PAGE 20 

// Countdown
function count(num){

	var arr = [];

	for (i = num; i >= 0; i--) {
		arr.push(i);
	}
	return arr;
}
// In Countdown ^^, array length is equal to num + 1


// Print and Return
function pAndR(arr0){
	console.log(arr0[0]);
	return arr0[1];
}

// First plus Length
function firstPlusLength(arr1){
	var sum = arr1[0] + arr1.length;
	return sum;
}
// In First plus Length ^^, if the first element of the array is not a number, console return an error: not defined.

// Greater than Second
function greaterThanSecond(arr3){
	var count = 0;
	var arr3 = [1,3,5,7,9,13];

	for (i = 0; i < arr3.length; i++) {
		if (arr3[i] > arr3[1]) {
			console.log(arr3[i]);
			count++;
		}
	}

	return count;
}
greaterThanSecond();

// Values greater than second, Generalized
function moreThanSecond(arr4){

	var arrnew = [];
	var count = 0;

	if (arr4.length > 2) {
		for (i = 0; i < arr4.length; i++) {
			if (arr4[i] > arr4[1]) {
				arrnew.push(arr4[i]);
				count++;
			}
		}

		console.log(count);
		return arrnew;
	}
	else {
		console.log("input array greater than one.");
	}
}


// This Length, That Value
function tltv(num1, num2){
	var arrnew = [];
	if (num1 !== num2){
		for (i = 0; i < num1; i++){
			arrnew.push(num2);
		}
		return arrnew;
	}
	else {
		console.log("Jinx!");
	}
}

// Fit the First Value
function fitFirstValue(arr5){
	if (arr5[0] > arr5.length) {
		console.log("Too big!");
	}
	else if (arr5[0] < arr5.length){
		console.log("Too small!");
	}
	else {
		console.log("Just right!");
	}
}

// Farenheit to Celsius
function farenheitToCelsius(fDegrees){
	var celsius = (5/9)*(fDegrees-32);
	return celsius;
}

// Celsius to Farenheit
function celsiusToFarenheit(fCelcius){
	var farenheit = (((9/5)*fCelcius) + 32);
	return farenheit;
}


// PAGE 22 // PAGE 22 // PAGE 22 // PAGE 22 // PAGE 22 // PAGE 22 // PAGE 22 // PAGE 22


// Biggie Size
function biggieSize(arr0){
	for (i = 0; i < arr0.length; i++) {
		if (arr0[i] > 0) {
			arr0[i] = "big";
		}
	}
	return arr0;
}

// Print Low, Return High
function lowHigh(arr1){
	var min = arr1[0];
	var max = arr1[0];
	for (i = 0; i < arr1.length; i++) {
		if (arr1[i] > max) {
			max = arr1[i];
		}
		if (arr1[i] < min) {
			min = arr1[i];
		}
	}
	console.log(min);
	return max;
}

// Print One, Return Another

function printOne(arr2){

	for (i = 0; i < arr2.length; i++){
		if (arr2[i] % 2 !== 0) {
			var firstOdd = arr2[i];
			break;
		}
	}

	console.log(arr2[arr2.length-2])
	return firstOdd;
}

// Double Vision

function double(arr3){
	var arrnew = [];

	for (i = 0; i < arr3.length; i++) {
		arrnew.push(arr3[i] * 2);
	}
	return arrnew;
}

// Count Positives
function countPositives(arr4){
	
	var count = 0;

	for(i = 0; i < arr4.length; i++) {
		if (arr4[i] > 0) {
			count++;
		}
		arr4[arr4.length-1] = count;
	}
	return arr4;
}


//Evens and Odds
function evensAndOdds(arr5){
	for (i = 0; i < arr5.length; i++) {
		if ((arr5[i] && arr5[i+1] && arr5[i+2]) % 2 !== 0) {
			console.log("That's odd!");
		}
		if ((arr5[i] && arr5[i+1] && arr5[i+2]) % 2 === 0) {
			console.log("Even more so!");
		}
	}
}

// Increment the Seconds
function increment(arr6){
	for (i = 0; i < arr6.length; i++) {
		if (arr6[i] % 2 !== 0) {
			arr6[i] = arr6[i] + 1;
		}
	return arr6;
	}
}

// Previous Lengths
// ["apple", "orange", "banana"]

function lengths(arr7){
	var count = 0;

	for (var i = arr7.length - 1; i >= 0; i--) {
		for (var j = 0; j < arr7[i].length; j++) {
			count++;
		}
	arr7[arr7.length-2] = count;	
	}
	return arr7;
}

// Add Seven to Most
function seven(arr8){
	var arrnew = [];

	for (i = 0; i < arr8.length; i++) {
		if (arr8[i] === arr8[0]) {
			continue;
		}
	arrnew.push(arr8[i] + 7);
	}
	return arrnew;
}

// Reverse Array

function reverse(arr9){
	for (i = 0; i < arr9.length; i++) {
		var temp = arr9[i];
		arr9[i] = arr9[arr9.length-(i+1)];
		arr9[arr9.length - (i+1)] = temp;
	}
	return arr9;
}


// Outlook: Negative

function negative(arr10){

	for (i = 0; i < arr10.length; i++) {
		if (arr10[i] > 0) {
			arr10[i] = arr10[i] * -1;
		}
	}
	return arr10;
}

// Always Hungry

function always(arr11){
	var count = 0;
	for (i = 0; i < arr11.length; i++) {
		if (arr11[i] === "food") {
			count++
			console.log("yummy");
		}
	}
	if (count === 0) {
		console.log("I'm hungry");
	}
}

// Swap toward the Center
function center(arr12){
	for (i = 0; i < arr12.length; i++) {
		var temp = arr12[i];
		arr12[i] = arr12[arr12.length-(i+1)];
		arr12[arr12.length - (i+1)] = temp;
	}
	return arr12;
}


// Scale the Array
function scale(arr13, num){
	for (i = 0; i < arr13.length; i++) {
		arr13[i] = arr13[i] * num;
	}
	return arr13;
}