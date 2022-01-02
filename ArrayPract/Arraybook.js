//  1) Push()
let Food = ["Chiken","Paneer","MixVeg","Fish"]

let a = Food.push("Mutton")
console.log(a)//5
console.log(Food)// new array

// 2) pop()
let Food1 = ["Chiken","Paneer","MixVeg","Fish"]

let b = Food1.pop()
console.log(b) // fish
console.log(Food1) // new array

// 3) shift()
let Food2 = ["Chiken","Paneer","MixVeg","Fish"]

let c = Food2.shift()
console.log(c) // chicken
console.log(Food2) // new array

// 4) Unshift()

let Food3 = ["Chiken","Paneer","MixVeg","Fish"]

let d = Food3.unshift("Idli","Poha")
console.log(d) // 6
console.log(Food3) // new array

// 5) include()

let Food4 = ["Chiken","Paneer","MixVeg","Fish"]

let e = Food4.includes("Chiken")
console.log(e) // true

// 6) Reverse()

let Food5 = ["Chiken","Paneer","MixVeg","Fish"]

console.log(Food5.reverse())

// 7) sort()

let Food6 = ["Chiken","Paneer","MixVeg","Fish"]

console.log(Food6.sort())

// 8) concat()

let A = ["Rahul",true]
let B = ["Married","No"]

console.log(A.concat(B))

// 9) flat()

let Foods = [["Chiken","Paneer"],[true,"Rice"],["MixVeg","Fish"]]
console.log(Foods.flat())

// 10) slice()

let Foods1 = ["Chiken","Paneer","MixVeg","Fish"]

console.log(Foods1.slice(2))
console.log(Foods1.slice(0,1))

// 11) join()

let NameA = ["shashwat","Nikita"]

let aa = NameA.join("&")

// 12) split()

console.log(aa.split("&"))


// I want to get the Age of following peoples
// By normal loop 

let peoples = [2000,1992,1990,1994]

Age = []

for (let i = 0; i<peoples.length; i++){
   let age = 2021 - peoples[i]
    Age.push(age)
}
console.log(Age)

// i want marks which are more than 40
// By normal loop

let marks = [11,22,33,44,55,66,77,88,99,123]

let Above40 = []

for (let i = 0; i<marks.length; i++){
    if (marks[i]>40){
        
        Above40.push(marks[i])
    }   
}
console.log(Above40)