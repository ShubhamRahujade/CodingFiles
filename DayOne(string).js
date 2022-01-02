//let x = 10 // (number) //+ve, -ve
//console.log(typeof x)
//console.log(x)

//let y = true
//console.log(typeof y) // true, false
//console.log(y)

//let g = 100
//g = 300
//console.log(g)

//const i = 100
//i = 300 
//console.log(i)  // Constant is constant. value of it cannot be changed. else error comes.

//let const var


//---------------- STRING--------------
//-----------------------------

//let  fullname = "shubham"
//console.log(typeof fullname) //string
//console.log(fullname) // shubham

//Everything in JS is object
// object (property and methods)

//human ---

//property-------- age, height, weight, colour, name
//method---------- walk() talk()

//object ---- vehicle --- property and method
// property---- coulour , type, regNo
// method ------- Start() Stop()

let city = "pune"
console.log(typeof city) // string
console.log(city)   
console.log(typeof city[0]) // string
// 0 1 2 3
// p u n e 
console.log(typeof city[0])

// object --- property and method
let aa = city.length
console.log(typeof aa)//number
console.log(aa) 

// return type----- number string

// methods

let fruit = "mango"
console.log(fruit.length)
// 0 1 2 3 4
// m a n g o

console.log(fruit[0])//m
console.log(fruit[2])//n
console.log(typeof "m")
//  length-1 will be last degit
console.log(fruit[fruit.length-1])//o

//method

//action
//return

let vegetable = "carrot"
let ccc = vegetable.toUpperCase()

//action-----> convert every character into UpperCase
//return-- string

console.log(ccc)
console.log(typeof ccc)

let animal = "Lion"
let nn = animal.toLowerCase()
console.log(nn)
console.log(typeof nn)

//------------>
let d = animal.toLowerCase().toUpperCase.length 
console.log(d)
