//                   Name

let firstName = "Yrii";
let lestName = "Fedorov";
let literalFullName = `${firstName}${lastName}`
console.log(literalFullName);

//                  Square

findSquare(25,50)
function findSquare(a,b){
    const square = a * b;
    console.log(square);
}

//                 Exponent

let result = 10 ** 6;
console.log(result);

//                 Random

console.log(Math.floor(Math.random() * 50));

//                 Numer

let number = 5;
if (number < 0) {
    console.log("negative value")
}
else {
    console.log("positive value")
}

//                Text

let text = "hello";
if (text.length > 1) {
    console.log(text.slice(-2, -1))
}

//              Calendar

let month = 3;
  switch(month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;  
    case 6:
        console.log("June");
        break; 
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("Oktober");
        break;
    case 11:
        console.log("November");
        break;  
    case 12:
        console.log("December");
        break;
    default:
        console.log("there is no such month")
}

//                  Password

let password = "jdhftti&";
if (password.length > 5) {
    if (password.indexOf("&") > 0) {
    console.log("this password is strong")
  }
} 
    else {
    console.log("this password is weak")
}

//                 Variables

let a = 1;
let b = 7;
if (typeof a == "number" && typeof b == "number") {
    console.log(a+b)
} 
    else {
    console.log("Sum of those items can’t be counted");
}

//                 variables2

let textOne = "8531";
let textTwo = "9845";
    if(typeof textOne == "string" && typeof textTwo == "string" && textOne.length == textTwo.length) {
        console.log("those items are strings and they’re equal");
} 
    else {
        console.log("items are not compareble");
}
