var list = ["tiger","cat", "dog", "lion"];
console.log("Array inicial: " + list);
console.log("Primeiro elemento: " + list[0]);

//array in array

list = [list, "frog", "chocolate"];
console.log("Array dentro do array: " + list);

list.shift();

console.log("apos o comando list.shift() sobrou isso do array: " + list);

list.pop();

console.log("apos o comando list.pop() sobrou isso do array: " + list);

list.push("fish");
console.log("apos o comando list.push('fish') sobrou isso do array: "+ list);
var list2 = ["bee","ant","snake"];
console.log("Concatenando sem salvar, list.concat(['bee', 'ant', 'snake']: "+ list.concat(list2));
//para salvar a concatenação, deve-se fazer conforme abaixo:
list=list.concat(["bee","ant","snake"]);
console.log("apos o comando list=list.concat(['bee', 'ant', 'snake']) sobrou isso do array: "+ list);

list.sort();
console.log("apos o comando list.sort() sobrou isso do array: "+ list);

list.reverse();
console.log("apos o comando list.reverse() sobrou isso do array: "+ list);
