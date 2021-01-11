// const numbers = [0,3.14,9, 5,6,20];
// console.log(numbers.length);
//console.log(numbers);
// console.log(numbers[1]);
// let lastindex = numbers.length - 1;
// console.log(lastindex); // 5;
// console.log(numbers[lastindex]);

//arrays --> Array(), length, concat, indexOf(),slice(), splice(), 
//join(),toString(), includes(), lastIndexOf(), isArray(),fill()
//push(),pop(), shift(), unsfhit()


// ARRAY METHOD

// const arr = Array();
// console.log(arr);
// let egihtemptyArrvalues = Array(8).fill('vipul');
// console.log(egihtemptyArrvalues);

//concat() ---> MERGE THE LIST

// const firstList = [1,2,3];
// const secondList = [4,5,6];
// const thirdList = firstList.concat(secondList);
// console.log(thirdList);

//length --> DISPLAYS LAST INDEX
// const backendcourses = ["nodejs","dot net", "java"];
// console.log(backendcourses.length);


// const frontendCourses = ["angular","rectjs","javascript","typescript"];
// console.log(frontendCourses.indexOf("typescript"));
// console.log(frontendCourses.lastIndexOf('typescript'));


//includes()

// const db = ['sql','mongodb', 'couchdb','firebase'];
// console.log(db.includes('sql'));

//isArray()
// console.log(Array.isArray(numbers));

// let n = 100;
// console.log(Array.isArray(n));

//toString() --> convert array to string
// console.log(numbers.toString());

//join --> 
// console.log(db.join(" $ "))

//slice --> cut out a multiple items in range

// console.log(db.slice(1,3));

//splice --> remove the data
// console.log(db.splice(0,1));
// console.log(db);

//push ==== adding the data

// console.log(db.push('FAWN'));
// console.log(db);

//pop ==== removing the data

// console.log(db.pop());
// console.log(db);

//shift ---> remove the data at the beginning

// console.log(db.shift());
// console.log(db);

//unshit --> add the data at the beginning

// console.log(db.unshift("AZURE"));
// console.log(db);