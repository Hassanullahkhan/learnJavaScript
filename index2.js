// CALLBACK AND HOISTING

// aik aisa process hai jo var dec aur jo func shift kardeta hai to the top of their scope

{ // block scope

// function meraNaam(finalName) {
// console.log(finalName);

// }  ye function apne aap uper aya jab humne console.log() line 3 par execute kya





// function call ko uper execute kya hai , function automatically uper scope ma ajata hai 

// this is function hoisting



console.log("Hussain");
console.log("silajit");


function meraNaam(finalName) {
console.log(finalName);

}

console.log("babbar");
}


//// khali var keyword ki baat horahi hai ========== Variable mein khaali variable declare uper hojata hai mgr define nahi hota isilye undefined value ati hai

// this is var hoisting

console.log(number); // undefined ara ha hai , Variable ki declararion oooper move karti hai

var number = 29


// same case using let and const keyword

// shows error
// cannot access age before initialization , reference error


// cannot be executed function hoisting if there is function expression


// sayHello();

// let sayHello = function sayHello() {
//     console.log("Hello");
    
// }


// throws Error cannot access function before initialization


// hoisting does not work in function expression

// CLASS HOISTING

// you define a blueprint in  class like age, weight, height of a person

// Class ke blueprint ko execute karke jo result aae ga use hum object kehte hein

// OBJECT CLASS SE pehle execute nhi hosakta

// function call stack ek container hota hai jis ke andr LIFO format m data store hota hai

// function ki tracking rakhna ke konsa function kis function ke andr call hua hai this is called callStack

// LIFO

// Function ko first class citizen kyun kehte hein

// function ke andr variable ko assign karsakte hein
// as an argument pass karsakte hein

// return function, values, string, function bhi return karaskte hein

// function ko Data Structures ke andr use karskte hein

// Obj ke andr function ko as a property bhi use karsate hein

// isis wajah se function lko first class citizen khtenhein



function greetme(greet, fullName) {
    console.log("hello ", fullName);
    greet();    
}

function greet () {
    console.log("greetings for the day");
      
}
greetme( greet,"hassan");  


function solve(number) {
    return function(number) {
        return number * number;
    }
}

let ans = solve();
let fnlAns = ans(7);
console.log(fnlAns);


// function ko Data Structures ke andr use karskte hein

const arr = [
    function(a, b) {
        return a + b;
    },
    function(a, b) {
        return a - b;
    },
    function(a, b) {
        return a * b;
    },
    function(a, b) {
        return a / b;
    }
]

let first= arr[2];

let answer = first(3, 6)
console.log(answer);
