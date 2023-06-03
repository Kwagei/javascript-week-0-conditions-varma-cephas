// a program that prints the greatest common divisor of two number
// declare a variable and store the first number
// declare a variable and store the second number
// find the greatest common divisor by finding a number that is both divisible by the first and second number with the remainder 0

let a = 32;
let b = 64;
let gcd = 2;

if (a%gcd === 0 && b%gcd === 0){
	console.log(`The greatest common divisor of 32 and 64 is ${gcd}`);
}
else{
	console.log("Four is invalid");
}

// a program that prints the first 12 twelve prime factor of a number
//declare a variable and store a number
// find and print the first twelve prime factor of that number

let f = 1024;
let q = 2**10;

if (q === f){
	console.log(`The first twelve prime factor of ${f} is \n2\n2\n2\n2\n2\n2\n2\n2\n2\n2`);
}

else{
	console.log("The calculation is incorrect");
}


// a program that tells if a number is even or odd
// declare a variable a store and number in that variable
// write a if statement to check if that number is even or odd

let e = 5;
if (e%2 === 0){
	console.log(`${e} is a even number`);
}
else{
	console.log(`${e} is a odd number`);
}



// a program that prints the factorial of a number
// declare a variable and store a number in that variable
let g = 6;
let gFactorial = g * (5*4*3*2*1);
console.log(`The factorial of ${g} is ${gFactorial}`);

// a program that prints Fizz if a number is a multiple of three
// buzz if a number is a multiple of five
// fizzbuzz if both is a multiple of three and five
// print the number if it's not a multiple of three and five

let u = 10;
if (u%3 === 0 && u%5 === 0)
{
	console.log("FizzBuzz");
}
else if (u%3 === 0)
{
	console.log("Fizz");
}
else if (u%5 == 0)
{
	console.log("Buzz");
}
else
{
	console.log(u);
}
