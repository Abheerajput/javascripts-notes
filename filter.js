const  coding =["js","ruby","java","python","cpp"]


// --------- forEach-----------  koi bi value return nahi karta h 
//      const values= coding.forEach((item) => {
//     console.log(item);
//     return item
// })
// console.log(values);






const myNums=[1,2,3,44,55,6,7,8,65,54,]
// ----------------------filter---------------------- apne ander call back functio milta h,   jiske ander har value ko each acces kiya jayega or ek conditon de jayegi aur  jo jo item us condition ko satisfy karenge  and jo jo values true hogi   unhe return kiya jayega . 
//---------() jab aap perthencis laga k value dete ho to aapko return nahi deni hote h 
//--------- {}jab aap curly braces laga te ho to return keyword  dena hota h 



// --------- arrow function (()=>{})



//  const newNums=myNums.filter((num)=>num>4)
//  console.log(newNums);



// const newNums=myNums.filter((num)=>{
//    return  num>22
// })
// console.log(newNums);


// ---------for each-------- m value return karvani ho to 
//  const newNums=[]
//  myNums.forEach((nums)=>{
//     if (nums>22) {
//         newNums.push(nums)
        
//     }
//  })
//  console.log(newNums);

const books=[

    {title:'book one',genre:'friction',publish:1981,edition:2006},
    {title:'book two',genre:'friction',publish:1984,edition:2007},
    {title:'book three',genre:'eco',publish:1985,edition:2008},
    {title:'book four',genre:'geo',publish:1986,edition:2009},
    {title:'book five',genre:'bio',publish:1987,edition:2010},
    {title:'book six',genre:'science',publish:1989,edition:2011},
    {title:'book seven',genre:'non-friction',publish:1991,edition:2012},
    {title:'book eight',genre:'history',publish:1997,edition:2013},
];
let userBooks=books.filter((bk)=>bk.genre==='friction')
 userBooks=books.filter((bk)=>{
    return bk.publish>=1985 && bk.genre ==='history'})
console.log(userBooks);