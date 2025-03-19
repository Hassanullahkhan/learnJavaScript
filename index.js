// let a = 20;
// a = 30;


// const c = 29;
// c = 20;
// console.log(c); // throws error


// Primitive dataTypes


// let marks;
// console.log(marks);

// let value = null;
// console.log(value);

// let decision = true;
// console.log(decision);

// Arithmetic Operators

let a = 10;
let b = 8;

// console.log(a / b);

// Unary Operators

// Is a operator that acts on a single operand +x, Examples are

// a++, a-- post increment operators
// ++a , --a pre increment operators

// Assignment Operators

// let x = 10;

// a = a + 10 can be written as a+=10
// z = z - 10 can be written as z-=10
// x = x - 10 can be written as x-=10

// a += 4;
// console.log(a);

// a -= 6;
// console.log(a);

// // b *= 10;
// // console.log(b);

// b /= 2;
// console.log(b);


// Comparision Operators

console.log(a > b);

// Strict EQuality '= = =', vs Lose EQuality '= ='
// Def. Value must be same, DataType of that value must also be same

// loose equality// Def. when we use loose equality operator, only the value is checked to determine equality, and it returns a boolean answer

console.log(10 == '10'); // does not check dataType gives true
console.log(14 === '14'); // checks data Type as well then gives output , if dataType matches then gives True

// Ternary Operator

// Syntax: (condition)? if true then Val1 : else Val2

let marks = 1990;
let result = (marks >= 80) ? 'You get an A' : 'You get a B';

console.log(result);

// Logical Operators

// logical operators are used to connect two or more operations based on the criteria

// There are
// && and 
// || or 
// ! not 
// And (&&);
// The logical AND operator is used to evaluate if both the conditions given are true . It returns true only if both conditions are true. if any one of the conditions or operands is false or 0, will return false. 

// OR (||);
// if any one of the conditions is true, it will give true, 
// if all of the conditions are false, it will give false, otherwise True

// working with Non-Booleans (Falsy and Truthy)

console.log(typeof (false || 7));

console.log(false || 11 || 18 || 26);
// does not check rest conditions , This is called shortcircuiting


// Loops
// for (start or initialization ; condition or where to stop ; increment or updation)


for (let i = 1; i <= 19; i++) {
    console.log("hassan " + i);
}

console.log("Reverse Loop");

// Reverse counting

for (let j = 10; j >= 1; --j) {
    console.log("khushbakht" + j);

}

// for loop and if statement combined

// break and continue

// continue means skip iteration and move on to the next

for (let k = 1; k <= 10; k++) {
    if (k == 2)
        continue;
    else
        console.log(k);

}

// while loop 
// initialization
// while (condition) {

// Logic ...
//     updation ..
// }

let o = 1;

while (o <= 10) {
    console.log(o + " Cg125");
    o++;
}

// this is while loop logic

let z = 1;

while (z <= 40) {
    console.log("Don't Print Here");
    z++;
}


// let q = 1;

// while (q <= 5) {
//     console.log("inside loop");
//     if (q == 2) {
//         continue;
//     }
//     else
//         console.log("hi");
//     q++;

// }

// do while loop
// initialization , updation, while (condition)

let doWhile = 1; // initialization

do { // do
    // logic
    console.log(doWhile);
    doWhile++ // <- increment

} while (doWhile == 0); // condition

let dWR = 10;

do {
    console.log("Print Here " + dWR);
    dWR--;
} while (dWR > 0);

// in do while loop there is one flaw, the 1st iteration gets executed without iteration check against while loop and for loop
// DO while loop executes the 1st time

//`` this is backticks, right side of 1

//  let firstName = 'hassan'; // output [hassan]
//  console.log(firstName);

//  let lastName = new String ('khan'); // output [String = 'hassan']
//  console.log(lastName);

// String Manipulation
//   Operation

//   concatenation of strings through '+'
//   substring of strings 
//   length of strings
//   upper, lower of strings
//   charAt of strings 
//   indexOf of strings

