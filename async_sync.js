
// user((data)=>{
//   console.log(data);
//   user2((item)=>{
//     console.log(item);
//   })
// })
// function user2(callback){
//   setTimeout(()=>{
//     callback({name:'bipin',id:2});
//   },1000);
//   }


// function user(callback){
//   setTimeout(()=>{
//     callback({name:"nitin",id:1});
//   },2000);};



//   Promises 
// let p= new Promise((resolve,reject)=>{
//     resolve('hello boss');
//     reject('error');
// });
// p
// .then((data)=>{
//     console.log(data);
// })
// .catch((error)=>{(error.message)}
// )



function user(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("nitin");
            reject(new Error("something went wrong"));
        },2000);
    })
}

function  user2(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("bipin");
            reject(new Error('something went wrong'));
        },2000);
    })
}

let u = user();
u.then((data)=>console.log(data))
.catch((error)=>console.log(error));

let r = user2();
r.then((data)=>console.log(data))
.catch((error =>console.log(error)));
