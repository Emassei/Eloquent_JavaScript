//This is a simple calculator, it takes a value and prints out the number based on the
// established conditions.

// var currentnumber = 0;

// while(currentnumber<12){
// 	currentnumber++;
// 	console.log(currentnumber)
// };

//---------------------------------------------------------------------------------

//1. Samething but with a for loop

// for(currentnumber=0;currentnumber<12;currentnumber++){
// 	console.log(currentnumber);
// }

//--------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------

// Next make a pyramid

// - Alright, so this got me for a little bit

// 1. Line is an empty value, and counter is just a place holder 
// 2. Now, while the counter is less than 10, line will add a string
// 		a. whatever it is it will continue adding strings until the condition
// 			is met counter being less than 10.
// 3. Counter adds one constantly until the condiiton is met
// 4. console.log prints out only the line

// var line = "";
// var counter = 0;

// while (counter<10){

// 	line = line + "0 ";
	
// 	console.log(line);
	
// 	counter = counter + 1;
// }

//----------------------------------------------------------------------------------

// 1. The same thing is made but instead of using the while loop syntax, now we use
//	  the for loop syntax 
// 2. Very Cool!


// var line ="";

// for(counter=0; counter<12; counter++){
// 	var line = line + "#";
// 	console.log(line);
// }

//----------------------------------------------------------------------------------
//--------------------------------------------------------------------------------

// 1. This prints out all the number below 20 that are divisible by 3 and 4. 
// 2. The weird part is the == 0
//		a. This is not so weird becuase, the % (which is / sign) divides the 
//		   number and checks to see if the remainder is 0, or == to 0 

// for(var counter=0; counter <20; counter++){
// 	if (counter % 3 == 0  && counter % 4 == 0)
// 		console.log(counter);
// }

//--------------------------------------------------------------------------------

// 1. This one is interesting 
// 2. We start with a loop 
// 3. We see if it is divisible by 4, if it is we print it out.
// 4. This is the cool part.
// 		a. If it isn't divisible by 4, it will print out a number but in 
//		   parenthesis. ("(" + counter + ")")

// for (var counter = 0; counter <= 100; counter++){
// 	if (counter %4 == 0)
// 		console.log(counter);

// 	else
// 		console.log("(" + counter + ")");
// }

//--------------------------------------------------------------------------------

//1. We can also add any number of conditions, with && or ||

// for (var counter = 0; counter <= 20; counter++){
// 	if (counter %4 == 0 && counter %3 ==0)
// 		console.log(counter);

// 	else
// 		console.log("(" + counter + ")");
// }

//------------------------------------------------------------------------------

//More of the same...

// for(var counter=1;	counter<=20;	counter++){
// 	if(counter > 15)
// 		console.log(counter + " is greater than 15");
// 	else if (counter>10)
// 		console.log(counter + " is between 10 and 16");
// 	else
// 		console.log(counter + " is less than 11");
// }

//-------------------------------------------------------------------------------

//1. Simple math prompt question

// var numba = prompt("What is 2+2?");

// Number(numba);

// if(numba == 4){
// 	alert("You're smart, good job!");
// }
// else if(numba == 3 || numba ==5){
// 	alert("That was close!")
// }
// else{
// 	alert("Stupid person, really? Try harder!");
// }

//------------------------------------------------------------------------------

//1.This is a neat little thing
//		a. The loop will run until it gets a number divisble by 7
//		b. It will stop (break) when it hits the first one.

// for(var current = 1; ; current ++){
// 	if(current %7 == 0 && current %102 ==0)
// 		break;
// }
// console.log(current);

//This can also be written differently

// for(var current = 20; current % 7 !=0; current++);
// console.log(current);

//-------------------------------------------------------------------------------

// 1. This is the answer to my question 
// 2. The loop will run until it is true
// 3. while(true) =  it will run until it is true.

// var answer;

// while(true){
// 		answer = prompt("You! What is 2 + 2? ", "");
// 		if(answer == "4"){
// 			alert("You got it right!");
// 			break;
// 		}
// 		else if(answer == "3" || answer == "5"){
// 			alert("Almost!")
// 		}
// 		else{
// 			alert("That's just sad!")
// 		}
// }

// or you can write it this way

// var value = null;
// while(value !="4"){
// 	value = prompt("What is 2+2?");
// 	if(value=="4")
// 		alert("You're right!");
// 	else if(value =="3" || value =="5")
// 		alert("Close...");
// 	else
// 		alert("Wrong!");
// }

//---------------------------------------------------------------------------

//1. This just shows that variables by themselves have no value

// var mystery;
// console.log(mystery);

//----------------------------------------------------------------------------

//----------------------------NULL Value----------------------------------

// 1. Null simply means 'this variable is defined, but does not have a value!'
// 2. For most practical purposes null == undefined is true.

// Now we get into the strange part of JavaScript

// We know that javaScript tries to make different value equal to the other
// so to see if values are absolutely true we will use

// true (false == 0); This is not absolutely true false is not number 0
// true ("" == 0); and empty string is not the number 0
// true ("5" == 5) and the string 5 is not the number 5

// the === or !==

// false (null === undefined); 
// false (false === 0);
// false ("" === 0);
// false ("5" === 5) 

// these are all false statements, if it is inverted, !==, then it will return
// true. This is absolute truth. 

//----------------------------------------------------------------------------
//------------------Numbers into strings and vice versa------------------------

// console.log("Apollo" + 5); = "Apollo5" = a string
// console.log(null + "ify"); = "nullify" = a string
// console.log("5" * 5); = 25 = a number
// console.log("strawberry" *5); = NaN

// any string * a number will always return NaN

// Numbers into strings is easy, but the other way is harder.
// console.log(Number("5") * 5);

//-----------------------------------------------------------------------------
//---------------------------Boolean operators-----------------------
//--------------------------------&&----||--------------------------------

// || does not look for truth as a whole,
// but in terms of returning a value, it first looks to the left and,
// if true, returns that value. 
// 



