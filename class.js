

const print = console.log;
class Person{
    courses = ["javascript" ,"reactjs", "nodejs","mongodb" ];
    constructor(firstname,lastname,age,country){
            // console.log('hello nitin');
            this.firstname = firstname;
            this.lastname = lastname;
            this.age =age;
            this.country = country;
            this.score = 10;
          

    }
    getFullname(){
        let fullname = (`${this.firstname} ${this.lastname}`);
        return fullname;
    }
    get getscore(){
        return this.score;
    }
    set getscore(value){
        Person.score+=value;
    }
    get getcourses(){
        return  this.courses;

    }
    set getcourses(data){
        this.courses=[...this.courses,data];
    }
// 
getPersonInfo(){
    let fullname = this.fullname;
    let skills = this.courses.length >0 && this.courses.slice(0 , this.courses.length -1) .join(', ')
        + ` and ${this.courses[this.courses.length -1]}`;
    // let skills = this.courses;
        let filteredskills = skills ? `user wants to know the courses like ${skills}` : "";
        // console.log(filteredskills);
        let userinfo = `${this.getFullname()} is ${this.age}. He lives in ${this.country}. ${filteredskills}`;
        return userinfo;
}

static   favoriteskills(){
    let skills = ["html","css","javascript","reactjs"];
    const b=Math.floor(Math.random() * skills.length);
    return skills[b];

}
// AO(){
//     setTimeout(() => {
//        let a= Person.favoriteskills()
//         console.log(a);
//     }, 2000);
// }

static clock (){
    let d= new Date();
    let year= d.getFullYear();
    let Month = d.getMonth();
    let day = d.getDay();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();

    let watchtime = `Date:${Month}/${year}/${day} Time:${hours}:${minutes}:${seconds}`;
    // console.log(watchtime);

    return watchtime;
  
}

watch(){
    setInterval(() => {
        let Time = Person.clock();
        console.log(Time);
        
        // console.log(Person.watchtime);

    },2000);
}
address(){
    console.log("thane");
}
}

// const p = new Person();
// const person= new Person('nitin','navik',21,'india');
// let customer = person.getPersonInfo();
// console.log(customer);

// print(Person.favoriteskills());
// person.AO();
// Person.clock();
// p.watch();  




// console.log(person);
// console.log(person);
// console.log(person.getFullname());
// console.log(person.getscore);
 
// Person.getscore = 5;
// console.log(Person.getscore);


// getter method ---> allow us to fetch the value from the object
// setter method --->allow us to modify the value of the object

// console.log(person.getcourses);
// person.getcourses="akash";
// person.getcourses="ashish";
// console.log(person.getcourses);



// Inheritance 
class Student extends Person{
    constructor(firstname,lastname,age,country){
        super();
        console.log("hello boss");
    }
    saysomething(){
        console.log("hello lucifer");
    }
    address(){
        console.log("chembur");
    }
    fetchparentaddress(){
        super.address();
    
    }
};


const student= new Student('bipin','navik',24,'india',"city");
console.log(student);
console.log(student.getFullname());

student.saysomething();
student.address();

let userobj=`{[    
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    }
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    }
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    }
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    }]
}`;

student.fetchparentaddress();



let u = {
    "name":"nitin",
    "country":"india"
};
const user = JSON.stringify(u);
console.log(user);

let ab = JSON.parse(user);
console.log(ab);


