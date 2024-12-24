// L16: Context : Global Context and Execution Context
//  global context is the default context in which JavaScript code is executed.
// global and execution context are like stack of functions that are called and 
/*
Window Context : 
    All the global variables and functions are stored in the window object.
    window.name = 'The window object';
    console.log(name);
    console.log(window.name);
    console.log(this.name);
*/

// code hoisting: 
printHelloName("priyanshu");
function printHelloName(name){
    console.log('Hello '+name);
}
// prints Hello priyanshu
// this is because the function is scanned and hoisted to the top of the code

//console.log(name); // undefined or prints nothing
var name = 'priyanshu123'; 

//printHelloName1("priyanshu");
var printHello1 = function(name){
    console.log('Hello '+name);
}
// will throw error as printHelloName1 is not a function as it is not hoisted
// variable declarations are scanned and made unavailable for use until the code is executed


// L17&18: Scope Chain : ICE CREAM CONCEPT
// function inside a function will have access to the variables of the outer function and the global variables 
// but the outer function will not have access to the variables of the inner function

// L19: this keyword: this on console will give the window object

// L20: Array
var countries = ['India', 'USA', 'Japan', 'Russia'];

// basically arrays are objects in javascript and using new keyword we can create an object of the array class
var countries2 = new Array('India', 'USA', 'Japan', 'Russia'); // another way to create an array

console.log(countries); // ['India', 'USA', 'Japan', 'Russia']
console.log(countries[0]); // India

// since countries is an object we can add properties to it as well and length is a property of the array object
console.log(countries.length); // 4
console.log(countries.indexOf('Japan')); // : 2 , ####gives -1 if not found


// POP/PUSH removes/adds element at the end whereas SHIFT/UNSHIFT removes/adds element at the beginnin
countries.pop(); // removes the last element
console.log(countries); // ['India', 'USA', 'Japan']
countries.push('Russia'); // adds an element at the end
console.log(countries); // ['India', 'USA', 'Japan', 'Russia']

countries.shift(); // removes the first element
console.log(countries); // ['USA', 'Japan', 'Russia']
countries.unshift('India'); // adds an element at the beginning
console.log(countries); // ['India', 'USA', 'Japan', 'Russia']


// L21 ##############Callbacks
/*
    A callback is a function that is passed as an argument to another function.
    This function is executed inside the other function.
    The function that accepts the callback function is called a higher order function.

    arr.callbackFunction(write the function here/or send the funciton variable); : now the callback function will be executed inside the arr function
    say if callbackFunction is every then it will be executed for every element of the array and apply and operation on it

*/

// forEach, map, filter, every: THESE ARE ARRAY METHODS THAT ACCEPT CALLBACK FUNCTIONS
var numbers = [1,2,3,4,5,6];

// Method 1:
var isEven = (function(num){
    return num%2==0;
});
console.log(numbers.every(isEven)); // false

// Method 2:
function isIsLessThan7(num){
    return num<7;
}
var isIsLessThan7 = numbers.every(isIsLessThan7); // true
console.log(isIsLessThan7);

// Method 3: Arrow function Callbacks : LATEST
var isOdd = numbers.every((num) =>(num%2==0)); // without return keyword and curly braces
console.log(isOdd); // false
// dont use curly braces if you are not using return keyword

// ####MOST CONVENIENT WAY
var isIsLessThan7 = numbers.every((num) => {
    return num<7;
}); // with return keyword and curly braces
console.log(isIsLessThan7); // true     


// L22: FILL AND FILTER and MAP ARRAY METHODS
var numbers = [1,2,3,4,5,6];
var oddNumbers = numbers.map((num) => num%2!=0); // fills the array with true or false
console.log(oddNumbers); // [true, false, true, false, true, false]

var fillFromIndex2 = numbers.fill('h', 2, 5); // fills the array with h from index 2 till 4 (end index is not included)
// whenever passin a range the start is inclusive and the end is exclusive
console.log(fillFromIndex2); // [1, 2, 'h', 'h', 'h', 6]

var greaterThan3 = numbers.filter((num) => num>3); // filters the array with elements greater than 3
console.log(greaterThan3); // [4, 5, 6]


// L23: SLICE AND SPLICE
var numbers = [1,2,3,4,5,6];
var sliced = numbers.slice(1, 4); // slices the array from index 1 to 3
console.log(sliced); // [2, 3, 4]

var spliced = numbers.splice(1, 5, 'a','hello'); // removes 4 elements from index 1 and adds a, b, c
console.log(spliced); // [2, 3, 4, 5]
console.log(numbers); // [1, 'a', 'hello', 6]
// NOTE: splice modifies the original array !!!!


// L24: OBJECTS in JS
// L25: Methods and objects in javascript

// intuition behind objects uses: 
var user = {
    name: 'priyanshu',
    role: 'admin',
    courseCount: 3,
    getInfo: function(){
        console.log(`Name is ${this.name} and role is ${this.role}`);
    },
    addCourse: function(){
        this.courseCount++;
    }
};

console.log(user.name); // priyanshu
//console.log(user[name]); // error
user.name = 'priyanshu123';
console.log(user['name']); // priyanshu123
user.getInfo(); // Name is priyanshu and role is admin
user.addCourse();
console.log(user.courseCount); // 4


// L26-30: LOOPING IN OBJECTS

// for loop
for(let i=0; i<10; i++){
    console.log(i);
}

// for in loop
// iterates over the keys of the object/array
for(let key in user){
    console.log(key);
    //console.log(user.key); // undefined : as key is a variable
    console.log(user[key]);
}

// for in can also be used with arrays
var numbers = [1,2,3,4,5,6];
for(let index in numbers){
    console.log(index);
    console.log(numbers[index]);
}

// for of loop
//only works with arrays
var numbers = [1,2,3,4,5,6];
for(let element of numbers){
    console.log(element);
} 

// ****************IMPORTANT**************
// SO Basically "for in" iterates over the keys/indexes of the object/array 
// but the "for of" loop iterates over the elements of the object/array

// while loop
let i=0;
while(i<10){
    console.log(i);
    i++;
}

// similarly we can use do while loop

// for each loop : actually an ARRAY METHOD
// only works with arrays
var arr = [1,2,3,4,5,6];
arr.forEach((element) => {
    console.log(element);
});




