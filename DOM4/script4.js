let Ul = document.querySelector('ul')
let Button1 = document.querySelector('#one')
let InText = document.querySelector('input')

console.log(Ul)
console.log(Button1)
console.log(InText)

Button1.addEventListener("click",()=>{
   let text = InText.value
   let NewEle = document.createElement("li")
   NewEle.textContent = text
   CreateNewbutton(NewEle)  // Added @ Last
   Ul.appendChild(NewEle)
})

function CreateNewbutton(li) {
    let Remove = document.createElement('button')
    Remove.textContent = "Remove"
    Remove.className = "Remove"
    li.appendChild(Remove)

    let Up = document.createElement('button')
    Up.textContent = "Up"
    Up.className = "Up"
    li.appendChild(Up)

    let Down = document.createElement('button')
    Down.textContent = "Down"
    Down.className = "Down"
    li.appendChild(Down)
}