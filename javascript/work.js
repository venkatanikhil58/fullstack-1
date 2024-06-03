/*
 1. Variable Declaration and Initialization
 Write a program that declares variables of different data types (integer, float, character, string, boolean). 
 Initialize them with appropriate values and display these values using console output.
*/
let firstName = "nikhil"; //string
let lastName = "jaladi";
let age = "123"; //number
let isPerson = "true"; //boolean
let cars = ["volvo", "tata"]; //array
let details ={firstNmae: "nikhil", lastName: "jaladi"}; //object

console.log("name:", firstName);
console.log("years:", age);
console.log("having cars:", cars);


/*
 2.Type Conversion:
   - Create a program that demonstrates implicit and explicit type conversion. 
   Include examples where you convert an integer to a float, a float to an integer, a string to an integer, and an integer to a string. Print the results to the console.
*/ 
//implicit conversion
let age = "123";
let ageInDays = age * 365;
console.log("Age in days: {ageInDays}");




/*
  3.Data Type Operations:
   -Develop a program that performs various operations on different data types. 
   For example, add two integers, concatenate two strings, and perform logical operations on boolean variables. Display the results of each operation.
*/
//add two integers
let num1 = 29;
let num2 = 58;

let sum = num1 + num2;
console.log("the toatal of {num1} and {num2} is: {sum}");

//concatenate operation
let firstName = "nikhil";
let greeting = "hello," + firstName
console.log(greeting);

//



