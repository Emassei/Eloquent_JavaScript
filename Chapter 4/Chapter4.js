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

/*1. a function is created with two arguments
2. it returns the string which is sliced up from the 0 position
   to the length of the pattern
3. this will only return if the sliced up string equals to the 
   pattern declared in the argument. 


function startsWith(string, pattern){
	return string.slice(0, pattern.length) == pattern;
}
console.log(startsWith("rotation", "rot"));*/

//-------------------------------------------------------------------

/*1. charAt just gives back " "
2. slice gives back what is closest to what is defined. 

console.log("Pip".charAt(250));
console.log("Nop".slice(1,10));
*/

//-----------------------------------------------------------------

/*1. a function is created it takes the arguemnt paragraph
   which will be a string.
2. a variable colon is created that takes the index, the place of the 
   colon in the argument.
3. the paragraph is returned by slicing it from the index of the colon
   + 2, so two spaces after the colon, to the end of the string.
4. The argument to split contains both a comma and a space, because that 
   is what the names are really separated by, rather than just a comma.
5. But this last split syntax is not necessary you could just put
   .split("  ")

function catNames(paragraph){
	var colon = paragraph.indexOf(":");
	return paragraph.slice(colon + 2).split(", ");
}

console.log(catNames("born 20/09/2004 (mother Yellow Bess): " + 
					 "Doctor Hobbles the 2nd, Noog"));
*/

//--------------------------------------------------------------------

function retrieveMails() {
  return [
    "Nephew,\n\nI bought a computer as soon as I received your letter. It took me two days to make it do 'internet', but I just kept calling the nice man at the computer shop, and in the end he came down to help personally. Send me something back if you receive this, so I know whether it actually works.\n\nLove,\nAunt Emily",
    "Dear Nephew,\n\nVery good! I feel quite proud about being so technologically minded, having a computer and all. I bet Mrs. Goor down the street wouldn't even know how to plug it in, that witch.\n\nAnyway, thanks for sending me that game, it was great fun. After three days, I beat it. My friend Mrs. Johnson was quite worried when I didn't come outside or answer the phone for three days, but I explained to her that I was working with my computer.\n\nMy cat had two kittens yesterday! I didn't even realize the thing was pregnant. I've listed the names at the bottom of my letter, so that you will know how to greet them the next time you come over.\n\nSincerely,\nAunt Emily\n\nborn 15/02/1999 (mother Spot): Clementine, Fireball",
    "[... and so on ...]\n\nborn 21/09/2000 (mother Spot): Yellow Emperor, Black Leclère",
    "...\n\nborn 02/04/2001 (mother Clementine): Bugeye, Wolverine, Miss Bushtail",
    "...\n\ndied 12/12/2002: Clementine\n\ndied 15/12/2002: Wolverine",
    "...\n\nborn 15/11/2003 (mother Spot): White Fang",
    "...\n\nborn 10/04/2003 (mother Miss Bushtail): Yellow Bess",
    "...\n\ndied 30/05/2004: Yellow Emperor",
    "...\n\nborn 01/06/2004 (mother Miss Bushtail): Catharina, Fat Igor",
    "...\n\nborn 20/09/2004 (mother Yellow Bess): Doctor Hobbles the 2nd, Noog",
    "...\n\nborn 15/01/2005 (mother Yellow Bess): The Moose, Liger\n\ndied 17/01/2005: Liger",
    "Dear nephew,\n\nYour mother told me you have taken up skydiving. Is this true? You watch yourself, young man! Remember what happened to my husband? And that was only from the second floor!\n\nAnyway, things are very exciting here. I have spent all week trying to get the attention of Mr. Drake, the nice gentleman who moved in next\ndoor, but I think he is afraid of cats. Or allergic to them? I am\ngoing to try putting Fat Igor on his shoulder next time I see him, very curious what will happen.\n\nAlso, the scam I told you about is going better than expected. I have already gotten back five 'payments', and only one complaint. It is starting to make me feel a bit bad though. And you are right that it is probably illegal in some way.\n\n(... etc ...)\n\nMuch love,\nAunt Emily\n\ndied 27/04/2006: Black Leclère\n\nborn 05/04/2006 (mother Lady Penelope): Red Lion, Doctor Hobbles the 3rd, Little Iroquois",
    "...\n\nborn 22/07/2006 (mother Noog): Goblin, Reginald, Little Maggie",
    "...\n\ndied 13/02/2007: Spot\n\ndied 21/02/2007: Fireball",
    "...\n\nborn 05/02/2007 (mother Noog): Long-ear Johnson",
    "...\n\nborn 03/03/2007 (mother Catharina): Asoka, Dark Empress, Rabbitface"];
}

var mailArchive = retrieveMails();
var livingCats = {"Spot": true};

for(var mail = 0; mail<mailArchive.length; mail++){
	var paragraphs = mailArchive[mail].split("\n");
	for(var paragraph = 0; paragraph < paragraph.length; paragraph++){
		if(startsWith(paragraph[paragraph],"born")){
			var names = catNames(paragraphs[paragraph]);
			for( var name = 0; name< names.length; name++)
				livingCats[names[name]] = true;
		}
		else if(startsWith(paragraphs[paragraphs], "died")){
			var names = catNames(paragraphs[paragraph]);
			for(var name = 0; name<names.length; name++)
				delete livingCats[names[names]];
		}
	}
}

console.log(livingCats);
