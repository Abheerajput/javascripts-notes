// code is represented by ##
// notes is represented by $$
// A JavaScript function is a block of code designed to perform a particular task


// ## function addTwoNumbers(num1,num2){
//   ##  console.log(num1+num2)
//  ##}
//  ## addTwoNumbers(3,54)
//  ## addTwoNumbers(3,"87")
//  ## addTwoNumbers(3,"a")
//  ## addTwoNumbers(3,null)


    //  $$ storing in variables
// function addTwoNumbers(num1,num2){
    // ## let result = num1+num2
    // ## return result 
    //  return num1+num2
// }
// const result = addTwoNumbers(23,32)
// console.log( "result  is : ",result);
// variable => result 
  
        // function loginuserMessage(username){
        //     if(username===undefined){
        //         console.log("please enter a user");
                    
        //     }
        // return `${username} just logged in` 
        // }
        // // console.log(loginuserMessage("abhishek you are "))
        // console.log(loginuserMessage())



// arguments => 3,54,3,"87",null,a
// parameter => num1,num2

            // shopping cart
// function calculateCartPrice(val1,val2,val3,...num1){
//         return num1
// }
// console.log(calculateCartPrice(200,300,3004,3652,34278,43289))
  const user={
    username :"abhishek",
    location: "hisar",
    age:20
  }
function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and age  is ${anyobject.age}`);
}

// handleObject(user)
handleObject(user)
      

            // array in function 

        const myNewArray=[23,32,54,76,86,76,49]
        function returnSecondValue(getArray){
            return  getArray[3]
        }

        console.log(returnSecondValue(myNewArray));












