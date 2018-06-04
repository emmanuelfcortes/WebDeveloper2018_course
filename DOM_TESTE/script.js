var botao = document.getElementById('botao');
var inputfield=document.getElementById('input');
var ol=document.querySelector('ol');




function check_uncheck(){

	var li= document.querySelectorAll("li");
	/* código de teste
	console.log(li);
	console.log("Tamanho da li = " , li.length)
	li[0].classList.toggle("hatch");
	console.log("Entrou na funcao check_uncheck");
	*/
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
	li_all= document.querySelectorAll("li");
	botao_rem.innerText="Remove";
	botao_rem.classList="removedor"+li_all.length;

	li.appendChild(document.createTextNode(inputfield.value));
	li.classList="removedor"+li_all.length;
	ol.appendChild(li);
	ol.appendChild(botao_rem);
	inputfield.value=""	
	var li = document.querySelectorAll("li");
	li[li.length-1].addEventListener("click", function()
		
		{
			li[li.length-1].classList.toggle("hatch");
		}

			);
	botao_rem.addEventListener("click",function() {

		var removers= document.getElementsByClassName(this.className)
		while(removers.length>0)
		{
		
		ol.removeChild(removers[0]);
		//ol.removeChild(removers[1]);

		}		
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