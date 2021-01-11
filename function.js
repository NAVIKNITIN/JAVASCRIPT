// Function with name 

// function user(){
//     console.log("hello world");
// } 
// user();


// function with out name or anonymous function.
// let user = function(){
//     console.log("hello world");

// }
// user();


// fat function or arrow function 

// let name = () => document.write("nitin");
// name();


// function with parameter
// let radius=prompt("enter radius:");
// let pi = 3.17777 ;
// let circle = (radius,pi) => { 
//     console.log(`radius is :${radius} and the pi is ${pi} `); //${} is used to print the value of the variable
// }
// circle(radius , pi);


// let userinfo = (username ,password) => {
//     console.log(`username is ${username} and password is ${password}`);
// }
// userinfo("nitin","lucifer");

// closure
// function day() {
//     let day = "monday";
//     let year = 2020;
//     console.log(`todays day is :${day}`);
//     function years(){
//         console.log(`year is : ${year}`);
//     }
//     return years();

// }
// day();

//constructor - A class can have only one constructor

// class family {
//     constructor (brother ,sister){
//     this.brother = brother;
//     this.sister = sister;
//     }
    
// }
// let familia = new family("nitin" , "puspa");
// console.log(familia);

// pre increment= means "+="
// post increment means "=+"
// pre decrement means "-="
// post decrement means "=-"
// var a=2;
// console.log(a++);
// var a=2;
// console.log(++a);
// var a=2;
// console.log(a--);
// var a=2;
// console.log(--a);


// recursive function
// function power(num , exponent){
//     if(exponent == 0){
//         return 1;
    
//     }
//     else {
//         return num * power(num , exponent -1); 
//     }
// }
// let Power = power(2,3);
// console.log(Power);
