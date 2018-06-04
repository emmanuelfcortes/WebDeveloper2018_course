/////////////////padStart and padEnd

let name2= "234";
let name1= "01";
let name3="567";
name4=name2.padStart(10);//The string total size its 10. Then, if the string is smaller then 10,
						// the function will pad with space caracter
console.log(name2);
console.log(name4);

name4=name2.padStart((name2.length+name1.length),name1);
console.log(name2);// 234
console.log(name4);// 01234

name4=name2.padEnd(2);
console.log(name4);

name4=name2.padStart(2);
console.log(name4);

/////////////////////////////////////// object.keys, object.entries and object.values!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
let obj = {
	username0: "Juca",
	username1: "Mariana",
	username2: "Mary",
	username3: "John",
	username4: 'Juca',
}

console.log(Object.keys(obj));// return ["username1", "username2", "username3", "username4"]
console.log(Object.entries(obj)); // retunr 4 arrays
/* (4) [Array(2), Array(2), Array(2), Array(2)]
0: (2) ["username1", "Mariana"]
1: (2) ["username2", "Mary"]
2: (2) ["username3", "John"]
3: (2) ["username4", "Emmanuel"]
length: 4 */
console.log(Object.values(obj));// return ["Mariana", "Mary", "John", "Emmanuel"]


Object.keys(obj).forEach((key, index) => {
	console.log('key:', key, 'index:',index);
});

Object.entries(obj).map(value=>{
	return value[0]+ ' '+ value[1].replace('Juca','Juquinha');

})