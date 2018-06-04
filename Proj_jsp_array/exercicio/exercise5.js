// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
//*********************SOLUTION**************////
let arrayforEach=[];/////////////////////////////
array.forEach(object => {////////////////////////
                  object.username +="!";/////////
                  arrayforEach.push(object);////
                 });/////////////////////////////
console.log(arrayforEach);//////////////////////
////////////////////////////////////////////////


//Create an array using map that has all the usernames with a "?"" to each of the usernames
//*********************SOLUTION**************/////////////////////////////
let arrayMap= array.map(object=>{object.username+='?';return object;});///
console.log("arrayMap: ",arrayMap);///////////////////////////////////////
//////////////////////////////////////////////////////////////////////////


//Filter the array to only include users who are on team: red
//*********************SOLUTION**************//////////////////
let arrayFilter= array.filter(object=> object.team==="red");///
console.log("arrayFilter:",arrayFilter);///////////////////////
///////////////////////////////////////////////////////////////


//Find out the total score of all users using reduce

// (1), what is the value of i?
///////Response: i is the array element index (position).
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
	console.log(num, i);
	//alert(num);
	return num * 2;
});
console.log(newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
