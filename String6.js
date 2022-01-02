// charAt

let city = "pune" // enup
let r =""
//          0 
for (let i = 0; i<city.length; i++){
    // console.log(i)
    // console.log(city[i])
    r = city[i] + r                //N+UP

    // 1st loop -------> p + "" ----> p
    // 2nd loop -------> u + p  ----> up
    // 3rd loop -------> n + up ----> nup
    // 4th loop -------> e + nup----> enup
}
console.log(r)

console.log("-------------------")

let ra = ""

for (let i=city.length-1; i>=0; i--){
    // console.log(i)
    // console.log(city[i])
    ra = ra + city[i]
}
console.log(ra)

console.log('-----------------------')

let h = 'nagpur'
// Nagpur

console.log(h[0].toUpperCase()+h.slice(1))

console.log("------------------")

let w = 'solapur'
// solapuR

console.log(w.slice(0,6)+w[6].toUpperCase())

console.log("---------------------")

// split

let raw = "shubham-rahujade"
let war = raw.split("-")
console.log(war)

let car = raw.split("a")
console.log(car)

console.log("---------------")

// charAt

let movie =  "Race"
let rdd = movie.charAt(2)
console.log(rdd)

let movie2 = "Bharat"
let rcc = movie2.charAt(5)
console.log(rcc)

// charCodeAt

let ree = movie.charCodeAt(2) //c=99
console.log(ree)

let eer = movie2.charCodeAt(1) //h=104
console.log(eer)

console.log("--------------")

// string ---------- reguler expression

//string-------->

// let a = "i am shubham"
// let b = 'i am shubham'
// let c = 'i"am"shubham'
// let d = "i 'am shubham"

// number + string ---------> string
// string + number ---------> string
// string + string ---------> string
// number + number ---------> number

let aa = 10
let bb = 20
let cc = "cat"

console.log(aa+bb+cc) // 30cat
console.log(cc+aa+bb) // cat1020
console.log(bb+cc+aa) // 20cat10

//----------------------------------

let firstName = "shubham"
let lastName = "rahujade"

console.log(firstName+lastName)
console.log(firstName+" "+lastName)
console.log(`my name is ${firstName} and my sirname is ${lastName}`)
console.log("my name is "+firstName+" "+" and last name is "+lastName)
console.log(`my name is ${firstName} and my last name is ${lastName} and my age is ${6+12}`)

console.log(18)
console.log("18")

