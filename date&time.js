// date  the beginning of date is january 1,
// 1970, UTC 
 
let myDate = new Date()
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleDateString( ));
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCreatedDate = new Date(2023,0,23)
console.log(myCreatedDate.toLocaleString())
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleDateString())
console.log(myCreatedDate.toLocaleTimeString())
console.log(myCreatedDate.toTimeString())
  
  let myTimeStamp = Date .now()
  console.log(myTimeStamp);
  console.log(myCreatedDate.getTime())
  console.log(Date.now()/1000)
  console.log(Math.round(Date.now()/1000))

  let newDate = new Date()
console.log(newDate)
console.log(newDate.getDate())
console.log(newDate.getFullYear())
console.log(newDate.getMonth() + 1)
console.log(newDate.getMinutes())
console.log(newDate.getDay())
console.log(newDate.getUTCDate())

