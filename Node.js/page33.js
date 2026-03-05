//import {add,subtract} from './calc.js'
import add,{subtract} from "./calc.js"//here add is exported "default" in the calc.js that the erason it is working without curly braces

const result1 = add(5,4)
console.log(result1)
const result2 = subtract(5,4)
console.log(result2)
