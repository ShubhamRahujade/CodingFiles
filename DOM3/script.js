//<h1 id="Head" class="Name">HeadingOne</h1>
//    <button>click text colour</button>


let HeadOne = document.querySelector("h1")
let buttonOne = document.querySelector("button")
// console.log(buttonOne)
// console.log(HeadOne)

buttonOne.addEventListener("click",function(){
    console.log(HeadOne.textContent)
    console.log(HeadOne["textContent"])

    // HeadOne.textContent = "new new new new"    
    HeadOne.textContent = "Hello i am updated from JS"
    HeadOne.style.color = "red"
    HeadOne.style.backgroundColor = "blue"

})



//REFERANCE


// let Human = {
//     Name: "Shubham Rahujade",
//     Age: 27,
//     Display: function(){
//         console.log("Hello")
//     }
// }
// Human.Display()


// // we want to RETRIVE

// Human.Name
// Human[Name]

// // we waant to UPDATE

// Human.Name = "UpdateName"
// Human[Name] = "UpdateName1"

// // we want to DELETE

// delete human.Name
// delete human['Name']

// // we want to ADD

// human.language = "Marathi"
// human["language"] = "Hindi"

// let Human = {
//     Name: "Shubham Rahujade",
//     Age: 27,
//     Parent: {
//         Father: "Sanjay",
//         Mother: "Sharmila"

//     },
//     Display:function(){
//         console.log("Hello")
//     }
// }

// // To Update Mother Name To "Sharmila Rahujade"

// Human.Parent.Mother = "Sharmila Rahujade"