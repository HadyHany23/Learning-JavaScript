document.write("Hello<br>");
document.write("Hello<br>");
console.log("hi");
console.error("Enter correct password");
console.table(["osama", "Hady", "Ahmed"]);
console.log("Hello from %cJS", "color:red; font-size:40px");
console.log(typeof "Hady");
var user = "Ahmed";
console.log(user);
console.log(user);
console.log(hello);
//change element with id hello into option
hello.innerHTML = "Option";
/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/
console.log("welcome \\ to 'js'");
console.log("welcome \n to \njs");

let a = "Hady";
let b = "Hany";
let c = "Talaat";
let d = "Harb";
console.log(a + " " + b);
console.log(a + " " + b + "\n" + c + " " + d);
console.log(`${a} "" ${b} ${c} 
${d} ${2 + 6}`);

let markup = `
fjfjfjfj
fjfjjffjj ${a}
fjfjfjfj`;
console.log(markup);

const e = new Date("2015-03-25");
document.getElementById("demo").innerHTML = e;

var title = "Hello Hady";
document.getElementById("title").innerHTML = title;
let text = "welcome to JS";
document.getElementById("text").innerHTML = text;
const date = "2015/03-25";
let result = date.repeat(2);
document.getElementById("date").innerHTML = date;
document.write(result);

/*
  - + Unary Plus [Return Number If Its Not Number]
  - - Unary Negation [Return Number If Its Not Number + Negates It]
  Tests
  - Normal Number
  - String Number
  - String Negative Number
  - String Text
  - Float
  - Hexadecimal Numeral System => 0xFF
  - null
  - false
  - true
*/

console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"Osama");
console.log(+"15.5");
console.log(+0xff);
console.log(+null);
console.log(+false);
console.log(+true);
console.log(-100);
console.log(-"100");
console.log(-"-100");
console.log(-"Osama");
console.log(-"15.5");
console.log(-0xff);
console.log(-null);
console.log(-false);
console.log(-true);
console.log(Number("100000"));

console.log("Challenge");
let aa = 10;
let bb = "20";
let cc = 80;
console.log(++aa + +bb++ + +cc++ - +aa++);
console.log(++aa + -bb + +cc++ - -aa++ + +aa);
console.log(--cc + +bb + --aa * +bb++ - +bb * aa + --aa - +true);
console.log("Challenge");
let dd = "-100";
let ee = "20";
let ff = 30;
let gg = true;
console.log(-dd * +ee); // 2000
console.log(-dd + ++ee + ++ee + ff); // 173

console.log("Numbers");
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10);
console.log(1000000.0);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_VALUE);

console.log("number methods");
console.log((100).toString());
console.log((100.1).toString());
console.log((100.557555).toFixed(2)); //betraga3 2 decimals bas
console.log(Number("100 Osama"));
console.log(+"100 Osama");
console.log(parseInt("100 Osama"));
console.log(parseInt("Osama 100 Osama"));
console.log(parseInt("100.500 Osama"));
console.log(parseFloat("100.500 Osama"));
console.log(Number.isInteger("100"));
console.log(Number.isInteger(100.5));
console.log(Number.isInteger(100));
console.log(Number.isNaN("Osama" / 20));

console.log("math objects");
console.log(Math.round(99.2));
console.log(Math.round(99.5));
console.log(Math.ceil(99.2)); // bytala3oo lee 2a3la value (100)
console.log(Math.floor(99.9)); // bynazeloo le 23la value (99)
console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.max(10, 20, 100, -100, 90));
console.log(Math.pow(2, 4));
console.log(Math.random());
console.log(Math.trunc(99.5)); // byraga3 el int bas

console.log("Challenge");
let aaa = 100;
let bbb = 2_00.5;
let ccc = 1e2;
let ddd = 2.4;
// Find Smallest Number In All Variables And Return Integer
console.log();
// Use Variables a + d One Time To Get The Needed Output
console.log(); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log();
console.log();
console.log();
console.log();
// Use Variables b + d To Get This Valus
console.log(); // 66.67 => String
console.log(); // 67 => Number

