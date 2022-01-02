let a = 10
console.log(typeof a)

let b = "shubham"
console.log(typeof b)

let c = true
console.log(typeof c)

let d = [1,2,3,4,5]
console.log(typeof d)

let Student = {
    Fname : "Shubham",
    RollNo : 33
}
console.log(typeof Student)

// let neww = document.querySelector("h1")
// console.log(typeof neww)

class NewGuy {
    constructor(UserN,RollN,Age){
        this.Username = UserN
        this.RollNumber  = RollN
        this.Age = Age
    }
    display(){
        console.log(this.display)
    }
}

let Shyam = new NewGuy("Shyam123",22,44)
// console.log(Shyam)
console.log(typeof Shyam)

console.log(Shyam instanceof NewGuy) // It Gives that shyam is made up of Newguy

//MAP
// Map and Objects //
// they both are almost similar to each other i.e They both stores the data in key and values

//Object

let Personx = {
    Name : "Sara",
    Age : 44
}

// Generally Objects Keys are Strings
//but in Map they can be anything(data types) like String, array, object, boolean

// we can create new Objects of map,array or string

let aa = new Map() // map

let bb = new Array() // array

let cc = new String("Rahul") // string
console.log(cc)

// we were Normally doing like this

let aaa = [1,2,3,4] // array
let bbb = "Sohail" // string

//1) Method in Map --> SET

let NewMap = new Map()

let aaaa = ["favfood","favplace"]
let bbbb = {Username:"shubh123",Pass:111}


NewMap.set('Name',"Rahul")
NewMap.set(false,"Married")
NewMap.set(aaaa,['chiken','Matheran'])
NewMap.set(bbbb,"AccesIN")

console.log(NewMap)

// Normal Object

let PersonA = {
    firstName : "Raj",
    Marks : 59
}
//Add
PersonA.grade = "A+"
console.log(PersonA)
//Retrive
console.log(PersonA.firstName)

//2) In Map (Get)(for retrive) (we gonna get value)

console.log(NewMap.get(false))
console.log(NewMap.get("Name"))
console.log(NewMap.get(aaaa))
console.log(NewMap.get(bbbb))

//Set

console.log(NewMap.set(1,5)) // It returns Map Itself

//3) Values(Method)----> Returns Values

console.log(NewMap.values())

//4) Keys(Method)------> Returns Keys

console.log(NewMap.keys())

//5) Entries(Method)-----> Returns All Key & Values But in Array

console.log(NewMap.entries())

// Set (new type)
// console.log(NewMap.set(1,"Raj").set(2,"Baban").set(3,"komal"))

// Set (another type)

let Jamming = new Map([
    ["Shubham","Singer"],
    ["Harish","Drummer"],
    ["Rajat","guitar"]
]
)
console.log(Jamming)

console.log("------------------------------------")

// Loop

for (let key of Jamming.keys()){
    console.log(key)
}

for (let val of Jamming.values()){
    console.log(val)
}

for (let entr of Jamming.entries()){
    console.log(entr)
}

// Property of Map(size)

console.log(Jamming.size)

//6) Clear() (Method) // it will blank the map(not delete)

//Jamming.clear()
console.log(Jamming)

//7) Delete() (Method) // Deletes the key or value

Jamming.delete("Rajat")
console.log(Jamming)