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
/*
var titleCase = function(string){
	var stringSplit = string.split(" ");
	string.replace(stringSplit[0])
	return stringSplit;
}

var splitsting = titleCase("hello there a b cee dee efff");
console.log(splitsting);
*/


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











