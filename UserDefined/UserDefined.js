let Shubham =
{
    FullName: "Shubham Rahujade",
    RollNo: 30,
    Skills: ["javaScript", "C++", "C"]


}

let Sara =
{
    FullName: "Sara Khan",
    RollNo: 44,
    Skills: ["Acting", "Dancing"]
}
console.log(Shubham)
console.log(Sara)

// Creating/Updating the property and values Outside the Class

class student1 {
    FullName = undefined
    RollNo = undefined
    Skills = []
}
// We want to make object using class

let Shubham1 = new student1()
let Sara1 = new student1()

// We have to add to the blanks i.e create or update something

Shubham1.FullName = "Shubham Rahujade"
Shubham1.RollNo = 30
Shubham1.Skills = ['CPP', 'Java']
Shubham1.Language = "English"
Shubham1['Car'] = "BMW"
console.log(Shubham1)

console.log(Sara1) //As we didnt updated for sara so its showing blank 

Sara1.FullName = "Sara Khan"
Sara1.RollNo = 44
Sara1.Skills = ['Acting', 'Dancing']
Sara1.Language = "Hindi"
Sara1['Car'] = 'Audi'
console.log(Sara1)

//2 ---> Creation Using Constructor
// Updating the property and values @ the time of object creation

class student2 {
    constructor(Fname,Rn,Skl){

    this.FullName = Fname
    this.RollNo = Rn
    this.Skills = Skl

}
}
let Shubham2 = new student2("Shubham Rahuajde",33,['Js','CPP','Java'])
console.log(Shubham2)
let sara2 = new student2("Sara Ali Khan", 44, ['Dancing','Singing'])
console.log(sara2)


// 3-----> Using Set Method

class student3 {

    setFullName(Fname){
        this.FullName = Fname
    }

    setRollNo(Rn){
        this.RollNo = Rn
    }

    setSkills(Skl){
        this.Skills = Skl
    }

}
let Shubham3 = new student3()

console.log(Shubham3)

Shubham3.setFullName('Shubhu Rahujade')
Shubham3.setRollNo(88)
Shubham3.setSkills(['Cpp','Java','C'])

console.log(Shubham3)

let sara3 = new student3()

sara3.setFullName('Sara Khan')
sara3.setSkills('Dancing')
sara3.setRollNo(99)

console.log(sara3)



// Examples With Above 3 types

//1)  Outside the object

class Vehicle {

    Color = undefined
    RegNo = undefined
    SeatingCap = undefined
}

let Tata = new Vehicle()

Tata.Color = "Black"
Tata.RegNo = 333
Tata.SeatingCap = 7

console.log(Tata)

// 2)   Using Constructor

class Vehicle1 {

    constructor(clr,rn,sc){
        this.Color = clr
        this.RegNo = rn
        this.SeatingCap = sc
    }
}

let Tata1 = new Vehicle1('Blue',312,5)
console.log(Tata1)
let Hyundai1 = new Vehicle1("Silver",111,5)
console.log(Hyundai1)



// 3)   Using Set Method

class Vehicle2 {

    setColor(clr){
        this.Color = clr
    }

    setSeatingCap(scp){
        this.SeatingCap = scp
    }

    setRegNumber(Rgn){
        this.RegNumber = Rgn
    }
}

let Bajaj = new Vehicle2()
console.log(Bajaj)

Bajaj.setColor('blue')
Bajaj.setSeatingCap(3)
Bajaj.setRegNumber(888)
console.log(Bajaj)