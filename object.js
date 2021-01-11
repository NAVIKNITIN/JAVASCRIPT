let objects = [{
    name:'nitin',
    price:1000,
    field:"developer",
    // getobject(){
    //     console.log('http//://www.please visit on www.google.com')
    // }
}];

// fetch ----->get
console.log(objects['field']);
console.log(objects['name']);

// insert ---->create
objects['discount']="20% off";
console.log(objects['discount']);


// update 
objects['price']=500;
console.log(objects["price"]);


// delete
delete  objects["name"];
console.log(objects);


// objects.getobject();


for(let object in objects){
    console.log(objects[object]);
    console.log(objects);
}