//Andisheh Bassiri
//SDI1
//Assignment 4
//Code Library

var myLibrary = function(){
	///***** STRINGS *****///

	var isPhoneNumber = function(string){
		var numPattern;

		if(string.contains(" ")){
			numPattern = false;
			return numPattern;
		}else if(string.indexOf("-") == 3){
					if(string.lastIndexOf("-") == 7){
						var sub = [string.substring(0,3),string.substring(4,6),string.substring(8,11)]

						for(i = 0; i < sub.length; i++){
							if(isNaN(sub[i])){
								numPattern = false;
			      				return numPattern;
							}
						}
						numPattern = true;
						return numPattern;

					}else{
						numPattern = false;
						return numPattern;
					}
			  }else{
			      numPattern = false;
			      return numPattern;
			  }
		
		return numPattern
	}
		

	var isEmail = function(string){
		var email;

		if(string.contains(" ")){
			email = false;
		}else{
			if((string.contains("@")) && (string.contains("."))){
				email = true;
			}else {
				email = false;
				console.log("isEmail is false, string does not contain \"@\" or \".\"")
			}
		}
		return email;
	}


	var isURL = function(string){
		var url;

		if(string.contains(" ")){
			url = false;
		}else {
			if(string.startsWith("http://") || string.startsWith("https://")){ //Make Up: Project 2 - use of OR || boolean.
				url = true;
			}else{
				console.log(" isURL is false, string does not contain \"http://\" or \"https://\" ")
				url = false;
			}
		}
		return url;
	}


	var titleCase = function(string){ //Make Up: Project 2 - Returning a string
		var lowerCase = string.toLowerCase();
		var toArray = lowerCase.split(" ");
		var newString = " ";
		var upCase;
		var rest;

		for(i = 0; i < toArray.length; i++){
			var tempString1 = toArray[i];
			upCase = tempString1[0].toUpperCase();
			rest = toArray[i].substring(1,tempString1.length);
			newString += upCase.concat(rest," ");
		}
		var output = newString.trim();
		return output;
	}


	var changeSeperator = function(string,orgSeperator,newSeporator){
		var orgString = string.split(orgSeperator);
		var newString = orgString[0];
		for(n = 1; n < orgString.length; n++){
			newString += newSeporator + orgString[n];
		}
		return newString;
	}


	///***** NUMBERS *****/////

	var formatNumber = function(number,places){
		var formattedNumber = number.toFixed(places);
		return formattedNumber
	}

	var fuzzyMatch = function(num1,num2,percent){
		var numPercent;
		var isFuzzyMatch;
		if(num1 > num2){
			numPercent = (num2 / num1) * 100; //Make Up: Project 1 - Math.
			if(numPercent <= percent){
				isFuzzyMatch = num2 + " is " + numPercent + "% of " + num1 + " and within " + percent + "% of " + num1;
			}else{
				isFuzzyMatch = num2 + " is " + numPercent + "% of " + num1 + " and NOT within " + percent + "% of " + num1;
			}
		}else if(num1 < num2){
			numPercent = (num1 / num2) * 100; //Make Up: Project 1 - Math
			if(numPercent <= percent){
				isFuzzyMatch = num1 + " is " + numPercent + "% of " + num2 + " and within " + percent + "% of " + num2;
			}else{
				isFuzzyMatch = num1 + " is " + numPercent + "% of " + num2 + " and NOT within " + percent + "% of " + num2;
			}
		}
		return isFuzzyMatch;	
	};


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
			hourDifference = (dateDifference / 60000) /60; //Make Up: Project 1 - Math
			return	hourDifference;
		}else if(string = "days"){
			dayDifference = (dateDifference / 60000) /60; //Make Up Project 1 - Math
			dayDifference = dayDifference / 24; //Make Up: Project 1 - Math
			return dayDifference;
		}
	};	


	var stringNumber = function(string){
		var num = parseInt(string);
		var notnum = NaN
		if(num === NaN){
			return notnum;
		}else{
			return num;
		}
	}


	///***** Arrays *****///

	var smallestGreaterThan = function(comparison,array){
		var answer;
		var biggerThan = function(element, index, array){
			return (element > comparison);
		}
		var filtered = array.filter(biggerThan);
		answer = filtered[0];
		return answer;
	}
	

	var arraySum = function(array){ //Make Up: Project 2 - Passing Array as arguement
		var i = 0
		var answer = 0;
		var a = new Number;
		while(i < array.length){
			a = array[i]
			var num = parseInt(array[i]);
			if(array[i] === num){
				answer += a;
				i++;
			}else{
				i++;
			}
		}

		return answer;
	}

	var sortArrayWithKey = function(array,key){
		//var compare = function(a,b){
		//	if(a.key < b.key){
		//		return -1;
		//	}
		//	if(a.key > b.key){
		//		return 1;
		//	}
		//	return 0;
		//}
		//var newArray = array.sort(function(a,b){ return a.key - b.key});
		//return newArray;

		var sort = function(element, index, array){
			return (element > key);
		}
		var filtered = array.filter(sort);
		return filtered;
	}







	return{
		isPhoneNumber: isPhoneNumber,
		isEmail: isEmail,
		isURL: isURL,
		titleCase: titleCase,
		changeSeperator: changeSeperator,
		formatNumber: formatNumber,
		fuzzyMatch: fuzzyMatch,
		timeDifference: timeDifference,
		stringNumber: stringNumber,
		smallestGreaterThan: smallestGreaterThan,
		arraySum: arraySum,
		sortArrayWithKey: sortArrayWithKey,
	}
}

var myLib = new myLibrary();

var phoneNumFormat = myLib.isPhoneNumber("571-265-4221");
console.log(phoneNumFormat);

var email = myLib.isEmail("andy@aol.com");
console.log(email);

var someURL = myLib.isURL("https://thisisTOTALLYvaidsomething");
console.log(someURL);

var caseThis = myLib.titleCase("HELLO tHERE my LITTLE CHUM");
console.log(caseThis);

var stringADing = myLib.changeSeperator("a,b,c,d,e",",","/");
console.log(stringADing);

var formattedNumber = myLib.formatNumber(21.123456, 3);
console.log(formattedNumber);

var isMatch = myLib.fuzzyMatch(5,20,50);
console.log(isMatch);

var timeDif = myLib.timeDifference("Jan 20, 2012", "Jan 21, 2012", "days");
console.log(timeDif);

var convert = myLib.stringNumber("Hi");
console.log(convert);

var array1 = [1,2,3,4,5,6,7,8,9,10,20,30,40,50]
var smllestGreaterThan = myLib.smallestGreaterThan(6, array1);
console.log(smllestGreaterThan);

var array = [1,"6","b","10","d",1,2,3,4,"e","f","g",5,6,7,"12"]
var sumOfArray = myLib.arraySum(array);
console.log(sumOfArray);

var arrayWithKeys = [{a:3},{a:1},{a:5},{c:4},{c:7},{c:1},{b:1},{b:9},{b:2}]
var sortArray = myLib.sortArrayWithKey
console.log(sortArray);





