//1. Javascript Comments
//Single-line comments
// - ye sign single line comment show krta hai
// isme hum comments likhte hain aur javascript comments ko code mai ignore kr deta hai

/*Multi-line comments
ye wala type of comment multiple lines ke liye use kiya jata hai*/

//2. Ways to print in Javascript
//console.log("Hello World");
//alert("me");
//document.write("this is document write");

//3. Javascript console API
//console.log("Hello World", 4 + 6, "Another log");
//console.warn("this is warning");
//console.error("this is an error");

//4. Javascript variables
// What is variables? - Containers to store data values
//var number1 = 34;
//var number2 = 56;
//console.log(number1 + number2);

//5. Data types in Javascript
//Numbers
//var number1 = 34;
//var number2 = 56;
//console.log(number1 + number2);

//String
//var str1 = "This is a string";
//var str2 = 'This is also a string';
//console.log(str2);

//Objects
//var marks = {
//    sneha: 85,
//    nikita: 75,
//    abhinav: 80
//}
//console.log(marks);

//Booleans
//var a = true;
//var b = false;
//console.log(a, b);

//Undefined
//var und;
//console.log(und);

//Null
//var n = null;
//console.log(n);

//At a very high level, there are two types of data types in Javascript
//1. Primitive data types - undefined, null, number, string, boolean, symbol
//2. Reference data types - Arrays and objects

//6. Arrays 
//var arr = [1, 2, "sneha", 4, 5];
//console.log(arr);
//console.log(arr[4]);

//7. Operators in Javascript
//Arithmetic operators
//var a = 100;
//var b = 10;
//console.log("The value of a + b is", a + b);
//console.log("The value of a - b is", a - b);
//console.log("The value of a * b is", a * b);
//console.log("The value of a / b is", a / b);

//Assignment operators
//var c = b;
//c += 2; // c = c + 2;
//c -= 2; // c = c - 2;
//c *= 2; // c = c * 2;
//c /= 2; // c = c / 2;
//console.log(c);

//Comparison operators
//var x = 34;
//var y = 56;
//console.log(x == y);
//console.log(x >= y);
//console.log(x <= y);
//console.log(x > y);
//console.log(x < y);

//Logical operators
//Logical AND 
//console.log(true && true);
//console.log(true && false);
//console.log(false && true);
//console.log(false && false);

//Logical OR
//console.log(true || true);
//console.log(true || false);
//console.log(false || true);
//console.log(false || false);

//Logical NOT
//console.log(!false);
//console.log(!true);

//8. Functions in Javascript
//function avg(a, b) {
//    return (a + b) / 2;
//}
//c1 = avg(4, 6);
//c2 = avg(14, 16);
//console.log(c1, c2);

//9.Conditionals in Javascript
//var age = 50;
//Single if statement
//if (age > 18) {
//    console.log('You can drink alcohol');
//}

//if-else statement
//if (age > 18) {
//    console.log('You can drink alcohol');
//} else {
//    console.log('You cannot drink alcohol');
//}

//if-else Ladder
//if (age > 30) {
//    console.log("You are an adult")
//} else if (age > 19) {
//    console.log("You are not a teen");
//} else if (age > 12) {
//    console.log("You are a teen");
//}

//Break and Continue statement 
//var arr = [1, 2, 3, 4, 5, 6, 7];
////console.log(arr);
//for (var i = 0; i < arr.length; i++) {
//    if (i == 2) {
//        break; // this cuts the loop 
//        continue; // ye uss array ki position pe jo element hai usse skip krke bakki ka loop ke elements print kr deta hai
//    }
//    console.log(arr[i]);
//}

//arr.forEach(function(element) {
//    console.log(element);
//})

//while loop
//let j = 0;
//while (j < arr.length) {
//    console.log(arr[j]);
//    j++;
//}

//do while loop
//do {
//    console.log(arr[j]);
//    j++;
//} while (j < arr.length);