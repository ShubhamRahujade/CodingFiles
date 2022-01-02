// Set 

// Set does not stores duplicate values (array stores duplicate values as shown)

// 1) Add() (method) -----> Adds the element to set & Returns Set

let NewGuy = new Set()

NewGuy.add('Raj')
NewGuy.add('Raj') // It doesnt store
console.log(NewGuy)

// for array

let ArrayA = [11,22,33,44,11,22,33]
console.log(ArrayA)

// 1) Size (Property)

let NewGuy1 = new Set()

NewGuy1.add('Shubham')
NewGuy1.add('Rahul')

let a = NewGuy1.size
console.log(a)

// Adding multiple elements in set

let Newguy2 = new Set()

Newguy2.add("Amar").add("Charan").add("Gagan").add("Boni")
console.log(Newguy2)

// 2) Delete (Method) ------> deletes the element if found & Returns Boolean as true

let R = Newguy2.delete("Charan")
console.log(R) // boolean

// 3) Clear (Method) -------> Clears the set 

let Newguy3 = new Set(["shubham"]).add("shweta") // it stores as iterables(by index)

// Newguy3.clear()
console.log(Newguy3)

// loop in set

for (let val of Newguy3){
    console.log(val)
}
  

// 4) Entries ------------> Gives all the entries in of the set

Newguy3.entries()
console.log(Newguy3)