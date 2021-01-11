// set item()
// get item ()
// remove item() 
// clear item()
// key()

localStorage.setItem('username','nitin');
localStorage.setItem('password','boss');

console.log(localStorage);

let username = localStorage.getItem("username");
let password = localStorage.getItem("password");
document.write("username :" ,username );
document.write("password:",password)

console.log(username);


localStorage.removeItem("username");
console.log(localStorage);

localStorage.clear();

localStorage.key([0]);
console.log(localStorage);




