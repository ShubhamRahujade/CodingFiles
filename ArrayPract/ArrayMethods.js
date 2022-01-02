
let Numbers = [11,22,33,44,55]
console.log(Numbers)
console.log(Numbers[3])

console.log('----------------------')

let cars = ['Audi','Mercedes','Bmw','Fiat']

for (let i=0; i<cars.length;i++){
    console.log(cars[i])
}

console.log("-----Reversed Array-----")

for (let i=cars.length-1; i>=0; i--){
    console.log(cars[i])
}

console.log('-----------------------------')

// Methods

console.log("=====PUSH=====")

let cars1 = ['Audi','Mercedes','Bmw','Fiat']
let aa = cars1.push('Tata')
console.log(aa) // 5
console.log(cars1) // Updated Array

console.log('=====POP=====')

let cars2 = ['Audi','Mercedes','Bmw','Fiat']
let bb = cars2.pop()
console.log(bb) // Fiat
console.log(cars2)

console.log('=====SHIFT=====')

let cars3 = ['Audi','Mercedes','Bmw','Fiat']
let cc = cars3.shift()
console.log(cc) // Audi
console.log(cars3) // Updated Array

console.log('=====UNSHIFT=====')

let cars4 = ['Audi','Mercedes','Bmw','Fiat']
let dd = cars4.unshift("Bajaj")
console.log(dd) // 5
console.log(cars4) // Updated Array

console.log('=====Includes=====')

let cars5 = ['Audi','Mercedes','Bmw','Fiat']
let ee = cars5.includes("Mercedes")
console.log(ee) // boolean value

console.log('=====IndexOf=====')

let cars6 = ['Audi','Mercedes','Bmw','Fiat']
let ff = cars6.indexOf("Bmw")
console.log(ff) // Index of the element or -1

console.log('=====Reverse=====')

let cars7 = ['Audi','Mercedes','Bmw','Fiat']
let gg = cars7.reverse()
console.log(gg) // Reversed Array

console.log('=====Sort=====')

let cars8 = ['Audi','Mercedes','Bmw','Fiat']
let hh = cars8.sort()
console.log(hh) // Sorted by alphabets

console.log('=====Slice=====')

let cars9 = ['Audi','Mercedes','Bmw','Fiat']
let ii = cars9.slice(2)
console.log(ii)
console.log(cars9.slice(-3,-1))

console.log('=====flat=====')

let cars10 = [['Audi','Mercedes'],['Bmw','Fiat'],['Tata','Hyundai']]
let jj = cars10.flat()
console.log(jj) // it will convert multiple array into single array list

console.log('=====concat=====')

let cars11 = ['Bmw','Fiat']
let cars12 = ['Tata','Hyundai']
let kk = cars12.concat(cars11) // it will add arrays in given form and wise versa also
console.log(kk)

console.log('=====join=====')

let Name = ['Shubham','Sanjay','Rahujade']
let ll = Name.join("-") // It will join by anything which is entered(Its Return type is STRING)
console.log(ll)

console.log('=====split=====') //(Method of STRING)

let mm = ll.split("-")
console.log(mm)         // It will work on string 

console.log('=====Example with for loop for Arrays methods=====')

// I want to find the age of everyone (in Array)

let BirthYear = [2000,2004,2009,2015]
let Ages = []
for (let i=0; i<BirthYear.length;i++){
    
    let Age = 2021-BirthYear[i]
    Ages.push(Age)
}

console.log(Ages)

console.log('=====Find Nos more than 50=====')

let Numbers1 = [11,22,33,44,55,66,77,88,49,675,653]
let Above50 = []
for (let i = 0; i<Numbers1.length; i++){
    if (Numbers1[i]>50){
        Above50.push(Numbers1[i])
    }
}
console.log(Above50)

console.log('=====Sum it up with for loop in array=====')

let Num = [22,33,44] //99
let sum = 0
for (let i = 0; i<Num.length; i++){
    sum = Num[i]+sum
}
console.log(sum)

console.log('=====Add New element in begining of each ele of array=====')

let Friends = ['Shubham','Rahul','Poorva','Pooja']

for (let i=0; i<Friends.length; i++){
    console.log(`Welcome ${Friends[i]}`)
}
console.log('=====MAP=====')
console.log('=====Birthyear calculation using map=====')

let BirthYear2 = [1994,1992,1998,2000]

let ab = BirthYear2.map(function(el,index,arr){
    return 2021-el
})
console.log(ab)

// Another Example

// We want to Add +10 to eac element of array

let Numbr = [30,40,50,60]

let ac = Numbr.map(function(el,index,arr){
    return 10 + el
})
console.log(ac)


console.log('=====Filter=====')

let Numbers2 = [11,22,33,44,55,66,77,88,99,456,345,234]
let ad = Numbers2.filter(function(el){
    return el > 50
})
console.log(ad)

console.log('=====Reduce=====')

let Addition = [20,30,5,15] //addition of all 

let ae = Addition.reduce(function(acc,el,index,arr){
    return acc + el
})
console.log(ae)

// Reduce 2

let Addition2 = [20,30,5,15] // addition with 3 in each
let af = Addition2.reduce(function(acc,el,index,arr){
    return acc + el
},3)
console.log(af)

console.log('=====forEach=====')

let Names = ['Shubham','Shashwati','Sanjay']
let ag = Names.forEach(function(el,index,arr){
    return `Hello ${el}`
})
console.log(ag)

console.log('=====Every Some=====') // Return ----> Boolean 
//Every

let Values = [20,33,44,55,66,77,88,455,666,777,888]
let ah = Values.every(function(el,index,arr){
    return el > 10
})
console.log(ah)

// some

let ai = Values.some(function(el,index,arr){
    return el > 700
})
console.log(ai)

console.log('=====find=====') // It only finds the single element

let NewNumbers = [11,22,33,44,55,66,77]
let aj = NewNumbers.find(function(el,index,arr){
    return el > 30
})
console.log(aj)

console.log('=====FindIndex=====')

let NewNumbers1 = [11,22,33,44,55,66,77,]
let ak = NewNumbers1.findIndex(function(el,index,arr){
    return el > 40
})
console.log(ak)

console.log('=====fill=====')
              //   0   1  2  3  4  5  6
let NewNumbers2 = [11,22,33,44,55,66,77,]
let al = NewNumbers2.fill('A',3)
console.log(al)

console.log('=====Splice=====')

let cars111 = ['Audi','Mercedes','Fiat','Maruti']
let am = cars111.splice(2,3,'Tata','Honda')
console.log(am)
console.log(cars111)

// ForEach
//Example
let abc = ['Shweta','Rahul','Shyam']
// wanted to hello them by forEach
abc.forEach(function(el,index,arr){
console.log('Hello ' + el)
})