var client = {
	Name: "John Jones Junior",
	Age: 33,
	Height: 1.73,
	Adress: "Street Old, 52, California-LA, USA",
}

console.log(client); // print entire object initial
console.log(client.Name);//print only the attribute Name;
console.log(client.Age);
console.log(client.Height);
console.log(client.Adress);

// This command add an attribute to the object
client.Father="John Jones First";
console.log(client);
// This command add the list Speaks to the object
client.speaks=["haaaa", "Gooooooo", " stoooooooop"];
console.log(client);
console.log(client.speaks[0]+" "+client.speaks[1]+" "+client.speaks[2]);

//List of Objects.
var list = [

	{ 	Name: "Julio",
		Age: 22
	},
	{
		Name: "Robben",
		Age: 34
	}
	];
// Acessing an Object from a list
console.log("Printing the number 0 from the list: " + list[0].Name + " " + list[0].Age+ " primaveras");
console.log("Printing the number 1 from the list: " + list[1].Name+ " " + list[1].Age+ " primaveras");

// Implementatin a function inside a object. FUNCTIONS INSIDE OBJECTS ARE METHODS!!!!!!!!!!!!
client.printer = function () {

					console.log("ACESSING A METHOD!!!!!!!!!!!!")
				};
//Calling the METHOD!!!!!!!!!!!!!!

client.printer();