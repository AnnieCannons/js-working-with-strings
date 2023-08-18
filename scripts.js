/***************************** Exercise 1 - Formatting Names ****************************/

let userName1 = 'john L james';
let userName2 = 'corina SMITH';
let userName3 = 'Miss sunny sunshine';
let userName4 = 'Ms. Emily Dworetz';
let userName5 = 'micah caine';
let userName6 = 'WILLIAM Montgomery';
let userName7 = 'Dorothy Chou LLP';
let userName8 = '   Lisette Rivera';
let userName9 = 'Edward chistopher Olmos';
let userName10 = 'Dr. Violet Smith';

// Modify the strings here

const name1 = userName1.split(" ");

let firstName1 = name1[0].at(0).toUpperCase() + name1[0].substr(1).toLowerCase();

let lastName1 = name1[2].at(0).toUpperCase() + name1[2].at(1).toLowerCase() + name1[2].substr(2);

const name2 = userName2.split(" ");

let firstName2 = name2[0].at(0).toUpperCase() + name2[0].substr(1).toLowerCase();

let lastName2 = name2[1].at(0).toUpperCase()  + name2[1].substr(1).toLowerCase();

const name3 = userName3.split(" ");

let firstName3 = name3[1].at(0).toUpperCase() + name3[1].substr(1).toLowerCase();

let lastName3 = name3[2].at(0).toUpperCase() + name3[2].substr(1).toLowerCase();

const name4 = userName4.split(" ");

let firstName4 = name4[1].at(0).toUpperCase() + name4[1].substr(1).toLowerCase();

let lastName4 = name4[2].at(0).toUpperCase() + name4[2].substr(1).toLowerCase();

const name5 = userName5.split(" ");

let firstName5 = name5[0].at(0).toUpperCase() +  name5[0].substr(1).toLowerCase();

let lastName5 = name5[1].at(0).toUpperCase() + name5[1].substr(1).toLowerCase();

const name6 = userName6.split(" ");

let firstName6 = name6[0].at(0).toUpperCase() +  name6[0].substr(1).toLowerCase();

let lastName6 = name6[1].at(0).toUpperCase() + name6[1].substr(1).toLowerCase();

const name7 = userName7.split(" ");

let firstName7 = name7[0].at(0).toUpperCase() +  name7[0].substr(1).toLowerCase();

let lastName7 = name7[1].at(0).toUpperCase() + name7[1].substr(1).toLowerCase();

const name8 = userName8.trimStart().split(" ");

let firstName8 = name8[0].at(0).toUpperCase() + name8[0].substr(1).toLowerCase();

let lastName8 = name8[1].at(0).toUpperCase() + name8[1].substr(1).toLowerCase();

const name9 = userName9.split(" ");

let firstName9 = name9[0].at(0).toUpperCase() + name9[0].substr(1).toLowerCase();

let lastName9 = name9[2].at(0).toUpperCase() + name9[2].substr(1).toLowerCase();

const name10 = userName10.split(" ");

let firstName10 = name10[1].at(0).toUpperCase() + name10[1].substr(1).toLowerCase();

let lastName10 = name10[2].at(0).toUpperCase() + name10[2].substr(1).toLowerCase();

console.log(firstName1,lastName1);
console.log(firstName2,lastName2);
console.log(firstName3,lastName3);
console.log(firstName4,lastName4);
console.log(firstName5,lastName5);
console.log(firstName6,lastName6);
console.log(firstName7,lastName7);
console.log(firstName8,lastName8);
console.log(firstName9,lastName9);
console.log(firstName10,lastName10);

/**************************** Exercise 2  - Formatting Dates ****************************/

// Run the following code in the browser.
/* let todaysDate = new Date().toISOString(); */

let todaysDate = new Date();
let dd = todaysDate.getDate();
let mm = todaysDate.getMonth()+1;
let yyyy = todaysDate.getFullYear();
todaysDate = mm + '/' + dd + '/' + yyyy;

console.log(todaysDate);

// Change the string above to only show the date.

// Change the string to be MM/DD/YYYY.

// Run the following code in the browser.
let futureDate = '2025-10-31';
let futureDateFormatted = new Date(futureDate)
console.log(futureDateFormatted);

futureDate = '10-31-2025';

console.log(futureDate);

//Manipulate the above string to display it in the MM/DD/YEAR format.


/**************************** Exercise 3 - Formatting Emails ****************************/
let email1 = 'INFO@airbnb.com';
let email2 = 'lukeDanes@thediner.com';
let email3 = 'testingAccount@gmail.com';
let email4 = 'gracehopper@academy.COM';
let email5 = 'roslinaccounting  @gmail.com';

// Modify the strings here

email1 = email1.toLowerCase();
email2 = email2.toLowerCase();
email3 = email3.toLowerCase();
email4 = email4.toLowerCase();
email5 = email5.split(" ").join("").toLowerCase();

console.log(email1, email2, email3, email4, email5);
/**************************** Exercise 4 - Formatting Passwords  ****************************/
// For the following password, check to see if contains more than 12 characters. Display an alert that says, "Password is [NUMBER] characters long."
let password = 'mypass';

console.log(password.length); // password length

/* alert('password is six characters long'); */


// What is the following code doing? 
// Resource here: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"]
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let string = 'Hello World!';
console.log(specialChars.test(string))

// How would you run the above test on the password given above?

console.log(specialChars.test(password));

// How would you check to see if a string contains numbers?

function containsNumber(str) {
    return /\d/.test(str);
  }

console.log(containsNumber(string))


/**************************** Exercise 5 - Concatenation  ****************************/


// Declare two variables and concatenate them to form a new string. Print the result to the console.

const state = 'almost';
const exercise  = 'js-working-with-strings';

let assignment = state + " / " +  exercise;

console.log(assignment);

// Declare two variables and use string interpolation to join them to form a new string. Print the result to the console.

console.log(`Hailey is ${state} done wtih ${exercise}!`);

/**************************** Exercise 6 - Research  ****************************/
// Add your methods and examples of each method here.