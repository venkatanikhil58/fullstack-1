
//////arrow
/*
const calcAge3 = birthYear => 2047 - birthYear;
const age3 = calcAge3(1981);
const yearsUntillRetirement = (birthYear, firstName) => {
    const age = 2047 - birthYear;
    const retirement = 55 - age;

    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntillRetirement(1981, 'sri'));
console.log(yearsUntillRetirement(1970, 'ram'));
*/

/////// Taking Decisions: if / else statements
/*
const age = 25;
if (age > 18) console.log('Sarah can start driving license');
 else {
     const yearsLeft = 18 - age;
     console.log(`Sarah is too young. wait for another ${yearsLeft} years`);
}
*/

////// Strings and Template Literals
/*
const firstName = "sri";
const job = "IT job";
const birthYear = 1998;
const year = 2047;
const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
console.log(jonas);
*/

//////Equality Operators: == vs ===
/*const age = '18';
if (age == 18) console.log("You are eligible");
if (age === '18') console.log("The age should be equal with Data Type and Value");
*/

/////arrays
/*
const car1="tata";
const car2="volvo";
const car3="land rover";

const cars=["tata", "volvo", "land rover"];

console.log(cars[2]);
*/


////if-else-if
/*

let grade = 80;

if (grade >= 90){
    console.log("excellent");
}
else if (grade >= 80){
    console.log("good job");
}
else if (grade >= 70){
    console.log("okay");
}
else{
    console.log("you ned to study more")
}
*/

///for-loop
/*
const fruits = ["apple", "banana", "cherry"];

for(let i=0; i<fruits.length; i++)
    {
        console.log(fruits[i]);

    }
*/

//////while loop
/*
let number = 1;
let sum = 0;
 while (number <= 10){

    sum += number;
    number++;
 }

 console.log("the sum of numbers from 1 to 10 is;" ,sum);
 */

 ///break and continue
 /*

for (let i=0; i<10; i++){
    if(i ===3){
        
        continue;
    }
    
    if(i === 7){
        break;
    }

    console.log(i);
}
*/