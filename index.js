

// setTimeout

// setTimeout(callback, time_interval)
//   when you are giving time interval in this function , it will be in ms (millisec)

// setTimeout(()=>{
//     console.log("Hello World");
// }, 2000);



// Example 1 

let arr = [1,2,3,4,5];

for (let i = 0; i < arr.length; i++) {
    setTimeout(()=>{
        console.log(arr[i]);
    }, arr[i]*1000);
}


for (var i = 0; i < arr.length; i++) {
    setTimeout(()=>{
        console.log(arr[i]);
    }, arr[i]*1000);
}


// Example 2 
// setTimeout(() => {
//     for (let i = 0; i < arr.length; i++) {
//         console.log(arr[i]);
//     }
// }, 5000);



// CLOSURES :::: in JS 
// it is a combination of inner function and the lexical environment created by inner function.
// We are able to access this variable inside inner function because of closures.


// function outer (){
//     let a = 10;

//     function inner (){
//         console.log(a);
//     }

//     inner();
// }

// outer();



// function add(){

//     setTimeout(() => {
//         console.log("Inside settimeout");
//     }, 1000);

//     setTimeout(() => {
//         console.log("Inside settimeout ==== 2");
//     }, 0);

//     console.log("B");
// }

// add();


// settimeout 
// web api function  : it does not gets executed directly by your JS engine, it gets executed using event loop.


// this function will be sent to the callback queue
//  once your complete js code execution is done which means your execution context is empty after that event loop will start looking towards your callback queue and will pass this function to the execution context


//  event loop always keep an eye on call stack, the moment it gets empty , it will push the function from callback queue to the call stack