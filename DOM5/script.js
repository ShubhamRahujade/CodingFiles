let Ul = document.querySelector("ul")
let ButtonOne = document.querySelector("#One")
let TextIn = document.querySelector("input")
console.log(Ul)
console.log(ButtonOne)
console.log(TextIn)

ButtonOne.addEventListener("click",function(){
  let Text = TextIn.value
  let NewText = document.createElement('li')
  NewText.textContent = Text
  CreatenewElement(NewText)
  Ul.appendChild(NewText)
  
})


function CreatenewElement(li){
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