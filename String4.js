// string

let h = "pune"
// 0 1 2 3
// p u n e

console.log(h[0])
console.log(h[h.length-1])

console.log("-------------")

for(let i = 0; i < h.length; i++){
    console.log(i)
    console.log(h[i])
}

console.log("-----------")

let vegetable = "Brinjail"

let aaa = vegetable.toUpperCase() //BRINJAIL
let bbb = vegetable.toLowerCase() //brinjail
let ccc = vegetable.indexOf('b')
let ddd = vegetable.indexOf('B')
let eee = vegetable.lastIndexOf("i")


let country = "INDIA"
// 0  1  2  3  4 
// I  N  D  I  A
//-5 -4 -3 -2 -1

console.log(country.slice(2))
console.log(country.slice(-3))
console.log(country.slice(1,-3))
console.log(country.slice(2,5))
console.log(country.slice(3,-5))  // blank

console.log("-----------------------")

// -------------------Comparison operator-------------------------

// > , < , <= , >= , != , === , !==

// Entity Comoparison Operator Entity ---> Values gonna come boolean

console.log(4 > 6)
console.log(4 < 6)
console.log(4 >= 4)
console.log(4 <= 6)
console.log(6 == 6)
console.log(6 != 6)

console.log("-----------------")

// "6"----> string
//  6 ----> Number

console.log(6=="6")
console.log(6==="6")  // value and type


let g = '6'
console.log(typeof g) // string
console.log(typeof 6) // number

console.log(4===4) // true
console.log(4=='4')// true
console.log(4!='4')// false

console.log("-----------------")

console.log(5===6)   //false
console.log(5==='5') //false
console.log(5!==5)   //false
console.log(3!==1)   //true

console.log("---------------LOGICAL OPERATOR-------------------")

// === !== --------- value and type

// logical operators
// OR AND NOT

//OR

// true true   ---> true
// true false  ---> true
// false true  ---> true
// false false ---> false

// AND

// true true   ---> true
// true false  ---> false
// false true  ---> false
// false false ---> false

// NOT

// true  ---> false
// false ---> true

// OR ||
// AND &&
// NOT !

console.log(7 > 6 && 4 !== 4)
console.log(true && 4 !== 4 || 7> 6 || false)
