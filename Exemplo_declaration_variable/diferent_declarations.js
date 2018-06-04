// variable declaration with let and const

let abc="abc";
const babel="babel"
var varane="varane";
console.log("Start: abc=",abc,"babel=",babel,"varane=",varane);

if(varane){
	var varane="no_varane"
	let abc="abcdef"
	let babel="babel123456";
	console.log("Inside: abc=",abc,"babel=",babel,"varane=",varane);
}

console.log("Outside: abc=",abc,"babel=",babel,"varane=",varane);

// const in functions. This don't work.///
const a = function(){console.log("a")}////
console.log(a);
//////////////////////////////////////////


// const obj congelate the value of the obj, but not from your childrens.
const obj= {
	name:"Elias",
	age:"98" ,
	height:"3,55"
}

obj= 456; // will not be sucess.
obj.name="Fred" // will be ok!!!

//Destructuring

const obj= {
	name:"Elias",
	age:"98" ,
	height:"3,55"
}
// This construction bellow...
const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;
//...can be made like that
const{player, experience}=obj;
let{wizardLevel}=obj;


///////////////////////////////////////
////Another form to declarate a object/
//////////////////////////////////////

const name = "john snow";

const obj =
{
	[name]: "jj Torres",// this line is like= john snow: "jj torres"
	["ray" + "smith"]: "hahaha",// equals => raysmith:"hahaha"
	[1+2+3]: "valores"// equals => 6:"valores"

}
/////////////////////////////////////
////////Another way/////////////////
///////////////////////////////////

let a="john";
let b=123;
let c={};

//This mode...
obj2{
	a:a;
	b:b;
	c:c;
}

//...can be replaced by...
obj2{a,b,c}

/////////////////STRINGSSSSSSSSS/////

const name = "Salliu"
const age = 45;
const pet = "horse";
const greeting = "Hello "+name+ "my name is soooool"+greeting+ "!";
const greetingBest=`Hello ${name}, you seem to be ${age-20} and your ${pet} its beautiful`;

/////////// function stringsssssss////

function furinho(name='', age="95", pet="alligator"){
	return `Hello ${name}, you seem to be ${age-20} and your ${pet} its beautiful`;
}

furinho("Emman", 30, "dog");// a saída será: Hello Emman, you seem to be 10 and your dog its beautiful

// Using Symbol

let symbol1= Symbol("abc");
let symbol2=Symbol("efg");
let symbol3=Symbol("abc");

symbol1==symbol3; // the answer will gonna be FALSE. Symbol is used to create a unique element;

symbol1===symbol3 // the answer will gonna be FALSE. Symbol is used to create a unique element;

//arrow functions

// this notation...
function add(a, b){
	return a + b;
}

//... can be made from this

const add2 = (a, b) => a + b; // this means that add2 is a function that recept the parameters 'a' and 'b' (left side from the arrow) and returns 'a+b' (right side from the arrow)