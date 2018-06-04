//Solve these problems:

//#1 Create a one line function that adds adds two parameters


////Response///////////////
let add = (a,b) => a + b;
//////////////////////////


//Closure: What does the last line return?

/* this notation should be understand: ===> { (entrie) [[[[ x ]]]] => (return) [[[[[ y => x+y ]]]]] }. The return is a function, and not is a value */
const addTo = x => y => x + y 



/*addToTen recepts the function y => x+ y returned by function addTo() = { (entries) [[[[[ y ]]]]] => (return) [[[[[ 10 + y]]]]].} Note that the value of x is 10;

*/
var addToTen = addTo(10)//  



/* function addToTen recept the entry 3. Then,  addToTen { (entries) [[[[[ 10 + 3 ]]]]] => (return) [[[[[ 13 ]]]]] }

*/
addToTen(3) 






//Currying: What does the last line return?
const sum = (a, b) => a + b // my comments: (this line don't worry to exercise response.)
const curriedSum = (a) => (b) => a + b /* my comments: the curriedSum function recepts two parameters: ("a" and "b"), and return one function: (b => a + b). 
 During function calling: (curriedSum(30)(1) ) two parameters are passed, then a=30 and b=1. The return its a+ b = 30 +1 =31.
*/
curriedSum(30)(1)




//Currying: What does the last line return?

const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
const add5 = curriedSum(5)
add5(12) /* This situation its near by the first situation. Then the value its 5 + 12 = 17*/



//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));/* This function means that "const compose" will recept two other functions like parameters: f() and g(). The return its an another function: ( (a) => f(g(a)) )*/
const add1 = (num) => num + 1;// one function declaration;
const add5 = (num) => num + 5;// one function declaration;
compose(add1, add5)(10) /* In this function call, its defines the parameters: f() = add1 ; g() = add5 and a=10; Then, the last return "f(g(a))" means: add1(add5(10)). 
The function add5(10) returns 10 + 5 =15 . Then, the function add1 recepts 15 like parameter. Therefore, add1(15) returns 15+1 = 16 */


//The function above give the same return of this below:
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
const add2 = compose(add1, add5);
add2(10);

//What are the two elements of a pure function?