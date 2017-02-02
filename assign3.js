"use strict";

// function myLoop (array)
// {
//     for ( var i = 0; i < array.length; i++) {
//          array[i] = array[i]  + 2;
      
//     }
//     console.log (array); 
// }

// let arr = [ 1, 2, 3 ]
// myLoop (arr)
function arrSum(a)
{
    const myVal=process.argv
a=[]

a.push(Number(myVal[2])+2,Number(myVal[3])+2,Number(myVal[4])+2)

console.log(a)
}
arrSum([])

