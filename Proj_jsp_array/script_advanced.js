//////////////USE OF FOREACH//////////////////////////////////
let array=[1,2,3,4];
let newarray=[];
array.forEach( num => newarray.push(num*2));
console.log(array);
function multiplyer(num){
	
	return num * 2;
}
console.log("forEach newarray= ",newarray);

//map, filter, reduce


///////////////USE OF THE MAP ///////////////////////////////
const mapArray= array.map(num =>  num * 2);
console.log("Map=", mapArray);




//////////////USE OF THE FILTER ////////////////////////////
const filterArray=array.filter(num => num > 2);
console.log("Filter:",filterArray);



//////////////USE THE REDUCE///////////////////////////////
//reduce will let a sum of all the "array" values and addict this value with the "acc" value.
const reduceArray = array.reduce((acc,num) => {return acc + num}, 10 ); /// 10 is the acc value

console.log("Reduce: ",reduceArray);







/*////////////This code don't work, because the function forEach don't have "return"/////////////////////*/
const arrayreturn = array.forEach((num) => {return num*2});//////////////////
console.log("Returned forEach: ",arrayreturn);///////////////////////////////
/////////////////////////////////////////////////////////////////////////////