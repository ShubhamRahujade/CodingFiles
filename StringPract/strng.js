// here we are having some examples of string 

// how to find specific character in a string by doing loop

let Name = "Shubham Rahujade"// we want how much 'u' there in the string

let count = 0

for (let i = 0 ; i<Name.length; i++){
    if (Name[i] === 'u')
    count = count + 1
}

console.log(count)


// now for vowels

let vowels = "shubham rahujade"

let count1 = 0

for (let i = 0; i<vowels.length; i++){
    if (vowels[i]==='a' || vowels[i]==='e' || vowels[i]==='i' || vowels[i]==='o' || vowels[i]==='u')
    count1 = count1 + 1
}
console.log(count1)

let Fname = "shubham rahujade"

let a = Fname.includes('R') // Its a case sensitive language (string).
console.log(a)

// Reversed string examples

let city = "Modnimb" // we want this to be like 'bmindom' in name

let cityName=""

for (let i = 0; i<city.length; i++){
    cityName = city[i] + cityName
}
console.log(cityName)


console.log("========================")

let city1 = "Mohol"

let cityName2 = ""

for (let i=city1.length-1; i>=0; i--){
    cityName2 = cityName2 + city1[i]
}
console.log(cityName2)

// i want first letter of my city to be in a capital letter

let newCity = "mumBai"
let aaa = newCity.toLowerCase()
console.log(newCity[0].toUpperCase() + aaa.slice(1))

// charAt charCodeAt

console.log(newCity.charAt(3))

console.log(newCity.charCodeAt(2))