console.log("String methods");
let theName = "  ahmed  ";
console.log(theName);
console.log(theName[1]);
console.log(theName[5]);
console.log(theName.charAt(1));
console.log(theName.charAt(5).toUpperCase());
console.log(theName.length);
console.log(theName.trim()); // bysheel el masafat
console.log(theName.toUpperCase());
console.log(theName.toLowerCase());
console.log(theName.trim().charAt(0).toUpperCase());
console.log(
  theName.trim().charAt(0).toUpperCase() + theName.trim().slice(1).toLowerCase()
);
let word = "Elzero Web School";
console.log(word.indexOf("Web"));
console.log(word.indexOf("Web", 8)); //haydawar 3ala kelmet web  men index 8
console.log(word.indexOf("o")); // 5
console.log(word.lastIndexOf("o")); // 15 // bygeeb 25er o fee el kelma
console.log(word.slice(2, 6)); // hay2ta3 men index 2 le 6
console.log(word.slice(-5, -3)); //hay3ed men el 25er
console.log(word.repeat(5));
console.log(word.split("", 6));
console.log(word.length);
console.log(word.substring(2, 6));
console.log(word.substring(6, 2));
console.log(word.substring(-10, 6)); // 0 - 6
console.log(word.substring(word.length - 5, word.length - 3));
console.log(word.includes("Web"));
console.log(word.includes("Web", 8));
console.log(word.startsWith("E"));
console.log(word.startsWith("E", 2));
console.log(word.startsWith("zero", 2));
console.log(word.endsWith("l"));

console.log("String challenge");
let chword = "Elzero Web School";
// Include This Method In Your Solution [slice, charAt]
console.log(chword.substring(2, 6)); // Zero
// 8 H
console.log(chword.charAt(13).repeat(8).toUpperCase()); // HHHHHHHH
// Return Array
console.log(chword.slice(0, 6)); // ["Elzero"]
// Use Only "substr" Method + Template Literals In Your Solution
console.log(chword.substring(0, 6), chword.substring(10, 17)); // Elzero School
// Solution Must Be Dynamic Because String May Changes
console.log(
  chword.trim().charAt().toUpperCase() + chword.trim().slice(1).toLowerCase()
); // eLZERO WEB SCHOOl

console.log("comparison operators");
console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100"); // Compare Value Only
console.log(10 != "10"); // Compare Value Only
console.log(10 === "10"); // Compare Value + Type
console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Compare Value + Type
console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10);
console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);
console.log(typeof "Osama" === typeof "Ahmed"); //true

console.log("Logical operators");
console.log(true);
console.log(!true);
console.log(!(10 == "10"));
console.log(10 == "10" && 10 > 8 && 10 > 50);
console.log(10 == "10" || 10 > 80 || 10 > 50);

console.log("If conditions");
let price = 100;
let discount = true;
let discountAmount = 30;
let country = "KSA";
if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  price -= 40;
} else if (country === "Syria") {
  price -= 50;
} else {
  price -= 10;
}
console.log(price);

console.log("diff types of if");
let un = "Mona";
let theGender = "Female";
let theAge = 30;
theGender === "Male" ? console.log("Mr") : console.log("Mrs");
let gender = theGender === "Male" ? "Mr" : "Mrs";
document.write(gender);
console.log(theGender === "Male" ? "Mr" : "Mrs");
console.log(`Hello ${theGender === "Male" ? "Mr" : "Mrs"} ${un}`);
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log("20 To 60")
  : theAge > 60
  ? console.log("Larger Than 60")
  : console.log("Unknown");

let amount = 0;
console.log(`The Price Is ${amount || 200}`);
console.log(`The Price Is ${amount ?? 200}`); //betraga3 el 0 bas el null la2

console.log("array");
let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];
console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);
console.log(`${myFriends[1][2]}`);
console.log(`Hello ${myFriends[3][1]}`);
console.log(`${myFriends[3][1][2]}`);
console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);
myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);
console.log(Array.isArray(myFriends));
let names = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(names);
names[names.length] = "gamal";
console.log(names);
names.length = 2;
console.log(names);

