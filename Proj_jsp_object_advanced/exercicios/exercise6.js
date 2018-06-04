//Evaluate these:
//#1
[2] === [2] //false. This point to different memory spaces.
{} === {} //false. This point to different memory spaces.

//#2 what is the value of property a for each object.
const object1 = { a: 5 }; 
const object2 = object1; 
const object3 = object2; 
const object4 = { a: 5}; 
object1.a = 4;

/*	RESPONSE::::

	object1.a =4;
	object2.a =4;
	object3.a =4;
	object4.a =5;

*/


//#3 create two classes: an Animal class and a Mamal class. 
// create a cow that accepts a name, type and color and has a sound method that moo's her name, type and color. 

class Animal {
	constructor(name, color, type){
		this.name= name;
		this.color= color;
		this.type= type;
	}

	nameo(){
		console.log(`His nameo is: ${this.name}.`);
	}
	colors(){
		console.log(`His color is: ${this.color}.`);
	}
	typer(){
		console.log(`His type is: ${this.type}.`);
	}

}

class Mamal extends Animal{
	constructor(name, color){
		super(name, color);
		this.type="Mamal";
		}
	

}

/*var mamal1 = new Mamal("Mamal1","black");
mamal1.nameo();
mamal1.colors();
mamal1.typer();*/


class Cow extends Mamal{
	constructor(name, color){
		super(name,color);
	}
	sound(){
		console.log(`MOOOOOOOOOOO: nameo: ${this.name}, color: ${this.color}, type ${this.type}`);
	}
}


var cow1 = new Cow("Jertrudes","Blue");
cow1.sound();
cow1.nameo();
cow1.colors();
cow1.typer();