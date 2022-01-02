// forEach, filter, map, reduce, every, some

//                 0    1    2    3 
let birthYear = [2000,1998,1989,2007]
let ages = [] //21,23,32,14

// [2021-2000,2021-1998,2021-1989,2021-2007]

for (let i = 0; i<birthYear.length; i++){
    let age = 2021-birthYear[i] //2021-2000
    ages.push(age)
}

console.log(ages)

let marks = [22,33,44,55,66,77,88,23,33,44]
//we need above 50 mrks //[55,66,77,88]
let above50 =[]

for (let i = 0; i<marks.length; i++){
    if (marks[i]>50){
        above50.push(marks[i])
    }

}
console.log(above50)

console.log("---------------------")

let numbers = [11,22,33] //66
let sum = 0

for (let i = 0; i<numbers.length; i++){
    sum = sum + numbers[i]
    // 0 + 11 ---------> 11
    //11 + 22 ---------> 33
    //33 + 33 ---------> 66
}
console.log(sum)

let names = ["shubham","poorva","ram","mate","john"]
for (let i = 0; i<names.length; i++){
    console.log(`welcome ${names[i]}`)
}

//------------------------------------------>

let birthYear2 = [2000,1998,1989,2007]
let ages2 = [] //[21,23,32,14]

//[21,23,32,14]
//[2021-2000,2021-1998,2021-1989,2021-2007]

for (let i = 0; i<birthYear2.length; i++){
    let age = 2021-birthYear2[i]
    ages2.push(age)
}
console.log(ages2)

// map
// method ----> action ------> works with every element of array
// return array

let eee = birthYear2.map(function(el){
   // console.log(el,index,arr)
    return 2021 - el //2021-2000
})
console.log(eee)

console.log('-------------------')

let bbb = [11,22,33]
//[13,24,35]

let lll = bbb.map(function(el,index,arr){
    return el+2
})
console.log(lll)

console.log('------------------')

let marks2 = [22,33,44,55,66,77,88,23,33,44]
//[55,66,77,88]
let above502 = []

for (let i = 0; i<marks2.length; i++){
    if (marks2[i]>50){
        above502.push(marks2[i])
    }
}
console.log(above502)


let qqqq = marks2.filter(function(el,index,arr){
    return el>50
})
console.log(qqqq)