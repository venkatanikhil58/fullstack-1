//###Arrow function

//8).Arrow function with Implicit return:
/*Write an arrow function `isEven` that takes a number and returns `true` if the number is even, and `false` otherwise. Use implicit return for this function. 
Test the function with the argument 8 and print the result.*/

isEven = num => num % 2 === 0;
console.log(isEven(8)); 
//output: true
/// in above code, the '=>' is an implict return function. which means that, the code automatically gives the result without requiring the return keyword.
//-------------------------------------------------------------------------------------------------------------

//### Function call & ddefinition

//4) function with default parameters

/* Write a function `multiply` that takes two parameters, `a` and `b`, and returns their product. 
Set a default value of 1 for `b`. Call this function with a single argument 5, and with two arguments 5 and 6. 
Print both results*/

function mutiply(a, b = 1){
    return a * b
}

// call the function with a single argument
const result1 = multiply(5);
console.log(result1); //output:5

// call the function with two arguments
const result2 = multiply(5, 6);
console.log(result2); //output: 30

//in the above code, functioin mutiply has two parameters, a and b. The parameter b has a default valuenof 1, so if you call the function with only one argument, it will use 1 for b.
//-------------------------------------------------------------------------------------------------------------------

/*### Declaring the Variables

5. Practical Question:
   - Declare three variables using `let`, `const`, and `var`,
 and demonstrate the difference in their scope within a function and a block.*/

//using-let

//example within a function:

function exampleLetFunction(){
    let x = 10;
    console.log(x); //output-10
    if (true){
        let x = 20;
        console.log(x); //output-20
    }
    console.log(x); //output-10
}
/*here "let x" inside the "if" block is a different variable from "let x" outside the block.
 the scope of "let" is block-level, so chnges inside the "if" block do not affect the variable outside it*/

 //example within a block:
 {
    let y = 30;
    console.log(y); ///output-30
 }

console.log(y); /* uncaught ReferenceError: y is not defined
"let y" is scoped to thr block "{}". so it is not accesible outside of it.
*/

//using-const

//example within a function:

function exampleConstFunction(){
    const x = 10;
    console.log(x); //output-10
    if (true){
        const x = 20;
        console.log(x); //output-20
    }
    console.log(x); //output-10
}
/*here similar to "let" , "const* also has block level scope. the "const x" inside the "if" block is seperate from 
the outside "const x"*/

 //example within a block:
 {
    const y = 30;
    console.log(y); ///output-30
 }

console.log(y); // uncaught ReferenceError: y is not defined
//"const y" is scoped to the block "{}". so it is not accesible outside of it.
//------

//using-var

//example within a function:

function exampleVarFunction(){
    var x = 10;
    console.log(x); //output-10
    if (true){
        var x = 20;
        console.log(x); //output-20
    }
    console.log(x); //output-20
}
/* "var" is function scoped, not block scoped. the "var x" inside the "if" block affects the outside "var x"
because they are in the same function scope*/

 //example within a block:
 {
    const y = 30;
    console.log(y); ///output-30
 }

console.log(y); // output-30
//"var y" is not block scoped, it is function or global scoped.it is accessible outside the block
//--------------------------------------------------------------------------------------------------------------------

/*### Regular vs Arrow Functions

2. Lexical `this` in Arrow Functions:
   - Create an object with a method using a regular function and another method using an arrow function. 
   Demonstrate the difference in how `this` behaves in both methods.*/

const person = {
    name: "Nikhil",
    //regular function method
    greetRegular(){
        console.log("hello, my name is", this.name);
    }
    //arrow function method
    greetArrow () => {
        console.log("hello, my name is", this.name);
    }
}
//calling the methods
person.greetRegular(); //output: hello, my name is Nikhil
person.greetArrow(); //output: hello, my name is undefined

/*explanation:
- Regular functions have their own "this" binding which is determinrd by how the function is called.
inside a method call,"this" refers to the object.
- Arrow functions inherits "this" from the surroundings context where they are defined.*/


