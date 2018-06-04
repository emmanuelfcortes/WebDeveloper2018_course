/*variables*/

var botao = document.getElementById('botao');
var inputfield=document.getElementById('input');
var ol=document.getElementById('ol');

/*functions*/


function check_uncheck(){

	var li= document.querySelectorAll("li");
	
	
	for (var i = 0; i < li.length; i++) {
		/* Codigo de teste
		console.log("Entrou no for...")
		console.log("Imprimindo li[i]=",li[i]); */
		li[i].addEventListener("click", function()

		{
			
			this.classList.toggle("hatch");
			
		}

			);
	}
}








function createElementli()
{
	// Código de teste console.log("FUNFANDO!");
	var li = document.createElement("li");
	var botao_rem=document.createElement("button");
	var div=document.createElement("div");
	li_all= document.querySelectorAll("li");
	//div.id="removedor"+li_all.length;
	li.id="removedor"+li_all.length;
	botao_rem.innerText="Del";
	botao_rem.classList="removedor"+li_all.length;
	li.classList="removedor"+li_all.length;
	li.appendChild(document.createTextNode(inputfield.value+"  "));
	li.appendChild(botao_rem);
	li.classList="removedor"+li_all.length;
	
	//div.appendChild(li);
	//div.appendChild(botao_rem);
	ol.appendChild(li);
	inputfield.value=""	
	var li = document.querySelectorAll("li");
	li[li.length-1].addEventListener("click", function()
		
		{
			li[li.length-1].classList.toggle("hatch");
		}

			);
	botao_rem.addEventListener("click",function() {

		//var div_remover= document.getElementById(this.className);
		var li_remover= document.getElementById(this.className);
		ol.removeChild(li_remover);
		
				
	}
	);

}

function length(inputfield)
{
	return inputfield.value.length;
}
function addLionclick()
{
	if(length(inputfield)>0)
	{
		//Codigo de teste console.log("Entrou com click");
		createElementli();
	}
	else
		inputfield.placeholder="digite alguma coisa!!!!!";

}

function addLionenter(event) // 13 é o keycode da tecla Enter
{
	if(length(inputfield)>0 && event.keyCode==13)
	{
		// Codigo de teste console.log("Entrou com ENTER");
		createElementli();
	}
	else
		inputfield.placeholder="digite alguma coisa!!!!!";

}


botao.addEventListener("click" , addLionclick);
	
inputfield.addEventListener("keypress" , addLionenter);

check_uncheck();