let op1 = 'english '
let op2 = 'urdu'
let op3 = 'Saraiki'
let op4 = 'Sindhi'
let op5 = 'Balochi'

// let finalAns = op1 + op2;
// through backticks ``
let finalAns = `${op1}and ${op2}& ${op3}and ${op4}`; // using backticks and variables for string concatenation
console.log(finalAns);

console.log(op2.length);
console.log(op2.toUpperCase());
console.log(op5.toLowerCase());

// split = sentece  = hello jee kase ho

let words = op4.split("");
console.log(words);

let sentence = "hello jee \"kaise\" ho saare"

console.log(sentence);

// let some = sentence.join('-');
// console.log(some);

// Functions

function getAvg(num1, num2) {
    let avg = (num1 + num2) / 2;
    console.log("Average " + avg);

}
getAvg(5, 6);

function getSum(a, b, c) {
    let sumOf = a + b + c;
    return sumOf;

}
let printSum = getSum(2, 3, 5);
console.log(printSum);

// no function works without calling the Function

function getMyName(firstName, lastName, NIC) {
    let fullName = firstName + " " + lastName + " " + NIC;
    // console.log(fullName);
    return fullName; // when you need to return you have to store the call function in a variable and then print
}
let myFullName = getMyName("shazia", "khursheed", "42101-25212420-5");
console.log(myFullName);

// NOTE: when passing return if there is code written below the return statement then code will not be executed

// You can also do this/. YOu can write also write the function logic with the return keyword . we can call the function without saving it inside a varible

function getMultiple(x, y) {
    return x * y;
}
let ans = console.log(getMultiple(10, 4));

// funtion expression

let getDivide = function (d, e) {
    return d / e;
}

let answerK = getDivide(9, 3);
console.log(answerK);

let getModulus = function (f, g) {
    return f % g;
}

let answerZ = getModulus(998, 3);
console.log(answerZ);


let sqNumber = function (num) {
    return num ** 2;

}
let save = sqNumber(4);
console.log(save);

// ARROW FUNCTIONS ES6

function getExp(k, l) {
    let kans = k ** l;
    return kans;
}
let save1 = getExp(9, 5);
console.log(save1);


let okExp = (m, b) => {
    let answ = m ** b;
    return answ;
}

// let save2 = okExp(3, 4);
// console.log(save2);

console.log(okExp(3, 5));

// REFERENCE TYPES, OBJECTS, ARRAYS, ARRAYS BUILT IN METHODS, FUNCTION KE SAATH ARRAYS

//objects in javascript is a collection of key:vlaue pairs

let obj = {
    name1: "hassan",
    age: 35,
    color: "fair",
    height: "6 ft 2inch",
    weight: "84 kg",
    greetings: function () {
        console.log("Hello how is everyone");

    }
};

console.log(obj);
obj.greetings();

for (let key in obj) {
    console.log(`${key}: ${typeof (obj[key])}`);

}

//shallow copy, deep copy

let arr = [1, 2, 4, 5, 7];
console.log(typeof (arr));
console.log(arr);

let brr = new Array('hassan', 1, true); // array constructor
console.log(brr);

// u can access arrays with index

//index = arr[position]

console.log(arr[3]); // index

// array built in methods

// push, pop, shift, unshiftm slice,splice, map, filter, reduce, sort, indexOf, charAt, find

console.log(arr.push(10));
console.log(arr);

console.log(brr.pop());
console.log(brr);


// shift 
brr.shift();
console.log(brr);


// unshift add leftmost item
brr.unshift("hassan khan");
console.log(brr);
arr.push(20, 30, 59);
console.log(arr);

// console.log(arr.slice(1, 4), "array slice");
// console.log(arr);

// splice -> array ke content ko change karsakte hein, insert, replace, remove

arr.splice(0, 3, "hassan");

console.log(arr); // after splice

arr.splice(1, 0, "kunal");
console.log(arr);


