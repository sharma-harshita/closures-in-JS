// setTimeout in JS 

// function displayName (){
//     console.log("Before settimeout");

//     setTimeout(() => {
//         console.log("Inside setTimeout");
//     }, 0);

//     console.log("After settimeout");
// }

// displayName();



for (let a = 0; a < 4; a++) {
    setTimeout(() => {
        console.log(a);
    }, 3000);
}


// JS synchronous 
// JS async

// web apis functions = setTimeout, fetch = server calls, when you want to fetch data 





//Closures


// //execution context
// var age = 24;

// function display (){
//     var age = 30;

//     console.log("age", age);
//     function displayAge (){
//         console.log("Inner function : ", age);
//     }

//     displayAge();
// }

// display();


// // lexical environment
// function Counter() {
//     var counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     };

//     return IncreaseCounter;
// }

// var counter = Counter();
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 
// console.log(counter()); 




// setTimeout   // predefined function in JS

// this function takes two params, first is a callback function another is the time duration 
// once the time duration is completed, then the callback function should be called


