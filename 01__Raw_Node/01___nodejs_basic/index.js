 console.log("hello");


// import deference

// import monir from "monir"    for defalt export
// import {monir} from "monir"  for without defalt



import mysum from "./sum.js";   // we can change name

import { sum1 } from "./sum1.js"; 
// import { sumsum  } from "./sum1.js";   //we can't change name
import { sum1 as sumsum } from "./sum1.js";



const result = mysum(5,6)
console.log(result);


const result1 = sum1(4,5)
console.log(result1);
console.log(sumsum(7,8));





//
// const sum1 = 0;  // variable can't be same name. we can change this or another as
// import { sum1 as sumsum } from "./sum1.js";



