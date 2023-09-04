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
let firstName = userName7.slice(6,12);
let lastName = userName7.slice(0,5);
let fullname = firstName+" "+ lastName;

console.log(fullname.toLowerCase());
console.log(fullname = userName2.toLowerCase());
console.log(fullname = userName3.slice(4).trim().toLowerCase());
console.log(fullname = userName4.slice(4).toLowerCase());
console.log(fullname = userName5);
console.log(fullname = userName6.toLowerCase());


// **************************** Exercise 2  - Formatting Dates **************************** //

// Run the following code in the browser.

let todaysDate = new Date().toISOString();

console.log(todaysDate);

// Change the string above to only show the date.

todaysDate = new Date().toDateString();

// Change the string to be MM/DD/YYYY.

todaysDate =new Date().toLocaleDateString();

// Run the following code in the browser.
let futureDate = '2025-10-31';
let futureDateFormatted = new Date(futureDate)
console.log(futureDateFormatted);

//Manipulate the above string to display it in the MM/DD/YEAR format.

futureDateFormatted.toLocaleDateString();

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
let password = 'mypass';



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
let result = word1.concat(word2)

// Declare two variables and use string interpolation to join them to form a new string. Print the result to the console.

console.log(result)
console
//**************************** Exercise 6 - Research  ****************************/
// Add your methods and examples of each method here
