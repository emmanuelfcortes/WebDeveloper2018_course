var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

object1 === object2 /// true
object1 === object3 /// false
object2 === object3 /// false

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// object1 and object2, when are equated, (object 2 = object1) point to same memory space. This means that the//
// change in one object reflect in another.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////


// context vs scop k = { 
	var k = {
	 bir: function() {
			//function a(){
			//let d = "Entrou no function a";
			//return 15;
		//}
	//let a = 1; // the "a" exists only in the function "b" scope ;

	console.log(this);
	}
}

k;
 


// instantiation

class Player {
	constructor(name, type){
		this.name = name;
		this.type = type;
	}
	introduce(){
		console.log(`Hi, I'm ${this.name}, I'm a ${this.type}`);
	}
}

class Wizard extends Player{
	constructor(name,type){
		super(name,type);// this function means that this constructor will gonna do the same think that the function Player "constructor".
	}
	play(){ // function play is unique in the class Wizard. Then, don't have the function super() to extend another function.
		console.log(`We are the champions, my friend!!!!!!!!!!!! I'm a type of ${this.type}`);
	}
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic');
wizard1.introduce();