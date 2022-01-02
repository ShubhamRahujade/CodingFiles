let fullName = 'shubham'
console.log(fullName)
console.log(typeof fullName)

// String stores the value by index

// S H U B H A M
// 0 1 2 3 4 5 6

console.log(fullName[0])
console.log(fullName[fullName.length - 1])

// object ----> properties and method

// property

let y = 'mango'
let ff = y.length
console.log(ff)
console.log(typeof ff)

console.log('------------------------')

// 0  1  2  3  4  5 
// T  o  m  a  t  o
//-6 -5 -4 -3 -2 -1

let vegetable = 'Tomato'
let j = vegetable.toUpperCase()
let h = vegetable.toLowerCase()
let k = vegetable.slice(1)
let s = vegetable.slice(-2)
let l = vegetable.slice(1, -2)

// loop
let city = 'pune'

for (let i = 0; i < city.length; i++) {
    console.log(i)
    console.log(city[i])
}

console.log("-------------------")

for (let i = city.length; i >= 0; i--) {
    console.log(city[i])
}

// comparison operator < > <= >= != === !==

console.log(5 !== '5') // true
console.log(5 == '5') // true
console.log(5 == 5)   // true
console.log(5 !== 5)   // false

// Logical Operators

// OR AND NOT

// OR

// TRUE TRUE ---> TRUE
// TRUE FALSE---> TRUE
// FALSE TRUE---> TRUE
// FALSE FALSE--> FALSE

// AND

// TRUE TRUE ---> TRUE
// TRUE FALSE---> FALSE
// FALSE TRUE---> FALSE
// FALSE FALSE--> FALSE

// NOT

// TRUE FALSE
// FALSE TRUE

console.log('------------------')

let fullname = "shubham"
// count of 'h'
let count = 0
for (let h = 0; h < fullName.length; h++) {
    console.log(fullName[h])
    if (fullName[h] === 'a') {
        count = count + 1
    }
}

console.log(count)

console.log("--------------------")

// Vowels Count

let vowels = 'shubham'//2
let count2 = 0
vowels = vowels.toUpperCase()

for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === 'A' || vowels[i] === 'E' || vowels[i] === 'I' || vowels[i] === 'O' || vowels[i] === 'U')
        count2 = count2 + 1
}
console.log(count2)

let flower = "LotusLa"
let ss = flower.indexOf("L")
console.log(ss)

let flower2 = "LotusLa"
let aa = flower2.lastIndexOf("L")
console.log(aa)

let fruits = "Apple Banana Chiku Grapes Mango"
let ddd = fruits.includes("Banana")
console.log(ddd)