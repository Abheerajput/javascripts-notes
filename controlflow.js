// //if 

//      const isUserLoggedIn =true

//    const temperture =49
// if(isUserLoggedIn){

// }
// if(temperture<50){
//     console.log("less than 50")
// }
// else{   
// console.log("heighr than given temperture")
// }



//---------------------local scope----------------- let ,const/

// const number =200
// if(number>100){
//     let power = "fly"
//     console.log(`User power : ${power}`); 
// }
//     console.log(`User power : ${power}`);





//-------------------globle scope----------------- var //

// const score =200
// if(score>100){
//     var point = "fly"
//     console.log(`User power : ${point}`); 
// }
//     console.log(`User power : ${point}`);






// -------------------nested if else----------------//
// const balance  =1000
// if(balance > 5000) 
// {
// console.log("test");
// }

// if(balance < 500){
//     console.log("less than 600 ");

// }
// else if(balance < 750 ){
//     console.log("less than 800");
// }
// else if(balance < 900){
//     console.log("less than 1000");
// }
// else {
//   console.log("equal than 1000");   
// }

//         const userLoggedIn = true
//          const debitCard = true
//          const loggedInFromGoogle = false
//          const loggedInFromEmail = true
//          if(userLoggedIn && debitCard && loggedInFromEmail){
//              console.log("Allow to buy course");

//          }
//          if(loggedInFromGoogle || loggedInFromEmail){
//             console.log("User logged in");

//          }






// --------------switch case------------------//
// switch (key) {
//     case Value:
//         break;

//     default:
//         break;

// }




// const month = 5

// switch (month) {
//     case 1:
//         console.log("janunary")
//         break;

//     case 2:
//         console.log("feb")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("april")
//         break;
//     case 5:
//         console.log("may")
//         break;
//     default:
//         break;
// }


// const greeting = "Hello world!"
// for(const greet of greeting){
//     console.log(`each cahr is ${greet}`)
// }


//maps 
// const map = new Map()
// map.set('IN',"India")
// map.set('Fr',"France")
// map.set('USA',"united states of america ")
// console.log(map);
// for(const [key,value]  of map ){
//         console.log(key, ':-',value)
// }




// const myObject = {
//     'game':'NFS',
//     'game':'spiderman'
// }
// for(const [key,value] of myObject){
//     console.log(key,':-',value);
// }

// const myObject = {
//     js:'javascript',
//     cpp:'c++',
//     rb:"ruby",
//     swift:"swift by apple"
// }


// for (const key in myObject) {
//    console.log(`${key} shortcut is for ${myObject[key]}`);
// }


// const programming = ["js","rb","py","java","cpp"]

// for (const key in programming ) {
//     console.log(programming[key]);
   
// }

// for in maps 
 const map = new Map()
 map.set('IN',"India")
 map.set('Fr',"France")
 map.set('USA',"united states of america ")
 map.set("IN","India")
 for (const key in map) {
    console.log(key); 

 }

//  ForEach 
// const coding=["js","ruby","java","python","cpp"]

//   coding.forEach( function (item){
//             console.log(item);
//   })

// coding.forEach(  (val) => {
//     console.log(val);
// } )
  

//     function printMe(item){
//         console.log(item);
//     }

// coding.forEach( printMe)




