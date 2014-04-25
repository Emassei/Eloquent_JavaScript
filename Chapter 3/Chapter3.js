

//----------------------------------Functions----------------------------------

// 1. A little math operation!
// 2. Return is the keyword is used to deteermine the value the function returns

// function ted(a, b,c,d){
// 	return (c*(a+b))/d;
// }
//console.log(ted(2,4,3,2))

//------------------------------------------------------------------------

// ******************81. Have questions about how this works*********************

// function power(base, exponet){
// 	var result = 1;
// 	for (var count = 0; count < exponet; count++)
// 		result *= base;
// 	return result;
// }

// console.log(power(2,2));

//----------------------------------------------------------------------------
//Absolute value function

// function absolute(number){
// 	if(number<0)
// 		return -number;
// 	else
// 		return number;
// }

// console.log(absolute(-133));

//-------------------------------------------------------------------------------

// function yell(message){
// 	alert (message + "!!")
// }

// yell("yow");

//------------------------------------------------------------------------------

// 1. The names of the arguments of a function are available as variables inside
//	 the function.
// 2. These variables only exist inside of the function
// 3. Really, the ony thing that exists outside of the function is the function
// 	  itself.
// 4. 

//-----------------------------------------------------------------------------

// 1. Does not make sense

// function alertIsPrint(value){
// 	var alert = print;
// 	alert("tomato");

// }

// alertIsPrint("Troglodites");

//--------------------------------------------------------------------------

// 1. This shows the path of inheritance
// 2. When no variable is present inside (locally) the function, the function looks
// 	  outside, into the top-level 

// var variable = "top-level";

// function printVariable(){
// 	console.log("inside printVariable, the variable holds ' " + variable + "'.");
// }

// function test(){
// 	var variable = "local";
// 	console.log("inside test, the variable holds '" + variable + "'.");
// 	printVariable();
// }

// test();

//-------------------------------------------------------------------------------

// 1. Again we see the path of inheritance.
// 2. The child function is nested inside of the parent
// 	  a. And the baby is inside the child
// 3. The path of inheritance is shown that the baby will look to the child
//    a. not thee parent or the top level.

// 4. This is called lexical scoping, how the variables are visible at different 
//    levels of the program.

// var variable = "top-level";

// function parentFunction(){
// 	var variable = "local";

// 	function childFunction(){
// 		var variable = "more-local";

// 		function babyFunction(){
// 			console.log(variable);
// 		}

// 		babyFunction();
// 	}

// 	childFunction();
// }

// parentFunction();

//------------------------------------------------------------------------------
//----------------------------------------Lexical scoping----------------------

// 1. This shows that a varible defined, even in blocks will impact all 
//	  following actions
// 2. It is only with a function that a new variable scope is created.

// var something = 1;
// console.log("before: " + something);

// {
// 	var something = 2;
// 	console.log("inside: "  + something);
// }
// console.log("outisde: "  + something);

//-------------------------------------------------------------------------
// 1. This shows such a principle.
// 2. The two something variables are distinct, and are restricted to their
//    own local environment.
//    a. The functional scope, and the global scope.

// var something = 1

// function david(){
// 	var something = 2
// 	console.log("Inside: " + something);
// }

// david();
// console.log("Outside: " + something);

//---------------------------------------------------------------------
// 1. Key to the syntax of the code is that when a variable is equated
//	  to a function now when the variable is called () must be attached
// 2. This type of inheritance is called closure. 

// var variable = "top-level";

// function parentFunction(){
// 	var variable = "local";
	
// 	function childFunction(){
// 		console.log(variable);
// 	}
	
// 	return childFunction;
// }

// var child = parentFunction();

// child();

//----------------------------------------------------------------------------

// 1. Alright, this took a while for me to really nail down.
// 2. the inner add function, takes two variables number and ammount.
// 	  a. the ammount is defined when a value is passed in
//	  b. number at this ponint has no value 
//	  c. once the function is run number and amount gain the value supplied
//	  d. thus we see addtwo and addfour defined as variables giving that value.
// 3. we can now pass in new values and they will be added to the inner function.


// function makeAddFunction(amount){
// 	function add(number){
// 		return number + amount;
// 	}
// 	return add;
// }

// var addTwo = makeAddFunction(2);

// var addFive = makeAddFunction(5);

// console.log(addTwo(1) + addFive(1));

//----------------------------------------------------------------------
//----------------------------------Recursive functions-----------------

// Recursion:
// 1. Having a function call itself.
// 2. This took me a while to understand
// 3. The function has to end, i.e. it has to reach 1 or 0, in this example
// 4. Thus, each time the function runs the number has to get smaller

// function fib(num){
// 	if(num==0){
// 		return 0;
// 	}
// 	if(num ==1){
// 		return 1;
// 	}
// 	console.log(num);
// 	return fib(num -2) + fib(num-1);

// }


// 1. This is when a function call itself
// 2. Here we see that the exponent - 1 stops the function from 
//    constatnly referencing itself.
// 3. The function has to -1 or it will never end, it has to reach 0.


// function power (base, exponent){
// 	if(exponent == 0)
// 		return 1;
// 	else
// 		return base * power(base, exponent-1);
// }

// console.log(power(2,2));

//-----------------------------------------------------------------------
//----------------------------Stack------------------------------------

// This is a type of data structure  


//1. When a function is called
//	 a. the body returns
//   b. the body stores what was printed out in the stack
//   c. and this repeats until it finishes.

// function fib(num){
// 	if(num==0){
// 		return 0;
// 	}
// 	if(num ==1){
// 		return 1;
// 	}
// 	console.log(num);
// 	return fib(num -2) + fib(num-1);
// }

// Here we can see the stack 
// if we do fib(5) which is 5
// the stack would be:
// 5
// 3
// 2
// 4
// 2
// 3
// 2
// 5

// Here we begin at 5 and the function runs until either 0 or 1 is met
// and we finally get the number of the place we called.

//---------------------------------More Stack----------------------------------
// 1. This is an infinite loop.
// 2. you call chicken 
// 3. it returns egg
// 4. of which returns chicken
// 5. it goes on forever!


// function chicken(){
// 	return egg();
// }
// function egg(){
// 	return chicken();
// }
// console.log(chicken() + " came first.");

//-----------------------------------------------------------------------------
//----------------------------------------Recursive----------------------

// 1. The inner find function calls itself twice 

// function findSequence (goal){
// 	function find(start, history){
// 		if(start == goal)
// 			return history;
// 		else if (start > goal)
// 			return null;
// 		else
// 			return find(start + 5, "(" + history + " + 5)") ||
// 				   find(start * 3, "(" + history + " *3)");
// 	}
// 	return find(1, "1");
// }
// console.log(findSequence(24));

//-------------------------------------------------------------------------------
//----------------------Time line---------------------------------------------

// 1. Here, even though future is not defined before the console, the computer 
//    looks up all the definitions before it executes.

// console.log("The future says", future());

// function future(){
// 	return "We still have no flying cars!";
// }

//---------------------------------------------------------------------------
//---------------------------Anonymous functions-----------------------------

// 1. Don't forget the ; after the body of the function.
// 2. These functions have no name, the function itsel does not have a name
//    there is a variable but is not necsesary for the function

// var add = function(a,b){
// 	return a+b;
// };

// console.log(add(5,5));

//--------------------------------------------------------------------------

// 1. and it comes back false, 



function greaterThan(x){
	return function(y){
		return y>x;
	};
}

var greaterThanTen = greaterThan(10);
console.log(greaterThanTen(9));
















































