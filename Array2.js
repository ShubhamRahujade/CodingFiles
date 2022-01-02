// object ------ method and properies

// string

let names = ["shubham","rahujade",true,23,[12,33,44,55]]
let fruits = ["mango","banana","grapes","chiku","papaya"]

// array stores the value by index

console.log(fruits[0]) //mango
console.log(fruits[fruits.length-1]) // papaya

//for loop

for (let i = 0; i<fruits.length; i++){
    console.log(fruits[i]) // names by index in coloumn 
}

console.log('------------------------')

for (let i = fruits.length-1; i>=0; i--){
    console.log(fruits[i])
}

console.log("------------------")

// properties and method

// 23 methods of array

// method------method name-----action-----return type

//push()
fruits = ["mango","banana","grapes","chiku","papaya"]

let qqq = fruits.push("berry")
console.log(qqq)
console.log(fruits)

//pop

fruits = ["mango","banana","grapes","chiku","papaya"]
let qqqa = fruits.pop() 
console.log(qqqa) //papaya
console.log(fruits)

//unshift

fruits = ["mango","banana","grapes","chiku","papaya"]
let qqqb = fruits.unshift('dragon fruit')
console.log(qqqb) //6
console.log(fruits)

//shift

fruits = ["mango","banana","grapes","chiku","papaya"]
let qqqc = fruits.shift()
console.log(qqqc) //mango
console.log(fruits)

//includes
//action to check whether the element is present or not
//return boolean

fruits = ["mango","banana","grapes","chiku","papaya"]
let qqqd = fruits.includes("mango")
console.log(qqqd)

//indexOf

fruits = ["mango","banana","grapes","chiku","papaya"]
let qqqe = fruits.indexOf('grapes')
console.log(qqqe)

console.log("-------------------")

// reverse

fruits = ["mango","banana","grapes","chiku","papaya","apple"]
let qqqf = fruits.reverse()
console.log(qqqf)

console.log("---------------------")

// sort

fruits = ["mango","banana","grapes","chiku","papaya","apple"]
let qqqg = fruits.sort()
console.log(qqqg)

console.log('---------------------')
//slice
//          0         1       2        3        4       5
fruits = ["mango","banana","grapes","chiku","papaya","apple"]
//          -6       -5       -4      -3       -2       -1

console.log(fruits.slice(2))
console.log(fruits.slice(-4))
console.log(fruits.slice(1,4))
console.log(fruits.slice(-5,2))
console.log(fruits.slice(-2,1))

//flat

let numbers = [[1,2,3],[4,5,6],[7,8,9]]
// [1,2,3,4,5,6,7,8,9]

console.log(numbers[0][0]) //1
console.log(numbers[0]) //[1,2,3]
console.log(numbers[2][1]) //8
console.log(numbers[2][2])
let arrA = numbers.flat()
console.log(arrA)

//concat

let numA = [1,3,4]
let numB = [5,6,7]

let rra = numA.concat(numB)
console.log(rra)

let rrb = numB.concat(numA)
console.log(rrb)

console.log('----------------------')

//join

let info = ['shubham','sanjay','rahujade']
let rrrr = info.join("-")
console.log(rrrr)

//split

let rrrb = rrrr.split("-")
console.log(rrrb)

console.log("---------------------")

let name = ["shubham","sanjay","rahujade","9604934554"]
let aaaa = name.join('@')
console.log(aaaa)

let bbbb = aaaa.split("@")
console.log(bbbb)

