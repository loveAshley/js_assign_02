"use strict";


 
function myLoops (array)
{ 
   array.forEach ((item, index) => {
       
      console.log ( `${index} : ${item}` );
})
}

let myArr = [ 1 , 'dog' , 'one'];

myLoops(myArr);