console.log("hello world");

// L46: Borrowing methods using bind() method
// proto : sort of predefined methods in JS
// proto is a property of an object that is used to access the prototype of that object
// however there are also protos for the methods defined in the prototype of the object

var User = {
    name : "priyanshu",
    lastName : "kumar",
    getFullName : function(){
        console.log(`${this.name} ${this.lastName}`);
    }
}

var User1 = {
    name : "sachin",
    lastName : "tendulkar"
}

User.getFullName(); // output: priyanshu kumar
//User1.getFullName() // output: error

// binds User method to User1 object
User.getFullName.bind(User1)(); // output: sachin tendulkar

User.getFullName.call(User1); // output: sachin tendulkar
// NOTE: bind() method returns a function and does not call the function 
// call() method calls the function



// L47: Get to know node Elements in Javascript
// <h1> Hello World </h1> : h1 is the node element
// "Hello World" is the text node




// ############################################################################################################
// Lec48: Generating node elements and text nodes in JS
var courses = [
    {
        name : "Complete ReactJS course",
        price : "600"
    },
    {
        name : "Complete Angular course",
        price : "200"
    },
    {
        name : "Complete MERN course",
        price : "100"
    },
    {
        name : "Complete C++ course",
        price : "200"
    },
    {
        name : "Complete MongoDb course",
        price : "500"
    },
    {
        name : "Complete ExpressJS course",
        price : "400"
    }
]

// function to generate list of courses
function generateList(){
    var ul = document.querySelector(".list-main-body");
    ul.innerHTML = ""; // this will remove all the elements inside the ul tag before adding new elements
    // if we do not use this line then the list will keep on adding the elements to the list without removing the previous elements
    
    for(var course of courses){
        
        var li = document.createElement("li");
        li.classList.add("listitem-main-body");

        var courseName = document.createTextNode(course.name);

        var span = document.createElement("span");
        span.classList.add("listitemspan-main-body");
        span.textContent = `$ ${course.price}`;

        li.appendChild(courseName);
        li.appendChild(span);

        ul.appendChild(li);

    }
}

//generateList();
window.addEventListener("load", generateList); // this will call the function when the window is loaded


// now we will implement sorting of the courses based on price
var buttonMainBody = document.querySelector(".button-main-body");

buttonMainBody.addEventListener("click", function(){
    // prompt("button clicked");
    courses.sort(function(a,b){
        return a.price > b.price;
    });
    generateList();
});
// ############################################################################################################



// L49: Solution of Scope problem in javascript
// Scope: the area where a variable is accessible
// JS considers the function as a scope and not {} as in other languages
console.log("L49");
console.log(name); // output: undefined
var name = "priyanshu";

// console.log(name1); // output: error
let name1 = "priyanshu";
// let gives error if the variable is not defined before using it unlike var

if(true){
    var lastName = "kumar";
}
console.log(lastName); // output: kumar
// !!!! var does not have block level scope but let has block level scope
// here var lastName can mess around with the global scope hence to avoid this we use let

// using let
if(true){
    let lastName1 = "kumar";
}
// console.log(lastName1); // output: error
// Hence let has block level scope unlike var which has function level scope



// L50: Template literals in JS
console.log("L50");
// '' can be used to define strings in JS but it is generally used for characters
// we can also use ` ` to define strings in JS and in this we can use template literals
fullName = "priyanshu";
console.log(`Hello ${fullName}`); // output: Hello priyanshu
// NOTE: we can use ${} to use variables in the string
// NOTE: template string will be treated as a string and not as a variable and hence all string methods can be used on it
console.log(`Hello ${fullName.toUpperCase()}`); // output: Hello PRIYANSHU



// L51: MAPA in JS and iterating over them
console.log("L51 - Maps in JS");
// NOTE: Maps are used to store key value pairs
// NOTE: Maps are not objects and hence they do not have prototype methods
var myMap = new Map();
myMap.set(1, "Uno");
myMap.set(2, "Dos");
myMap[3] = "Invalid"; // this is not the correct way to add key value pair in map
console.log(myMap); // output: Map(1) { 1 => 'Uno' }

