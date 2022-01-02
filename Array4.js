let birthYear = [2000,2001,2002,2003,2004]
//[2021-2000,2021-2001,2021-2002,2021-2003,2021-2004]

let rrr = birthYear.map(function(el,index,arr){
    return 2021-el
})
console.log(rrr)

//------------------------------------------------->

let ages = [23,33,44,55,66,77,334,55]//above 60
let uuu = ages.filter(function(el,index,arr){
    return el>60
})
console.log(uuu)

//------------------------------------------------->

let marks = [11,22,4] //37
let sum = 0
for (let i = 0; i<marks.length; i++){
    sum = sum + marks[i]
}
console.log(sum)

console.log('--------------------------')

// reduce

// accumulator

let fff = marks.reduce(function(acc,el,index,arr){
    return acc + el //0+el-----> acc---->11------33------37

},0)
console.log(fff)

let names = ['shubham','ram','sham']
// for (let i = 0; i<names.length; i++){
// console.log(`welcome ${names[i]}`)
// }


// forEach

let raaa = names.forEach(function(el,index,arr){
    console.log(`welcome ${el}`)
})
    console.log(raaa)

    // map -----------> array
    // filter --------> array
    // reduce --------> single
    // forEach -------> undefined

    console.log('------------------------')

    // evry some -----> boolean

    let numbers = [33,444,55,66,77,788] // > 10

    let ttty = numbers.every(function(el,index,arr){
        return el>10
    })
    console.log(ttty)

    console.log('------------------')

    let cccy = numbers.some(function(el,index,arr){
        return el > 500
    })
    console.log(cccy)

    // map, filter, forEach, every some
    // reduce -----> acc

    //  find findIndex

    // find , filter (comparison)

    // find ---[11,22,33,44,55] ----> >20-----> //22
    // filter ----[11,22,33,44,55] -----> >20-------> [22,33,44,55]

    let numbersA = [11,22,33,44,55]

    let zzz = numbersA.find(function(el,index,arr){
        return el > 30
    })

    console.log(zzz)

    console.log("--------------------")

let xxx = numbersA.filter(function(el,index,arr){
    return el > 30
})
console.log(xxx)

console.log('---------------------------')

let zzza = numbersA.findIndex(function(el,index,arr){
    return el > 30
})
console.log(zzza)

// map filter reduce every some forEach find findindex

// fill
//        0  1  2  3  4  5  6  
let g = [11,22,33,44,55,66,77]
let fy = g.fill('a',1)
console.log(fy)

let ga = [11,22,33,44,55,66,77,88]
let fz = ga.fill("a",2,-3)
console.log(fz)

// splice

let fruits = ['apple','banana','mango','grapes']
// startposition, numberofElementDel, rep, repl
let hh = fruits.splice(1,3,'chiku','papaya')
console.log(hh)
console.log(fruits)

