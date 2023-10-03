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

//string methods 
// 1.   .toUpperCase(0) [1]*one cursor space, use square brackets*
// 2.   .toLowerCase(0)
// 3.   .trim() *deletes white space only!*
// 4.   .slice() (start with 0) selection
// 5.   .length() (has no parents)
// 6.   .split()
// 7.   .splice

// Modify the strings here
let firstName1 = userName1.slice(0, 4) 
let lastName1= userName1.slice(7, 12);
console.log(firstName1);
console.log(lastName1);


let firstName2 = userName2[0].toUpperCase() + userName2.slice(1, 6);
let lastName2 = userName2[7] + userName2.slice(8).toLowerCase();
console.log(firstName2);
console.log(lastName2);

let firstName3 = userName3.slice(5, 10);
let lastName3 = userName3[11].toUpperCase() + userName3.slice(12);
console.log(firstName3);
console.log(lastName3);


let firstName4 = userName4.slice(4, 9);
let lastName4 = userName4.slice(10, 17);
console.log(firstName4);
console.log(lastName4);



let firstName5 = userName5[0].toUpperCase() + userName5.slice(1, 5);
let lastName5 = userName5[6].toUpperCase() + userName5.slice(7, 11);
console.log(firstName5);
console.log(lastName5);


let firstName6 = userName6[0] + userName6.slice(1, 7).toLowerCase();
let lastName6 = userName6.slice(8, 18);
console.log(firstName6);
console.log(lastName6);


let firstName7 = userName7.slice(0, 7);
let lastName7 = userName7.slice(8, 12);
console.log(firstName7);
console.log(lastName7);



let firstName8 = userName8.trim().slice(0, 7);
let lastName8 = userName8.slice(11, 17);
console.log(firstName8);
console.log(lastName8);


let firstName9 = userName9.slice(0, 6);
let lastName9 = userName9.slice(18);
console.log(firstName9);
console.log(lastName9);



let firstName10 = userName10.slice(4, 10);
let lastName10 = userName10.slice(11);
console.log(firstName10);
console.log(lastName10);









//**************************** Exercise 2  - Formatting Dates ****************************/

// Run the following code in the browser.
let todaysDate = new Date();
console.log(todaysDate);

// Change the string above to only show the date.
let onlyDate = new Date().toISOString().split('T')[0];
console.log(onlyDate);

// // Change the string to be MM/DD/YYYY.
let dateObj = new Date ('08-15-2023');
console.log(dateObj)

// Run the following code in the browser.
let futureDate = ('2025-10-31');
let futureDateFormatted = new Date(futureDate);
console.log(futureDateFormatted);

//Manipulate the above string to display it in the MM/DD/YEAR format.
let newFutureDate = ('10-31-2025');
console.log(newFutureDate);






/**************************** Exercise 3 - Formatting Emails ****************************/
let email1 = 'INFO@airbnb.com';
let email2 = 'lukeDanes@thediner.com';
let email3 = 'testingAccount@gmail.com';
let email4 = 'gracehopper@academy.COM';
let email5 = 'roslinaccounting  @gmail.com'

// Modify the strings here
airbnb = email1.toLowerCase();
console.log(airbnb);

theDiner = email2.toLowerCase();
console.log(theDiner);

testAccount = email3.toLowerCase();
console.log(testAccount);   

academy = email4.toLowerCase();
console.log(academy);

accountingGmail = email5.slice(0,16) + email5.slice(18,28);
console.log(accountingGmail);






//**************************** Exercise 4 - Formatting Passwords  ****************************/
// For the following password, check to see if contains more than 12 characters. Display an alert that says, "Password is [NUMBER] characters long." using string interpolation (${})
let password = 'mypassxcfgcghvbknk'; //changeable
let passwordAlert = password.length;

if (passwordAlert > 12) {
    alert(`Your password is ${password.length} characters long.`);
    }else { //password example not done to meet stated criteria, just an example!
        alert("\nTo ensure the safety of this database and each of its users,\nPassword complexity must meet Policy Requirements & \ninclude each of the following classifications:\n• Must be at least 12 Characters long \n• Must include at least one Upper Case Character \n• Must include at least one Lower Case Character \n• Must include at least one Number Character \n• Must include at least one Special Character");
    };

//What is the following code doing? 
// ⭐️It's running a code to check if the specialChars is found inside of the string.


// Resource here: ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions"]
let specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
let string = 'Hello World!';
console.log(specialChars.test(string))

// How would you run the above test on the password given above?
console.log(specialChars.test(password));

// How would you check to see if a string contains numbers?
let numbersContained = /\d/;
console.log(numbersContained.test(string));



//password example
let passWord = "CleanCode123!";
let padLoCkAlert = password.length;

if (padLoCkAlert >= 1-12 && /[A-Z]/.test(passWord) && /\d/.test(passWord) && /[!@#$%^&*=+]/.test(passWord)) {
    alert(`Thank you for your joint effort, Your current pass code is ${padLoCkAlert} characters long!`);
} else {
    alert(`Please make changes to your pass code according to the 'Password Security Policy' to ensure safety to all users of this database.`);
}











//**************************** Exercise 5 - Concatenation  ****************************/


// Declare two variables and concatenate them to form a new string. Print the result to the console.
let colorGreen = "green";
let colorBlue = "blue";
let = mixedColors = colorGreen + " " + colorBlue;
console.log (mixedColors);
// ⭐️results- green blue

// Declare two variables and use string interpolation to join them to form a new string. Print the result to the console.
let cherry = "sour";
let peach = "sweeet";
console.log(`I like my cherries ${cherry}, and my peaches, ${peach}!`);
//⭐️result- I like my cherries sour, and my peaches sweeet.















/**************************** Exercise 6 - Research  ****************************/
// Add your methods and examples of each method here.
// ⭐️examples of methods shown in exercise 1 above when modifying the strings



// ⭐️string methods 
// 1.   .toUpperCase()
// 2.   .toLowerCase()
// 3.   .trim()
// 4.   .slice()
// 5.   .split()
// 6.   .length() 
// 7.   .splice()