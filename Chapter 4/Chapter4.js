//------------Data structures: Objects and arrays---------------------------

// 1. Just trying to find the length of some strings.

// var text = "purple haze";

// console.log(text["length"]);

// console.log(text.length);

//----------------------------------------------------------------------------

// 1. Here we see that null does not have any properties. 

// var nothing = null;

// console.log(nothing.length);

//-------------------------------------------------------------------------

// 1. The properties of a string value cannot be changed
//    a. the length property itself of string cannot be changed.

//-----------------------------------------------------------------------

// 1. We created an object cat with various properties.
// 2. We replaced the .size property with 47
//    a. this changed the property within the object 
//    b. this was then deleted 
//    c. as a result that property was deleted from the object.


// var cat = {color: "grey", name: "Spot", size: 46};

// cat.size = 47;
// console.log(cat.size);
// delete cat.size;
// console.log(cat.size);
// console.log(cat);

//---------------------------------------------------------------------------

// 1. adding properties to an object.

// var empty = {};

// empty.notReally = 1000;
// console.log(empty.notReally);

//---------------------------------------------------------------------------------

// 1. an object is created with various properties
// 2. The properties on the left side of the : is the property name and the left
//    side indicates the property value 
// 3. we call each property by its name "gabba gabba" or "5"

// var thing = {"gabba gabba": "hey", "5": 10};

// console.log(thing["5"]);
// thing["5"] = 20;
// // here we can even add values that equate the string.
// console.log(thing[2+3]);
// console.log(thing["gabba gabba"]);
// delete thing["gabba gabba"];

//------------------------------------------------------------------------------

// 1. we can use variable to name properties, and call those properties by 
//    their new variable name.

// var propertyName = "length";
// var text = "mainline";
// console.log(text[propertyName]);

//------------------------------------------------------------------------
//--------------------------in operator-----------------------------------

// 1. This is how it is set up
// 2. you put the property content into the object chineseBox 
// 3. Now the object has that property 
// 4. and also property it self has that property too
// 5. thus both conditions are true. 

// var chineseBox = {};
// chineseBox.content = chineseBox;
// console.log("content" in chineseBox);
// console.log("content" in  chineseBox.content);

// console.log(chineseBox);

//-----------------------------------------------------------------------------

// var set = {"Spot": true};
// set["White Fang"] = true;
// delete set["Spot"];
// console.log("asoka"in set);

//-------------------------------------------------------------------------

/*var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);
*/

//-----------------------------------------------------------------------------

/* 1. Object is created
 2. different properties are added and values to them
 3. a loop is created that goes through the Objects
 4. they are printed showing the object and then the value for each object


var mailArchive = {
	0: "Dear nephew, ... (mail number 1)",
	1: "(mail number 2)",
	2: "(mail number 3"
};

for(var current = 0; current in mailArchive; current++)
	console.log("processing e-mail #", current, ": ", mailArchive[current]);*/

//-------------------------------------------------------------------------------
//--------------------------Arrays--------------------------------------------

/*1. simple, we see how this works.
2. build an array, 
3. create a loop that runs through the array
4. console.log then prints out each item as it runs.


var mailArchive = ["mail one", "mail two", "mail three"];

for (var current = 0; current < mailArchive.length; current++)
	console.log("Processing e-mail #", current, ": ", mailArchive[current]);*/

//---------------------------------------------------------------------------

/*1. a function is created, it takes one argument 
2. an empty array is created as result
3. then a loop is created, <= a, the argument of range
4. now the result ofthe array is equated to the variable i in the loop
   a. this is how the loop populates the empty array.
5. the now full array, or getting full array, returns the result.
6. the function is called.


function range(a){
	result = [];
	for(i=0;i<=a;i++)
		result[i]=i;
	return result;
}
console.log(range(10));*/

//-----------------------------------------------------------------------------

/*1. Here we are seeing the use of a special method called .toUpperCase
2. This method is actually a function and while contains no arguments 
   still has access to the variable doh through the (.)

var doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());*/

//---------------------------------------------------------------------------

/*1. Propeties that contain functions are generally called methods.
2. .push puts items to be placed in an array
3. .pop takes the last item of an array out 
4. .join creates a string out of all of the items in the array.  


var list =[];
list.push("Tomatoes");
list.push("Gary");
list.push("Forever");

console.log(list.join(" "));
console.log(list);

console.log(list.pop());*/

//---------------------------------------------------------------------------

/*1. .split method, This does the opposite of join 
2. all items in the string are seperated 
   a. by just the split() nothing is split
   b. this is the same as split("") with no space
   c. split(" ") with a single space splits up each word
   d. split("  ") splits up each letter.
   e. anything more has no effect on how the string is split.

var words = "Cities of the Interior";
console.log(words.split());
*/

//--------------------------------------------------------------------------

/*1. so the array was joined into one string and seperated back into
   individual items. 

var array = ["a", "b", "c d"];
console.log(array.join(" ").split(" "));*/

//------------------------------------------------------------------------

/*1. Search Program
2. This goes through the string
   a. Through charAt it looks at each place of the item in a string
   b. 0 is the first and goes from there
   c. each argument is strung along by &&
   d. the result is returned true if the argument is satisified
   	   which it is. 


var paragraph ="born 15-11-2003 (mother Spot): White Fang";

	console.log(
			paragraph.charAt(0)=="b" && 
			paragraph.charAt(1)=="o" &&
			paragraph.charAt(2) =="r" && 
			paragraph.charAt(3)=="n");
//-----------------------------------------------------------------------

1. Slice basically does the same thing but much cleaner
2. it takes a piece of the string 0 and 4 and takes it out of the 
   string
3. it is then seen if it is equated to "born"

console.log(paragraph.slice(0,4) == "born");
*/

//-----------------------------------------------------------------------

1. a function is created with two arguments
2. it returns the string which is sliced up from the 0 position
   to the length of the pattern
3. this will only return if the sliced up string equals to the 
   pattern declared in the argument. 


function startsWith(string, pattern){
	return string.slice(0, pattern.length) == pattern;
}
console.log(startsWith("rotation", "rot"));








