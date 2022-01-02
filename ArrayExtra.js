let Students = [
{
    FullName : "Shubham Rahujade",
    Age : 27,
    Birthplace : "New York",
    Skills : ["Java","C++","C"]
},
{
    FullName : "Shashank Khatri",
    Age : 29,
    Birthplace : " L.A",
    Skills : ["Excell","Data Entry","MS Office"]
},
{
    FullName : "Rahul Dua",
    Age : 33,
    Birthplace : "Mumbai",
    Skills : ["Operating","Programming",]

},
{
    FullName : "Ganesh Pal",
    Age : 22,
    Birthplace : "Solapur",
    Skills : ["Harvesting","Farming","CareTaking"]

}]


// I want persons whose name starts with 's'

let a = Students.filter(function(el){
    return el.FullName[0] === "s" || el.FullName[0] === 'S'
})
console.log(a)

// I want Fullname and Skills only

a.forEach(function(el){
    console.log(`${el.FullName}` : `${el.Skills}`)
})
