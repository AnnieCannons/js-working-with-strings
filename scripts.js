/***************************** Exercise 1 - Formatting Names ****************************/

let userName1 = 'John L James';
let userName2 = 'corina SMITH';
let userName3 = 'Miss Sunny sunshine';
let userName4 = 'Ms. Emily Dworetz';
let userName5 = 'micah caine';
let userName6 = 'WILLIAM Montgomery';
let userName7 = 'Dorothy Chou LLP';
let userName8 = 'Lisette Rivera';
let userName9 = 'Edward chistopher Olmos';
let userName10 = 'Dr. Violet Smith';

// Modify the strings here
let firstName1 = userName1.slice(0, 4);
let lastName1 = userName1.slice(7,12);
console.log(firstName1 + " " + lastName1);

let firstName2 = userName2[0].toUpperCase() + userName2.slice(1,6);
let lastName2 = userName2[7] + userName2.slice (8).toLowerCase();
console.log(firstName2 + " " + lastName2);

let firstName3 = userName3.slice(5, 10);
let lastName3 = userName3[11].toUpperCase() + userName3.slice(12, 19);
console.log(firstName3 + " " + lastName3);

let firstName4 = userName4.slice(4, 9);
let lastName4 = userName4.slice(10, 17);
console.log(firstName4 + " " + lastName4);

let firstName5 = userName5[0].toUpperCase() + userName5.slice(1, 5);
let lastName5 = userName5[6].toUpperCase() + userName5.slice(7, 11);
console.log(firstName5 + " " + lastName5);

let firstName6 = userName6[0] + userName6.slice(1, 7).toLowerCase();
let lastName6 = userName6[8] + userName6.slice(9, 18).toLowerCase();
console.log(firstName6 + " " + lastName6);

let firstName7 = userName7.slice(0, 7);
let lastName7 = userName7.slice(8, 12);
console.log(firstName7 + " " + lastName7);

let firstName8 = userName8.slice(0, 7);
let lastName8 = userName8.slice(8, 14);
console.log(firstName8 + " " + lastName8);

let firstName9 = userName9.slice(0, 7);
let lastName9 = userName9.slice(18);
console.log(firstName9 + " " + lastName9);

let firstName10 = userName10.slice(4, 10);
let lastName10 = userName10.slice(11, 16);
console.log(firstName10 + " " + lastName10);

/**************************** Exercise 2  - Formatting Dates ****************************/

// Run the following code in the browser.
let todaysDate = new Date().toISOString();
console.log(todaysDate);

// Change the string above to only show the date.
todaysDate = new Date().toISOString().slice(0, 10);
console.log(todaysDate);

// Change the string to be MM/DD/YYYY.
let formattedDate = todaysDate.slice(5, 7) + "/" + todaysDate.slice(8, 10) + "/" +todaysDate.slice(0, 4);
console.log(formattedDate);

// Run the following code in the browser.
let futureDate = '2025-10-31';
let futureDateFormatted = new Date(futureDate)
console.log(futureDateFormatted);

//Manipulate the above string to display it in the MM/DD/YEAR format.
let newDate = futureDate.slice(5, 7) + "/" + futureDate.slice(8, 10) + "/" + futureDate.slice(0, 4);
console.log(newDate);

/**************************** Exercise 3 - Formatting Emails ****************************/
let email1 = 'INFO@airbnb.com';
let email2 = 'lukeDanes@thediner.com';
let email3 = 'testingAccount@gmail.com';
let email4 = 'gracehopper@academy.COM';
let email5 = 'roslinaccounting  @gmail.com'

// Modify the strings here
let formatedEmail1 = email1.toLowerCase();
console.log(formatedEmail1);

let formatedEmail2 = email2.toLowerCase();
console.log(formatedEmail2);

let formatedEmail3 = email3.toLowerCase();
console.log(formatedEmail3);

let formatedEmail4 = email4.toLowerCase();
console.log(formatedEmail4);

let formatedEmail5 = email5.toLowerCase();
console.log(formatedEmail5);


/**************************** Exercise 4 - Formatting Passwords  ****************************/
// For the following password, check to see if contains more than 12 characters. Display an alert that says, "Password is [NUMBER] characters long."
let password = 'mypass';
let passwordCheck = password.length;

console.log(passwordCheck);
/*alert("Password is " + passwordCheck + " characters long." )*/



// What is the following code doing? 
"checking to see if there are any special characters in the string"
// Resource here: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"]
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let string = 'Hello World!';
console.log(specialChars.test(string))

// How would you run the above test on the password given above?

console.log(specialChars.test(password));

// How would you check to see if a string contains numbers?
console.log(/\d/.test(password));



/**************************** Exercise 5 - Concatenation  ****************************/


// Declare two variables and concatenate them to form a new string. Print the result to the console.
let v1 = "This is ";
let v2 = "complete sentence.";

let v3 = v1 + v2;
console.log(v3);

// Declare two variables and use string interpolation to join them to form a new string. Print the result to the console.
const dogs = '3';
console.log(`I have ${dogs} dogs.`)

/**************************** Exercise 6 - Research  ****************************/
// Add your methods and examples of each method here.

/*replace()*/
const pastaDish = "spagetti";
const update = pastaDish.replace("spag", "conf");

console.log(pastaDish);
console.log(update);

/*startsWith();
endsWith();
includes();*/

