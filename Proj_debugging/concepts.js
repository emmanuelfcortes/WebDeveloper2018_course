/*
function reduce put in "accumulator", in each interaction, the result value after the action
executed by function parameter called in reduce(xxxx).
The sintax of function is:

array.reduce(function(a,b){
	actions....
						})

where:
 "a" - its the accumulator, that will accumulating the parcial values of the function actions realized ;
 "b" - receive each array value used in each function interaction;

*/


const flattened = [[0,1], [2,3], [4,5]].reduce(	(accumulator, array) => 

	{
	//debugger;// command to debug the code, showing variable values in this moment;
	return accumulator.concat(array)
	
	
	}, 
	
	["inicio"] // inicialization of "accumulator" value;  
	
	);
console.log('flattened: ', flattened);


/////////////////////////WRONG FUNCTION! FIX IT!!!! //////////////////////////////////////////

const flattened = [[0,1], [2,3], [4,5]].reduce(	(a, b) => {debugger; a.concat(b) , []}); /////


//////////////// See the correct mode below..........//////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////////////////////	

















//////////////////////////////// THE CORRECT MODE ITS......//////////////////////////////////////////////
const flattened = [[0,1], [2,3], [4,5]].reduce(	(a, b) => {debugger; return a.concat(b) , []}); /////
/////////////////////////////////////////////////////////////////////////////////////////////////////