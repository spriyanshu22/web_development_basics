const userId = 'priyanshu123';
var fullName, email, password, confirmPassword, country, state, courseCount;
fullName = 'Priyanshu Kumar';
email = 'priyanshu950@gmail.com';
password ='12345678';
confirmPassword = '12345678';
country = 'India';
state = 'Bihar';
courseCount = 0;

provideDetails();
function provideDetails(){
    var inputPassword = prompt('Enter your password');
    if(inputPassword === password){
        console.log(`
            User Id: ${userId};
            Full Name: ${fullName};
            Email: ${email};
            Password: ${password};
            Confirm Password: ${confirmPassword};
            Country: ${country};
            State: ${state};
            Course Count: ${courseCount};
        `);
    }
    else{
        console.log('Password is incorrect');
    }
}


// L7&8 operators in javascript
sellingPrice = 199;
listingPrice = 799;

discoutPercent = ((listingPrice - sellingPrice)/listingPrice) * 100;
roundedDiscountPercent = Math.round(discoutPercent);

console.log(`
    sellingPrice: ${sellingPrice};
    listingPrice: ${listingPrice};
    discoutPercent: ${discoutPercent};
    roundedDiscountPercent: ${roundedDiscountPercent};
    dataType of roundedDiscountPercent: ${typeof roundedDiscountPercent};  // typeof is and operator and not a function
`);


// L9&10 : conditional statements
// same as C++ and Java

// L11 : ternary operator 
var authenticated = true;
console.log(authenticated? 'Showing signout button': 'Showinglogin option');


// L12: switch case
var userRole = 'admin';
switch(userRole){
    case 'admin':
        console.log('You get full access');
        break;
    case 'subadmin':
        console.log('You get access to create/delete courses');
        break;
    case 'testprep':
        console.log('You get access to create/delete tests');
        break;
    case 'user':
        console.log('You get access to consume content');
        break;
    default: 
        console.log('Trial User');
        break;
}


// L13: Coersion and falsy values
// undefined, null, 0, '', NaN
var user = '';
var name; // undefined
parseInt('abc'); // NaN

console.log(2+"2"); // 22
console.log(2=="2"); // true  : type coersion
console.log(2==="2"); // false : no coersion


// L14: functions
function sayHello(name){
    console.log('Function sayHello was called by '+name);
    console.log('hey '+name+ ' how are you?');
}
sayHello("raman"); // calling a function 
sayHello; // refering a function


// L15 functions in a variable
var userRole = function (name, role){
                    switch(role){
                        case 'admin':
                            return `${name} is admin with all access`;
                            break; // no use of break here hence it is shown as `unreachable code`
                        case 'subadmin':
                            return `${name} is subadmin with access to create/delete courses`;
                        case 'testprep':
                            return `${name} is testprep with access to create/delete tests`;
                        case 'user':
                            return `${name} is user with access to consume content`;
                        default:
                            return `${name} is a trial user`;
                    }
                }
console.log(userRole('priyanshu', 'admin'));
 // could also have written without the function keyword
 // userRole = (name, role) => { switch(role){...} }
