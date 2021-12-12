//1.Ways to print in Javascript
console.log("Hello World");
//alert("me");
//document.getElementsById('h1').style.fontSize = "30px";
//document.write("this is document write");


//2.Javascript console API
console.log("Hello World", 4 + 6, "Another log");
console.warn("this is warning");
console.error("this is an error");
console.clear();


//3.Javascript Variables
//What are variables? - Containers to store data values
var number1 = 34;
var number2 = 56;
//console.log(number1 + number2);


//4.Data types in Javascript
//Numbers
var num1 = 455;
var num2 = 56.76;

//String
var str1 = "This ia a string";
var str2 = "This is also a string";

//Objects
var marks = {
        ravi: 34,
        shubham: 78,
        harry: 99.977
    }
    //console.log(marks);

//Booleans
var a = true;
var b = false;
//console.log(a, b);

//var und = undefined;
var und;
//console.log(und);

var n = null;
//console.log(n);

/*
At a very high level, there are two types of data types in Javascript:-
1. Primitive data types: undefined, null, number, string, boolean, symbol
2. Reference data types: arrays and objects
*/

//Arrays
var arr = [1, 2, 3, 4, 5, "hello"]
    //console.log(arr);

//Operators in Javascript
//Arthematic operators
var a = 100;
var b = 10;
console.log("The value of a + b is ", a + b);
console.log("The value of a - b is ", a - b);
console.log("The value of a * b is ", a * b);
console.log("The value of a / b is ", a / b);

//Assignment operators
var c = b;
c += 2; // c = c + 2;
c -= 2; // c = c - 2;
c *= 2; // c = c * 2;
c /= 2; // c = c / 2;
//console.log(c);

//Comparison operators
var x = 34;
var y = 56;
console.log(x == y);
console.log(x >= y);
console.log(x <= y);
console.log(x > y);
console.log(x < y);

//Logical operators
//console.log(true && true); //this one needs atleast one false;
//console.log(true && false);
//console.log(false && true);
//console.log(false && false);

//console.log(true || true); // this one needs atlest one true;
//console.log(true || false);
//console.log(false || true);
//console.log(false || false);

//console.log(!false); // this works opposite;
//console.log(!true);

//Functions in Javascript
//DRY = do not repeat yourself
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
c1 = avg(4, 6);
c2 = avg(14, 16);
console.log(c1, c2);

//Conditionals in Javascript
//if-else statement
var age = 40;
if (age > 18) {
    console.log('you can drink alcohol');
} else {
    console.log('you cannot drink alcohol');
}

//single if statement
var age = 50;
if (age > 18) {
    console.log('you are adult');
}

//if-else Ladder
var age = 15;
if (age < 10) {
    console.log('you are a kid');
} else if (age < 18) {
    console.log('you are a teen');
} else if (age > 18) {
    console.log('you are an adult');
}


//Loops in Javascript
//For loop
var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for (var i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

arr.forEach(function(element) {
    console.log(element);
})

//While loop
//let j = 0;
//const ac = 0;
//ac++;
//ac = ac + 1;

let j = 0;
while (j < arr.length) {
    console.log(arr[j]);
    j++;
}

//do-while loop
do {
    console.log(arr[j]);
    j++;
} while (j < arr.length);


//Break and Continue statement
var arr = [1, 2, 3, 4, 5, 6, 7];
for (var i = 0; i < arr.length; i++) {
    if (i == 2) {
        //break;
        continue; // it means to cancel this illtration and continue another illtration
    }
    console.log(arr[i]);
}


//Array Methods
let myArr = ["fan", "camera", 34, null, true, "harry"];
console.log(myArr.length);
//myArr.pop();// last se ek element hatane ke liye
//myArr.push("harry");// to add that element
//myArr.shift();// eject out first element
console.log(myArr.unshift("harry")); //add that element on first place
console.log(myArr);

//Strings Methods in Javascript
let myLovelyString = "Nikita is a good girl";
console.log(myLovelyString.length);
console.log(myLovelyString.indexOf("good")); //index batata hai vo konsi place se start hora hai and it tells first occurance we can also use lastindex
console.log(myLovelyString.slice(0, 3)); // slice wala string utne hi character show krta hai jitne ki baat ki gayi hai
d = myLovelyString.replace("Nikita", "ishita");
console.log(d, myLovelyString);

//Dates in Javascript
let myDate = new Date();
console.log(myDate);
console.log(myDate.getTime());
console.log(myDate.getFullYear());
console.log(myDate.getDay());



//DOM Manipulation
let elem = document.getElementById('click');
console.log(elem);

let elemclass = document.getElementsByClassName("container");
console.log(elemclass);
//elemclass[0].style.background = "yellow";
elemclass[0].classList.add("bg-primary");
console.log(elemclass[0].innerHTML);
console.log(elemclass[0].innerText);

tn = document.getElementsByTagName('button');
console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "this is a created para";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innerText = "this is a created bold";
tn[0].replaceChild(createdElement2, createdElement);
//removeChild(element);// this removes an element



//Selecting using Query
sel = document.querySelector('.container');
console.log(sel);
sel = document.querySelectorAll('.container');
console.log(sel);

function clicked() {
    console.log('the button was clicked')
}
window.onload = function() {
    console.log('document was loaded');
}


//Events in Javascript
firstContainer.addEventListener('click', function() {
    //document.querySelectorAll('.container')[1].innerHTML = "<b> we have clicked </b>";
    console.log("clicked on container");
})
firstContainer.addEventListener('mouseover', function() {
        console.log("mouse on container");
    }) // we have mouseout, mouseup, mousedown events




//SetTimeout and setinterval
logKaro = () => {
        console.log("i am your log");
    }
    //setTimeout(logKaro, 2000);// setTimeout to cancel karne ke liye clearTimeout(clr)/clearInterval(clr) ka use karte hain
clr = setInterval(logKaro, 2000); // it will show the context after every second //clr will help the context to stop occuring after every second



//Arrow functions
function summ() {
    return 5;
}
summ = (a, b) => {
    return a + b;
}


//Local Storage in Javascript
//localStorage
//localStorage.clear- to clear the storage data
//localStorage.setItem('name', 'harry')
//localStorage.getItem('name') - to get that particular item in the storage data
//localStorage.removeItem('name')- to remove a single item
//localStorage.clear()- to clear all the items


//JSON- it will accept single quote
obj = { name: "harry", length: 1, a: { "this": "that" } };
jso = JSON.stringify(obj);
console.log(typeof jso);
parsed = JSON.parse('{"name": "harry", "length":1, "a": {"this": "that"}}');
console.log(parsed);


//Template Literalsm- Backticks
a = 34;
console.log('this is my ${a}');