let person = ["shubham","rahujade",26,30]

// retrive
console.log(person[0])

console.log('-------------------')

// update
person[0] = "bhushan"
//["bhushan","rahujade",26,30]

//addition --------- push or unshift
person.push('english')
console.log(person)

// we can store duplicate values in array

let NewPerson = {
    fullName:"shubham",
    lastname:"rahujade",
    age:26,
    RollNo:30,
}

// Object does not stores values by index 

// retrive

// .dot notation and bracket notation

// syntax

//objName.propertyName (dot notation)
//objName['propertyName'] (bracket notation)

let aa = NewPerson.fullName
let bb = NewPerson['fullName']
console.log(aa)
console.log(bb)

console.log('-----------------------')

// Update----- dot notation and bracket notation
NewPerson.fullName = 'bhushan'
console.log(NewPerson.fullName)

NewPerson['fullName'] = 'rahul'
console.log(NewPerson.fullName)

//addition dot notation and bracket notation

NewPerson.language = 'English'
NewPerson['city'] = 'Solapur'
console.log(NewPerson)

// deleting the value

delete NewPerson['language']
delete NewPerson.city

console.log(NewPerson)

console.log('---------------------------')

let vehicle = {
    colour:'black',
    ReNo:30,
    colour:'white' 
}
// retrive

// console.log(vehicle.colour)
// vehicle.colour = 'violet'
// vehicle.company = 'Audi'
// console.log(vehicle)
// delete vehicle.company
// console.log(vehicle)

console.log(vehicle)

//does not store duplicate if mentioned twice consider later as updated value

let vehicle2 = {
    colour: 'black',
    reNo:30,
    colour: 'white'
}

console.log('---------------------------')

let k = [1,2,3]

for (let i = 0; i< k.length; i++){
    console.log(k[i])
}

console.log('---------------------------------')

vehicle2 = {
    colour:'black',
    reNo:30, 
}

//dot notation does not work inside loop
//console.log(vehicle2['colour'])

// loop

for (let key in vehicle2){
    console.log(key,vehicle2[key])
}

console.log('-------------------------------------')

let rahul = {
    fullName: 'rahul dua',
    rollNo: 44,
    age: 23,
    skills:['python','javascript','c'],
    parents:{
        father:'ninad',
        mother:'ratan'
    },
    isMarried:true
}

for (let key in rahul){
    console.log(key,rahul[key])

}


// Retrive --- facebook

//retrive --- rahul
//create --- post / signup
//update --- profile pic
//delete --- post