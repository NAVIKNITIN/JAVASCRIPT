// Regular expression take 2 parameter ---> patter and flag
// let pattern = 'hello my Name is nitin. i live in chembur';
// let regexp = new RegExp(pattern);
// let flag =  "gi";
// console.log(regexp,pattern);


// g -->    looking fo r whole text
// i -->  case sensitive




// without using regular expression

// let exp = /nodejs/gi;
// console.log(exp);


// test method  ---> return  boolean
// without using 
let a = "hello world. i am nitin navik .12345467587";
let regexp=/\d+/gi;

console.log(regexp.test(a));


// match method
console.log(a.match(regexp));

// search ---> return index 
console.log(a.search(regexp));


// replace
console.log(a.replace(/nitin/,'bipin'));

// \d --->digit
console.log(a.match(regexp));


// escape character data(\)

// peroid(.)
const c = /[n]./gi;
console.log(a.match(c));

// cart ^ --->start with
const cart= /^hello/gi;
console.log(a.match(cart));






