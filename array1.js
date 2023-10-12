// array in javascripts 
// arrays are resizable and can contain a mix of differnet type of datatypes.
// arrays are not associative array and so means array elements cannot be using arbitary strings as indexes'
// array copy opertions creats shallow copies and deep copies 
// shallow copy which gives reference of real value 
//  deep  copies properties do not share same refernce 
    
                    // question1//
        const array =[1,2,3,4,5,6,7,8,9,0]
        array.forEach(function(val){
            console.log("hello ," +val);
        })
                        //question 2
        //arrar ki saare number print karo aur unhe chod do jo 5 se bade h
        array.forEach(function(val){
            if(val <= 5){
        console.log(val);
            }
        })