for(let key of myMap.keys()){
    console.log(`Key is ${key}`); // output: Key is 1  / Key is 2
}

for(let value of myMap.values()){
    console.log(`Value is ${value}`); // output: Value is Uno / Value is Dos
}

for(let [key,value] of myMap){  
    console.log(`Key is ${key} and Value is ${value}`); // output: Key is 1 and Value is Uno / Key is 2 and Value is Dos
}

myMap.forEach( (value) => {
    console.log(`Value is ${value}`); // output: Value is Uno
});

myMap.forEach( (value, key) => {
    console.log(`Key is ${key} and Value is ${value}`); // output: Key is 1 and Value is Uno
});



// L52: Destructure the data in javascript
console.log("L52 - Destructure the data in javascript");
// Key trick: whatever data type is on the right side of
 

const user = ["priyanshu", 3, "admin"];
var [name, courseCount, role] = user;
console.log(role); // output: admin

const user1 = {
    name : "priyanshu",
    courseCount : 3,
    role : "admin"
};
// NOTE that here the variable name should be same as the key in the object
var {name, courseCount, role} = user1;




// L53: SPREAD and REST operator in JS
console.log("L53 - SPREAD and REST operator in JS");

//console.log(max(1,2,3,4,5,6,7,8,9,10)); // output: 10
//consolve.log(max(1,2)); // output: 2

var user2 = {
    name : "priyanshu",
    courseCount : 3,
    role : "admin"
};

var myObj = {};
Object.assign(myObj, user2); // this will copy all the properties of user1 to myObj
console.log(myObj); // output: { name: 'priyanshu', courseCount: 3, role: 'admin' }
Object.assign(myObj, {name : "sachin", age: "20"}); // this will change the name property of myObj to sachin adn courseCount to 10
console.log(myObj); // output: { name: 'sachin', courseCount: 3, role: 'admin', age: '20' }

// SPREAD operator
function sumOne(a,b){
    return a+b;
}
var myA = [5,4];
console.log(sumOne(...myA)); // output: 9

// REST operator
function sumTwo(...args){
    console.log(args); // output: [ 1, 2, 3, 4, 5 ] : args is an array
    let sum = 0;
    for(const arg of args){
        sum += arg;
    }
    return sum;
}
console.log(sumTwo(1,2,3,4,5)); // output: 15
// for arg we could also take out some arguments explicitly
// example: function sumTwo(a,b,...args){}




// L54: Classes and module exports in javascript
console.log("L54 - Classes and module exports in javascript");
class User3{
    //name = ""; // fine but not recommended
    constructor(name, email){
        this.name = name;
        this.email = email; // email on LHS will be property of the object and is created using this
    }
    #courseList = [];  // # is used to make the property private

    getInfo(){  // here function keyword is not used as it is a method (diff from other languages)
        return {name: this.name, email: this.email};
    }

    enrollCourse(name){
        this.#courseList.push(name);
    }

    getCourses(){
        return this.#courseList;
    }
};

//module.exports = User3; // this will export the User class to be used in other files
// on the other file
//const User3 = require("L46_to_L60.js");
//import User3 from "L46_to_L60.js"; // this is the ES6 way of importing
// and then we can use the User class as we want

// creating and object of the class
const priyanshu = new User3("priyanshu", "priyanshu1234@gamil.com");
priyanshu.enrollCourse("ReactJS");
priyanshu.enrollCourse("Angular");
console.log(priyanshu.getCourses()); // output: [ 'ReactJS', 'Angular' ]

var courseList = priyanshu.getCourses();
courseList.forEach((course) => {
    console.log(course); // output: ReactJS / Angular
});



// // L55: Private props getters and setters in javascript
// // In the above User3 class we were not directly able to access the courseList property directly 
// // This is because the courseList property is private and hence we cannot access it directly
// // Hence in such cases we use getters and setters



// // L56: Inheritance in javascript
console.log("L56 - Inheritance in javascript");

class subAdmin extends User3{
    constructor(name, email, role){
        super(name, email);
        this.role = role;
    }
    getRole(){
        return this.role;
    }
}

