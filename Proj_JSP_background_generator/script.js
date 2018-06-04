
var h3 = document.querySelector("h3");
var color1= document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var button = document.querySelector(".random");
 

var rgbColor1=convertColor(color1.value);

var rgbColor2=convertColor(color2.value);

buildh3(rgbColor1,rgbColor2);


color1.addEventListener("input", change_background);

color2.addEventListener("input", change_background);

button.addEventListener("click", color_random);

function change_background(event){

		rgbColor1=convertColor(color1.value);
		rgbColor2=convertColor(color2.value);
		console.log("Entrou na funcao change_background");
		//insert_colors(rgbColor1,rgbColor2);
		console.log("Antes: ",body.style.background);
		body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
		//body.style.background=`linear-gradient(to right, ${color1.value}, ${color2.value})`;
		console.log("linear-gradient(to right,"+color1.value+","+color2.value+");");
		//insert_colors(rgbColor1,rgbColor2);
		buildh3(rgbColor1,rgbColor2);
}


function buildh3(rgbColor1,rgbColor2){
	h3.innerText="linear-gradient(to right, color1: Rgb("
			+ rgbColor1.r
			+","
			+ rgbColor1.g 
			+ ","
			+ rgbColor1.b
			+ "); color2: Rgb("
			+ rgbColor2.r
			+","
			+ rgbColor2.g 
			+ ","
			+ rgbColor2.b
			+ "))";
}

function convertColor(color) {
  /* Check for # infront of the value, if it's there, strip it */
    if(color.substring(0,1) == '#') {
     color = color.substring(1);
   }

   var rgbColor={};
  /* Grab each pair (channel) of hex values and parse them to ints using hexadecimal decoding */
  rgbColor.r = parseInt(color.substring(0,2),16);
  rgbColor.g = parseInt(color.substring(2,4),16);
  rgbColor.b = parseInt(color.substring(4),16);
  return rgbColor;
 }

function color_random(){
rgbColor1.r= Math.floor(Math.random() * 256);	
rgbColor1.g= Math.floor(Math.random() * 256);
rgbColor1.b= Math.floor(Math.random() * 256);
rgbColor2.r= Math.floor(Math.random() * 256);	
rgbColor2.g= Math.floor(Math.random() * 256);
rgbColor2.b= Math.floor(Math.random() * 256);
insert_colors(rgbColor1,rgbColor2);
buildh3(rgbColor1,rgbColor2);
// change the color fields values
color1.value="#"+ color_RGBtoHEX(rgbColor1.r)
				+ color_RGBtoHEX(rgbColor1.g)
				+ color_RGBtoHEX(rgbColor1.b);
color2.value="#"+ color_RGBtoHEX(rgbColor2.r)
				+ color_RGBtoHEX(rgbColor2.g)
				+ color_RGBtoHEX(rgbColor2.b);


}

function insert_colors(rgbColor1,rgbColor2)
{
	
	body.style.background="linear-gradient(to right, rgb(" 
			+ rgbColor1.r
			+","
			+ rgbColor1.g
			+ ","
			+ rgbColor1.b
			+ "), rgb("
			+ rgbColor2.r
			+","
			+ rgbColor2.g
			+ ","
			+ rgbColor2.b
			+ "))";
			console.log("body.style.background = ",body.style.background);
	
}

function color_RGBtoHEX(rgb){

  var hex = Number(rgb).toString(16); 
  		 
  
  if (hex.length < 2) {
       hex = "0" + hex;
  }
  return hex;
};


