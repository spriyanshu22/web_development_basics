// Lec 31: Confusion in using THIS keyword in JS
// If you are using any regular function than THIS keyword will refer to the global object(window object)
// ELSE if you are using an arrow function than THIS keyword will refer to the object that is defining the arrow function

var user = {
    name: 'priyanshu',
    role: 'admin',
    courseCount: 3,
    getInfo: function(){
        console.log(`Name is ${this.name} and role is ${this.role}`);
    },
    addCourse: function(){
        this.courseCount++; // here this keyword refers to the object user
    }
};

user.getInfo();

// ########################################################################################
// COUNTER PROJECT
// Lec 32/33: DOM Manipulation in JS
// CREATING A RANDOM NUMBER GENERATOR WITH SET_INTERVAL METHOD
// Lec 34/35: setInterval() and setTimeout() methods in JS
// Document Object Model
// DOM includes all the HTML elements as objects in an HEIRARCHIAL STRUCTURE

// Grabbing the element by ID
var title = document.getElementsByTagName('h1');
// var title = document.getElementById('heading'); // it will return the object of the h1 tag
// var title = document.getElementsByClassName('heading'); // it will return the object of the h1 tag

var titleText = title[0].innerText; // it will return the text of the h1 tag

console.log(title); // it will return the object of the h1 tag : HTML Collection
console.log(titleText); // it will return the text of the h1 tag : "Hello World"


// using querySelector
// var title = document.querySelector('#heading');
// var title = document.querySelector('h1');

var title = document.querySelector('.title');

// in case of querySelectorAll it will return the NodeList and . represents the class, # represents the id and tagname represents the tag
var random = document.querySelector('.random_number');
random.innerText = 0;

var congratulations = document.querySelector('.congratulations');

var btn_generate_number = document.querySelector('.btn_generate_number');

// on clicking the button
// addEventListener('click', function(){}) : it will add the event listener to the button i.e when the button is clicked the function will be executed, so we can say addEventListener is a super function that takes two arguments: event and and a callback function
btn_generate_number.addEventListener('click', function(){
    // generating a random number between 100 - 200
    var generatedRandomNumber = Math.floor(Math.random() * 100) + 100;
    congratulations.innerText = "";

    // displaying the random number using setInterval method
    // setInterval(funtion, time in milliseconds(for how long you want to run each iteration))
    // setInterval will run the function after every given time interval
    var congratulationsText = `Congratulations! You have won ${generatedRandomNumber} points.`;
    let count = 0;
    
    setInterval( ()=> {
        if(count < generatedRandomNumber){
            count++;
            random.innerText = count
        }
        else {
            //congratulations.innerText = congratulationsText;
        }
    }, 0.01);

    // setTimeout( ()=> {}, time) : it will run the function after the given time interval
    // time is set to generatedRandomNumber * 5 so that the congratulations message is displayed after the random number is displayed
    setTimeout( ()=> {
        congratulations.innerText = congratulationsText;
    }, generatedRandomNumber * 5);
});

// SO: 
// addEventListener('click', function(){}) : it will add the event listener to the button i.e when the button is clicked the function will be executed
// setInterval( ()=> {}, time) : it will run the function after every given time interval
// setTimeout( ()=> {}, time) : it will run the function after the given time interval
// ############################################################################################################


// Lec 36: Get Computed properties in javascript (getComputedStyle() method)
// To get the final properties of the element after applying all the CSS properties we use getComputedStyle() method from window object
// NOTE that properties are converted from "snake-case" to "camelCase" in JS
// eg: background-color -> backgroundColor

var title = document.querySelector('.title');
var titleBackgroundColor = window.getComputedStyle(title).backgroundColor; 
console.log(titleBackgroundColor); // rgba(0, 0, 0, 0)

// Now we can also create a arrow function to get the color
var getColor = (selectedElement) => {
    return window.getComputedStyle(selectedElement).backgroundColor;
}
console.log(getColor(title)); // rgba(0, 0, 0, 0)

// ############################################################################################################
 

