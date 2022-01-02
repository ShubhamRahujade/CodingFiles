let x = 10
x = 23
console.log(x)
console.log(typeof x)

x = "pune"
console.log(typeof x)

x = true
console.log(typeof x)


console.log('------------------')
// object ----------> property and methods

let city2 = 'pune'
console.log(typeof city2)
console.log(city2[0])

// string stores value by index

// 0 1 2 3
// p u n e 

console.log(city2[city2.length-1])
console.log(city2.length)

console.log('--------------')

let country = "united states"
let aaa = (country.length)
console.log(aaa)
console.log(typeof country)

console.log("-------------")

// methods

let bbb = country.toUpperCase()
console.log(bbb)
console.log(typeof bbb)

let city3 = "Pune"
let r = city3.length
console.log(r)
console.log(typeof r)


console.log('----------')


let fruit2 = "mango"
// 0 1 2 3 4 
// m a n g o

console.log(fruit2[0])
console.log(fruit2[fruit2.length-1])
// length - 1 is last index

console.log("-------------")

fruit2 = "pune"
for (let i=0; i < fruit2.length; i++){
    console.log(i)
    console.log(fruit2[i])
}

console.log('--------Reverse--------')

fruit2 = "pune"
for (let i = 3; i >= 0; i--){
    console.log(i)
    console.log(fruit2[i])
}

console.log("---------------")

let fname = "shubham"
// 0  1  2  3  4  5  6
// s  h  u  b  h  a  m
//-7 -6 -5 -4 -3 -2 -1

let jjjj = fname.slice(4,fname.length)
console.log(jjjj)

console.log('-------------')

console.log(fname.slice(2))
console.log(fname.slice(4))
console.log(fname.slice(-4))
console.log(fname.slice(-3))
console.log(fname.slice(-6,5))