// map filter

//to run function in an array

let arr1 = [3, 6, 9];

let result2 = arr1.map((number) => {
    return number * number;
})

console.log(result2);


let brr1 = [8, 7, 5];

brr1.map((numb, index) => {
    console.log(numb);
    console.log(index);
})

let arr2 = [10, 20, 30, 40, 11, 21, 44, 51];
let arr23 = ["hassan", "komal", "huzaifa", "hamza", "soifia", 21, 44, 51];


let evenArray = arr.filter((num3) => {
    // number divisible by zero
    return num3 % 2 === 0;
    // if (num3 % 2 === 0) {
    //     return true;
    // }
    // else {
    //     return false;
    // }

});

console.log(evenArray);

// let result3 = arr23.filter((value) => {
//     if (typeof(value) === 'string') {
//         return true;
//     }
//     else {
//         return false;
//     }
// });

// console.log(result3);

let result3 = arr23.filter((value) => {
    if (typeof (value) === 'string') {
        return true;
    }
    else {
        return false;
    }
});

console.log(result3);

// REDUCE // aap array ko reduce karna chahta hai based on your logic

let arre = [10, 20, 30, 40, 111];

let result5 = arre.reduce((acc, curr) => {
    return acc + curr;
}, 0);

console.log(result5);

let arrSort = [9, 7, 5, 3, 4, 6, 1, 7, 4, 3, 5];

arrSort.sort();

console.log(arrSort);


// array sort in desc order
arrSort.sort((a, b) => b - a); // This works
console.log(arrSort);


console.log(
    arrSort.indexOf(6));


let arrforEach = [40, 45, 50, 62, 77];

arrforEach.forEach((value, index) => {
    console.log("Number ", value, "index ", index);
})

let arrfor = ["Hassan", "Alisha", "Ayaan"];

for (let i = 0; i < arrfor.length; i++) {
    console.log("Name: ", arrfor[i]);

}


for (let index = 0; index < arrfor.length; index++) {
    console.log(arrfor[index]); //crucial add element when log for loop

}


for (let key in obj) {
    console.log(key, " ", obj[key]);

}

// for of loop

let arrforOf = [10, 23, 55, 67, 99];

for (let value of arrforOf) {
    console.log(value, "forof Loop");
}

let myName = ["Hassan", "42101-235235235-5", false];

for (i = 0; i < myName.length; i++) {
    if (i == 0) {
        console.log("Name: ", myName[0]);
    } else if (i == 1) {
        console.log("NIC: ", myName[1]);
    }
    else if (i == 2) {
        console.log("DrivingLicense: ", myName[2]);
    }
}


// arrays with functions // arrays ka function ke saath behaviour

// array
let arrFunc = [10, 2, 30, 4, 5, 50, 6]; // can also be done with reduce


// array passed as an argument in (arrFunc) function
function getSum(arrFunc) {
    let len = arrFunc.length
    sum = 0;
    for (index = 0; index < len ; index++) {
       sum = sum + arrFunc[index];
    }
    return sum;
}
let totalSum = getSum(arrFunc);
console.log(totalSum);


// function getSome(arrFunc) {
//     // let len = arrFunc.length
//     sum = 0;
//     arrFunc.forEach((value) => {
//        sum = sum + value
//     })
//     return sum;
// }
// let sumSum = getSome(arrFunc);
// console.log(sumSum);


// can also be created into a variable = functionexpression

let wowSum = function getSome(arrFunc) {
    // let len = arrFunc.length
    sum = 0;
    arrFunc.forEach((value) => {
       sum = sum + value;
    })
    return sum;
}
 let seriousSum = wowSum(arrFunc);
console.log(seriousSum);

// CALLBACK AND HOISTING

// // hoisting ==> process
// var dec
// func dec

// shift to the top of the scope

// function declaration and Variable declaration

// you can call function at the top even if the function defined is written down


// in Variable declaration, variable can be declared at the top but not defined thus give output undefined

