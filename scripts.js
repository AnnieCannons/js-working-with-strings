//***************************** Exercise 1 - Formatting Names ****************************/
let userName1 = 'John L James';
let userName2 = 'corina SMITH';
let userName3 = 'Miss Sunny sunshine';
let userName4 = 'Ms. Emily Dworetz';
let userName5 = 'micah caine';
let userName6 = 'WILLIAM Montgomery';
let userName7 = 'Dorothy Chou LLP';
let userName8 = '   Lisette Rivera';
let userName9 = 'Edward chistopher Olmos';
let userName10 = 'Dr. Violet Smith';

// Modify the strings here
function capitalizeFirstLetter(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

let firstName = capitalizeFirstLetter(userName7.slice(6, 12));
let lastName = capitalizeFirstLetter(userName7.slice(0, 5));
let fullname = firstName + " " + lastName;

console.log(fullname);
console.log(fullname = capitalizeFirstLetter(userName2.toLowerCase()));
console.log(fullname = capitalizeFirstLetter(userName3.slice(4).trim().toLowerCase()));
console.log(fullname = capitalizeFirstLetter(userName4.slice(4).toLowerCase()));
console.log(fullname = capitalizeFirstLetter(userName5));
console.log(fullname = capitalizeFirstLetter(userName6.toLowerCase()));
// Exercise 1
// It is looking good so far. Make sure that each of the names as capitalized.
// https://www.geeksforgeeks.org/how-to-make-first-letter-of-a-string-uppercase-in-javascript/

// Exercise 2
// The second part of this question looks great. How would you answer this part of the question?: // Change the string above to only show the date.
// It is currently showing the date and the time.

// Exercise 3
// Looks great!

// Please complete exercises 4-6

// **************************** Exercise 2  - Formatting Dates **************************** //

// Run the following code in the browser.

let todaysDate = new Date().toISOString().split('T')[0];

console.log(todaysDate);

// Change the string above to only show the date.

todaysDate = new Date().toDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: "numeric"
});
console.log(todaysDate)

// Change the string to be MM/DD/YYYY.

todaysDate = new Date().toLocaleDateString();
console.log(todaysDate, "todaysDate")

// Run the following code in the browser.
let futureDate = '2025-10-31';
let futureDateFormatted = new Date(futureDate)
let formattedFutureDate = futureDateFormatted.toLocaleDateString('en-US', {
    month: '2-digit',
    day: '2-digit',
    year: 'numeric'
})
console.log(futureDateFormatted);

//Manipulate the above string to display it in the MM/DD/YEAR format.

console.log(formattedFutureDate);

//**************************** Exercise 3 - Formatting Emails ****************************
let email1 = 'INFO@airbnb.com';
let email2 = 'lukeDanes@thediner.com';
let email3 = 'testingAccount@gmail.com';
let email4 = 'gracehopper@academy.COM';
let email5 = 'roslinaccounting  @gmail.com'

// Modify the strings here
email1.toLowerCase()
email2.toLowerCase()
email3.toLowerCase()
email4.toLowerCase()
email5.split(" ").join("")



//**************************** Exercise 4 - Formatting Passwords  ****************************/
// For the following password, check to see if contains more than 12 characters. Display an alert that says, "Password is [NUMBER] characters long."
//

let password = 'mypass';

if (password.length > 12) {
    console.log(`password is ${password.length} characters long.`);
}

// What is the following code doing? 
// Resource here: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"]
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let string = 'Hello World!';
console.log(specialChars.test(string))

// How would you run the above test on the password given above?

console.log(specialChars.test(password))

// How would you check to see if a string contains numbers?
let lola = /\d/;
console.log(lola.test(password));



/**************************** Exercise 5 - Concatenation  ****************************/


// Declare two variables and concatenate them to form a new string. Print the result to the console.
let word1 = "lai"
let word2 = "la"
let result1 = word1 + word2

// Declare two variables and use string interpolation to join them to form a new string. Print the result to the console.
let result2 = `${word1}${word2}`
console.log(result1, result2)

//**************************** Exercise 6 - Research  ****************************/
// Add your methods and examples of each method here
// i used .split,.trim,.test,.tolowerCase,.captilizeFisrtLetter.join 