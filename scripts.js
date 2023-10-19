/***************************** Exercise 1 - Formatting Names ****************************/

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
let firstName1 = userName1.slice(0, 4);
console.log(userName1);
let lastName1 = userName1.slice(7);
let fullName1 = firstName1 + " " + lastName1;

let firstName2 = userName2.slice(0, 1);
firstName2 = firstName2.toUpperCase();
firstName2 = firstName2 + userName2.slice(1, 6);
let lastInitial2 = userName2[7];
let lastName2 =userName2.slice(8);
console.log(lastName2);
console.log(lastInitial2);
lastName2 = lastInitial2 + lastName2.toLowerCase();
let fullName2 = firstName2 + ' ' + lastName2;


let firstName3 = userName3.slice(5, 10);
let lastName3 = userName3.slice(12);
console.log(lastName3);
let lastInitial3 = userName3[11].toUpperCase();
console.log(lastInitial3);
lastName3 = lastInitial3 + lastName3;
let fullName3 = firstName3 + ' ' + lastName3;

let firstName4 = userName4.slice(4, 9);
console.log(firstName4);
let lastName4 = userName4.slice(10);
console.log(lastName4);
let fullName4 = firstName4 + ' ' + lastName4;

let firstInitial5 = userName5.slice(0, 1).toUpperCase();
let firstName5 = userName5.slice(1, 5);
firstName5 = firstInitial5 + firstName5;
let lastInitial5 = userName5.slice(6, 7).toUpperCase();
let lastName5 = userName5.slice(7);
lastName5 = lastInitial5 + lastName5;
let fullName5 = firstName5 + ' ' + lastName5;

let firstInitial6 = userName6.slice(0, 1);
let firstName6 = userName6.slice(1, 7).toLowerCase()
firstName6 = firstInitial6 + firstName6
let lastName6 = userName6.slice(8);
let fullName6 = firstName6 + ' ' + lastName6;


/**************************** Exercise 2  - Formatting Dates ****************************/

// Run the following code in the browser.
let todaysDate = new Date().toISOString();
console.log(todaysDate);
todaysDate = todaysDate.slice(0, 10);
console.log(todaysDate)

// Change the string above to only show the date.

// Change the string to be MM/DD/YYYY.
let newDate = new Date().toLocaleDateString('en-US')
console.log(newDate)

// Run the following code in the browser.
let futureDate = '10-31-2025';
let futureDateFormatted = new Date(futureDate).toLocaleDateString()
console.log(futureDateFormatted);

//Manipulate the above string to display it in the MM/DD/YEAR format.


/**************************** Exercise 3 - Formatting Emails ****************************/
let email1 = 'INFO@airbnb.com';
let email2 = 'lukeDanes@thediner.com';
let email3 = 'testingAccount@gmail.com';
let email4 = 'gracehopper@academy.COM';
let email5 = 'roslinaccounting  @gmail.com'

// Modify the strings here
email1 = email1.toLocaleLowerCase()
email2 = email2.toLocaleLowerCase()
email3 = email3.toLocaleLowerCase()
email4 = email4.toLocaleLowerCase()
email5 = email5.toLocaleLowerCase()
email5 =email5.split(' ').join('')


/**************************** Exercise 4 - Formatting Passwords  ****************************/
// For the following password, check to see if contains more than 12 characters. Display an alert that says, "Password is [NUMBER] characters long."
let password = 'mypass';
//if (password.length <= 12) {
 //   alert('Password is only ' + password.length + ' characters long');
//};
console.log(password);

// What is the following code doing? 
// Resource here: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"]
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let string = 'Hello World!';
console.log(specialChars.test(string))
//checking for special chars in string

// How would you run the above test on the password given above?
console.log(specialChars.test(password));


// How would you check to see if a string contains numbers?
console.log(/\d/.test(password))




/**************************** Exercise 5 - Concatenation  ****************************/


// Declare two variables and concatenate them to form a new string. Print the result to the console.
let me = "Staysha";
let you = "Teacher";

let techClass = (me +' & '+ you);
console.log(techClass)

// Declare two variables and use string interpolation to join them to form a new string. Print the result to the console.
let staysha = 'student1'
let colin = 'teacher'

let definedRoles = staysha +' & '+ colin
console.log('The subclass contains ' + definedRoles + ' for one on one work.')

/**************************** Exercise 6 - Research  ****************************/
// Add your methods and examples of each method here.
// eval method allows code written as a string to be evaluated and executed
let expression = "2 + 3"; 
let answer = eval(expression); 
console.log(answer)

let str1 = 'Hello, User';
let usernameInfo = prompt("Enter your username");
let username = usernameInfo 
console.log(str1.replace("User", username));