// Lec 37: Event listeners in JS
// we will try to change the color of the button when the cursor is hovered over it and change it back to original color when the cursor is removed
var btn_generate_number = document.querySelector('.btn_generate_number');
btn_generate_number.style.backgroundColor = 'white';

btn_generate_number.addEventListener('mouseover', function(){
    btn_generate_number.style.backgroundColor = 'grey';
});

btn_generate_number.addEventListener('mouseout', function(){
    btn_generate_number.style.backgroundColor = 'white';
});

  

// Lec 38: New keyword in JS
// step 2 towards class concept in JS
var User = function(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
};

var user1 = new User('priyanhsu', 'kumar');
// note that if we dont use new keyword than it will return undefined because without new the function is a normal function and hence then this keyword will refer to the global object and in that case firstName and lastName will be undefined
console.log(user1);
// output: User {firstName: "priyanhsu", lastName: "kumar", getFullName: ƒ}

var user2 = new User('john', 'doe');
console.log(user2);
// output: User {firstName: "john", lastName: "doe", getFullName: ƒ}



// Lec 39: Prototype in JS
// Prototype is a way to add properties and methods to the object and are very useful in angular and react 
User.prototype.getFullName = function(){
    console.log(`${this.firstName} ${this.lastName}`);
    // NOTE: had this been an arrow function than this keyword would have referred to the global object
}
// now we can use the getFullName method in the object user1 and user2
user1.getFullName(); // output: priyanhsu kumar



// Lec 41: Object Chaining in JS
// There are many predefined methods in JS that can be used for various purposes
// eg: hasOwnProperty() method is used to check if the object has the given property or not
console.log(user1.hasOwnProperty('firstName')); // true
console.log(user1.hasOwnProperty('firstNamee')); // false
console.log(user1.hasOwnProperty('getFullName')); // false



// Lec 42: MDN way of creating objects in JS
var Fruit = {
    name : "",
    taste : "",
    getFullName : function(){
        console.log(`${this.name} ${this.taste}`);
    }
};


// Object.create() method is used to create object with the given object as the prototype and Object IS THE PARENT OBJECT OF ALL THE OBJECTS IN JS
var apple = Object.create(Fruit);
apple.getFullName(); // output: " " " "
apple.name = "apple";
apple.taste = "sweet";
apple.getFullName(); // output: "apple sweet"

// now we can also create object with constructor function : However this is not the recommended way
var mango = Object.create(Fruit, {
    name: {value: "mango"},
    taste: {value: "sweet"}
});



// Lec 43: Self Executing Anonymous Function and functional programming : 
// Self Executing: no need to call the function explicitly as it will be called automatically
// Anonymous function is a function without a name

(function(){
    console.log("This is a self executing anonymous function");
})();

// this is a self executing anonymous function



// Lec 44: Lexical scoping in JS
function init(){
    var firstName = "priyanshu";
    function sayFirstName(){
        console.log(firstName);
    }
    sayFirstName();
}

init(); // output: priyanshu
console.log(firstName); // error: firstName is not defined
// here as soon as the control goes out of the function init() the variable firstName is destroyed and hence it is not accessible outside the function
// Now in terms of context: sayFirstName() is able to access the variable firstName because of lexical scoping
// Lexical scoping means that the function will have access to the variables of its parent function
// When init() is called then on top of that context, firstName is created and then sayFirstName() is called and it is able to access the variable firstName. But when the control goes out of the function init() then the variable firstName is destroyed and hence it is not accessible outside the function




// Lec 45: Closures in JS: ???????????
// Closures are the functions that are returned by the function

function init1(){
    console.log("init1 called");
    var firstName = "priyanshu";
    function sayFirstName(){
        console.log(firstName);
    }
    return sayFirstName;
}

var value = init1(); // output: init1 called
value(); // output: priyanshu

function doAddition(x){
    return function(y){
        return x + y;
    }
}

var add = doAddition(4);
console.log(add(3)); // output: 7
console.log(add(8)); // output: 12
console.log(doAddition(4)(9)); // output: 13  
// CURRYING: calling a function with multiple arguments as a sequence of functions with a single argument



