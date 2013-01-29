//Andisheh Bassiri
//SDI1
//Assignment 4
//Code Library


///***** STRINGS *****///

//Does string follow phone number formatting?

012-456-8901
var isPhoneNumber = function(string){
	var numPattern;
	if(string.length == 12){
		if(string.indexOf("-") == 3){
			if (string.lastIndexOf("-") == 7) {
				numPattern = true;
			} else {
				numPattern = false;
				console.log("isPhoneNumber function is " + numPattern + ", no dash at index 7");
			}
		}else {
			numPattern = false;
			console.log("isPhoneNumber function is " + numPattern + ", no dash at index 3");
		}
	}else {
		numPattern = false;
		console.log("isPhoneNumber function is " + numPattern + ", index length is not 12");
	}
	return numPattern;
	console.log("isPhoneNumber function is " + numPattern + ", follows phone number format");
}

/*
var phoneNumFormat = isPhoneNumber("571-265-4221");
console.log(phoneNumFormat);
*/
 
//Does string follow email address format

var isEmail = function(string){
	var email;
	if((string.contains("@")) && (string.contains("."))){
		email = true;
	}else {
		email = false;
		console.log("isEmail is false, string does not contain \"@\" or \".\"")
	}
	return email;
}

/*
var email = isEmail("andy@aol.com");
console.log(email);
*/

//Does string follow URL format?

var isURL = function(string){
	var url;
	if(string.startsWith("http://") || string.startsWith("https://")){
		url = true;
	}else{
		console.log(" isURL is false, string does not contain \"http://\" or \"https://\" ")
		url = false;
	}
	return url;
}

/*
var someURL = isURL("https://thisisTOTALLYvaidsomething");
console.log(someURL);
*/

//Title case a string

//var titleCase = function(string){

//}



//Change seperator

var changeSeperator = function(string,orgSeperator,newSeporator){
	var orgString = string.split(orgSeperator);
	var newString = orgString[0];
	for(n = 1; n < orgString.length; n++){
		newString += newSeporator + orgString[n];
	}
	return newString;
}

//var stringADing = changeSeperator("a,b,c,d,e",",","/");
//console.log(stringADing);


///***** NUMBERS *****/////

// Format a number and it's decimal places.

var formatNumber = function(number,places){
	var formattedNumber = number.toFixed(places);
	return formattedNumber
}

//var formattedNumber = formatNumber(21.123456, 3);
//console.log(formattedNumber);

//Fuzzy Match -Puurrrrrr.....

var fuzzyMatch = function(num1,num2,percent){
	var numPercent;
	var isFuzzyMatch;
	if(num1 > num2){
		numPercent = (num2 / num1) * 100;
		if(numPercent <= percent){
			isFuzzyMatch = num2 + " is " + numPercent + "% of " + num1 + " and within " + percent + "% of " + num1;
		}else{
			isFuzzyMatch = num2 + " is " + numPercent + "% of " + num1 + " and NOT within " + percent + "% of " + num1;
		}
	}else if(num1 < num2){
		numPercent = (num1 / num2) * 100;
		if(numPercent <= percent){
			isFuzzyMatch = num1 + " is " + numPercent + "% of " + num2 + " and within " + percent + "% of " + num2;
		}else{
			isFuzzyMatch = num1 + " is " + numPercent + "% of " + num2 + " and NOT within " + percent + "% of " + num2;
		}
	}
	return isFuzzyMatch;	
};

//var isMatch = fuzzyMatch(5,20,50);
//console.log(isMatch);

//Difference between two days

var timeDifference = function(date1,date2,string){
	var date1value = Date.parse(date1);
	var date2value = Date.parse(date2);
	var dateDifference;
	var hourDifference;
	var dayDifference;

	if(date1value > date2value){
		dateDifference = date1value - date2value;
	}else{
		dateDifference = date2value - date1value;
	}

	if(string == "hours"){
		hourDifference = (dateDifference / 60000) /60;
		return	hourDifference;
	}else if(string = "days"){
		dayDifference = (dateDifference / 60000) /60;
		dayDifference = dayDifference / 24;
		return dayDifference;
	}
};	

//var timeDif = timeDifference("Jan 20, 2012", "Jan 21, 2012", "days");
//console.log(timeDif);


var stringNumber = function(string){
	var num = parseInt(string);
	if(num === NaN){
		return notnum;
	}else{
		return num;
	}
}

//var convert = stringNumber("40");
///console.log(convert);

///***** Arrays *****///

var smallestGreaterThan = function(comparison,array){
	var answer;
	var biggerThan = function(element, index, array){
		return (element > comparison);
	}
	var filtered = array.filter(biggerThan);
	filtered.sort(a,b);
	answer = filtered[0];
	return answer;
}

var array1 = [1,2,3,4,5,6,7,8,9,10,20,30,40,50]
var smllestGreaterThan = smallestGreaterThan(10, array1);
console.log(smllestGreaterThan);





