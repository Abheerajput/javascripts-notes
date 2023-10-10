// singleton
// object literals
// object.create
    const mysym = Symbol("key1")
  const abhi = {
        name:"abhishek",
        age:20,
         [mysym]: "mykey1", 
         mysym: "mykey1", //not good method 
        "full name": "abhishek rajput",
        location:"hisar",
        isLoggedIn:false
         
  }
  abhi.greeting = function(){
    console.log("hello new user");
  }
  console.log(abhi.greeting());

  abhi.greetingtwo = function(){
    console.log( `hello new user ${this.name }`);
  }
  console.log(abhi.greetingtwo()); 
   

  //access object
  // 1st => console.log(abhi.age)
//   2nd => console.log(abhi["age"])
//  3rd => console.log(abhi.fullname)
    // 4th => console.log(abhi["full name"])
    // console.log(abhi[mysym])  key value
   // to make symbol we use square barcet [] like [mysym]


    // to change value 
    // abhi.age = 19
    // console.log(abhi.age)
    //Object.freeze(abhi) // freez is used to that no one is change objects property 


  //myArray = ["h","i"]
  // there is only 1 method to acces array  myArray [0]
  // [but in object there is many way to acces , we can define value aur key =name ; and value is abhishek; ]  
  