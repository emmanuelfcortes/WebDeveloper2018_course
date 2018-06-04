// Solve the below problems: ES7!!!!!!


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');


// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
var dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];

function check(item,num){
	if(item.includes('Ti'))
		console.log(`GOOOOLLL!!!!! item ${num}, name: ${dragons[num]}`);
	//else
	//	console.log(`NOOOOOO!!!! CHANCE ${num}`);
}
//var item='';
dragons.forEach((item,num )=> check(item,num)); 
	


// #3) Create a function that calulates the power of 100 of a number entered as a parameter

var a= (x) => x*x;
a(10);
// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result

