MEMORY HEAP: Memory heap is a memory space where the variables are storaged.

CALL STACK: Its the instruction executing order that the program execute.
SINGLE THREAD LANGUAGE: Means that javascript works with only one CALL STACK. This is, javascript 
don't work with multi thread model; the JAVASCRIPT CALL STACK work in model of "first in, last out". Then,
the code is insert in CALL STACK in bottom - up model.

Obs: (Languages that work with Multi thread model have many call stacks. 
	The JAVASCRIPT has only one CALL STACK and don't work with multi thread model).
	Languages that work with Mult thread can generates DEADLOCKS.)
Javascript, because use a singlethread paradigm, is a non-blocking language.

"Synchronous Mode Languages": Are programming languages that read the code, line by line, and only process the
next code line when the previous line executing end.

"Assynchronous Mode Languages:" Are programming languages that read the code, but can execute one next line if
some parameter is target (example: timeout).

javascript can work in Assynchronous Mode. We use one function called "setTimeout(function() {}, 10);"

// use exemple of setTimeout function

/*console.log('1');*/
setTimeout(function (){console.log('1');}, 0);
setTimeout(function (){console.log('2');}, 0);
setTimeout(function (){console.log('3');}, 0);

/*console.log('3');*/

JAVASCRIPT RUN-TIME ENVIRONMENT

JAVASCRIPT run-time ENVIRONMENT are the ambient created to run the the codes. This ENVIRONMENT are loaded
in web-browsers and have the follow components:
1-WEB API(DOM(document), AJAX(XMLHttpRequest), Timeout(setTimeout), etc) 
2-Callback Queue;
3- Event Loop;


// CALL STACK

// WEB API

// CALLBACK QUEUE

//EVENT LOOP