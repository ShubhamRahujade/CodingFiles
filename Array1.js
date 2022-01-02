//              0  1  2  3  4  
let numbers = [11,22,33,44,55]
console.log(numbers[0])
// javascript ---- object
// object -------- propert and methods
// method -------- action and return
// array is also object ------ property and method

let rrr = numbers.length
console.log(rrr)
console.log(numbers[3])
console.log(numbers[numbers.length-1])

// length - 1 is always the last index
///
let fruit = ["mango","apple","banana","grapes","chiku"]
//let i = "apple"

for (let i = 0; i < fruit.length; i++){
    console.log(i)
    console.log(fruit[i])
}

console.log("-----Reversed String-----")

for (let i = 4; i >= 0; i--){
    console.log(i)
    console.log(fruit[i])
}

console.log("-------------------------")
// Methods

// Method Name ----> push()
// action      ----> Add the element at the end of array
// Return      ----> New length

let vegetable = ["tomato","potato","brinjal"]
let aaa = vegetable.push("ladyfinger")
console.log(aaa)  //4
console.log(vegetable)

console.log("--------------------")

// Method Name ----> pop()
// action      ----> Removes the element from last
// Return      ----> String (Removed element)

let vegetable2 = ["tomato","potato","brinjal",]
let bbb = vegetable2.pop()
console.log(bbb) //ladyfinger
console.log(vegetable2)

console.log("------------------")

// Method Name      ---->  shift()
// Action           ---->  removes the element from start
// Return           ---->  String(removed)

let vegetable3 = ["tomato","potato","brinjal"]
let ccc = vegetable3.shift()
console.log(ccc) // tomato
console.log(vegetable3)

console.log("------------------------")

// Method Name  ----> unshift()
// Action       ----> add the element in begining
// Return       ----> New length

 let vegetable4 = ["tomato","potato","brinjal"]
 let ddd = vegetable4.unshift("cabbage")
 console.log(ddd) // all
 console.log(vegetable4)

 console.log("--------------------")

 // Method Name ----> includes()
 // Action      ----> search the element
 // return      ----> true or false (boolean)

 let vegetable5 = ["tomato","potato","brinjal"]
let eee = vegetable5.includes("tomato")
console.log(eee)