console.log("remove and add in array");
let snames = ["Ahmed", "Mohamed", "Sayed", "Alaa"];
console.log(snames);
snames.unshift("Osama", "Nabil"); //add to start of array
console.log(snames);
snames.push("Samah", "Eman"); //add at end of array
console.log(snames);
let first = snames.shift(); // shift bysheel awel index
console.log(snames);
console.log(`First Name Is ${first}`);
let last = snames.pop();
console.log(snames);
console.log(`Last Name Is ${last}`);

console.log("searching in array");
let tname = ["Ahmed", "Mohamed", "Sayed", "Alaa", "Ahmed"];
console.log(tname);
console.log(tname.indexOf("Ahmed"));
console.log(tname.indexOf("Ahmed", 2));
console.log(tname.lastIndexOf("Ahmed"));
console.log(tname.lastIndexOf("Ahmed", -2));
console.log(tname.includes("Ahmed"));
console.log(tname.includes("Ahmed", 2));
if (tname.lastIndexOf("Osama") === -1) {
  console.log("Not Found");
}
console.log(tname.indexOf("Osama"));
console.log(tname.lastIndexOf("Osama"));

console.log("sorting array");
let sortarray = [10, "Sayed", "Mohamed", "90", 9000, 100, 20, "10", -20, -10];
console.log(sortarray);
console.log(sortarray.sort().reverse());

console.log("slicing array");
let slicearray = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
console.log(slicearray);
console.log(slicearray.slice());
console.log(slicearray.slice(1));
console.log(slicearray.slice(1, 3));
console.log(slicearray.slice(-3));
console.log(slicearray.slice(1, -2));
console.log(slicearray.slice(-4, -2));
console.log(slicearray);
slicearray.splice(1, 2, "Sameer", "Samara"); // (ahtebda2 mneen, hatsheel kam,el hatdeefo)
console.log(slicearray);

console.log("joining array");
let mainarr = ["Ahmed", "Sayed", "Ali", "Osama", "Gamal", "Ameer"];
let myNewFriends = ["Samar", "Sameh"];
let schoolFriends = ["Haytham", "Shady"];
let allFriends = mainarr.concat(myNewFriends, schoolFriends, "Gameel", [1, 2]);
console.log(allFriends);
console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

console.log("for loopos");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

let friendarr = [1, 2, "Osama", "Ahmed", 3, 4, "Sayed", 6, "Ali"];
let onlyNames = [];
for (let i = 0; i < friendarr.length; i++) {
  if (typeof friendarr[i] === "string") {
    onlyNames.push(friendarr[i]);
  }
}
console.log(onlyNames);

console.log("loop control");
let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
mainLoop: for (let i = 0; i < products.length; i++) {
  console.log(products[i]);
  nestedLoop: for (let j = 0; j < colors.length; j++) {
    console.log(`- ${colors[j]}`);
    if (colors[j] === "Green") {
      break mainLoop;
    }
  }
}

console.log("practice log");
let items = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colours = ["Red", "Green", "Blue"];
let showCount = 3;
document.write(`<h1>Show ${showCount} Products</h1>`);
for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${items[i]}</h3>`);
  for (let j = 0; j < colours.length; j++) {
    document.write(`<p>${colours[j]}</p>`);
  }
  document.write(`<p>${colours.join(" | ")}</p>`);
  document.write(`</div>`);
}

console.log("while loop");
let type = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let index = 0;
while (index < type.length) {
  console.log(type[index]);
  index += 1;
}

console.log("do while");
let i = 0;
do {
  console.log(i);
  i++;
} while (false);
console.log(i);

console.log("functions");
function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}
sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}
generateYears(2016, 2021, 2020);

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
}
generate(10, 20);

console.log("default function parameters");
function sayHello(username = "Unknown", age = "Unknown") {
  return `Hello ${username} Your Age Is ${age}`;
}
console.log(sayHello());

// rest function used in function with unknown arguments
console.log("rest parameters");
function calc(...numbers) {
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result = ${result}`;
}
console.log(calc(10, 20, 10, 30, 50, 30)); //total 150
