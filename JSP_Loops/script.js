// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.


// 2. Create an array which contains the object you have made above and name the array "database".

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".

var person = {

	username:"name",
	password: "123",
	/*function(name, password){
		person.username=name;
		person.password=password;
	},*/
};
var database=[];
for (var i = 0; i< 5 ; i++) {
 	database[i] = {username: person.username+i , password: person.password+i};	

} 
var newsfeed= [
	{username: "John1", timeline:"1"},
	{username: "John2", timeline:"2"},
	{username: "John3", timeline:"3"},
];



console.log("Testes de valores!!!!");
console.log("person.username: " + person.username);
console.log("person.password: " + person.password);
i=0;
while(i<database.length)
{	
	console.log("database["+i+"].username: " + database[i].username);
	console.log("database["+i+"].password: " + database[i].password);
	i++;
}
i=0;
do
{
	console.log("Newsfeed["+i+"].username: " + newsfeed[i].username);
	console.log("Newsfeed["+i+"].timeline: " + newsfeed[i].timeline);
	i++;
}while(i<newsfeed.length);


var usernameprompt = prompt("Username please: ");
var passwordprompt = prompt("Password please: ");

for (var i = 0;i< database.length; i++) {
	if(usernameprompt===database[i].username && passwordprompt===database[i].password)
	{console.log("Logou!!!!!!!!" + (i+1) ); break;}
	
	else
	console.log(" -------- No log ----- =( =( " + (i+1));
	
}

var queue = ["aaa", "bbb", "ccc", "ddd", "eee"]
queue.forEach(function(str,index,all) {
	console.log(str, index, all)
});


newsfeed.forEach(

	function(element, lin){

			console.log("Username: ", element.username,"Timeline: ", element.timeline);
			console.log("Index/position:", lin);

		}

	);

// The forEach loop can be used with a external function: Look below:

function agregate(element, index){
	element.username = "username " + element.username;
	element.timeline = "timeline " + element.timeline;
	console.log("element.username: ", element.username ,"element.timeline: ",element.timeline);
};

newsfeed.forEach(agregate);

