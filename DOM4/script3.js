let Ul = document.querySelector('ul')
let Button1 = document.querySelector('button')
let InText = document.querySelector('input')

console.log(Ul)
console.log(Button1)
console.log(InText)

Button1.addEventListener("click",()=>{
   let text = InText.value
   let NewEle = document.createElement("li")
   NewEle.textContent = text
   Ul.appendChild(NewEle)

})