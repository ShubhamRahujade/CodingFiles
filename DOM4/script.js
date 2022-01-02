let Paragraph = document.querySelector("p")
let InputText = document.querySelector("input")
let ButtonOne = document.querySelector("button")

console.log(Paragraph)
console.log(InputText)
console.log(ButtonOne)


ButtonOne.addEventListener("click",function(){
    let ColorText = InputText.value
    Paragraph.style.color = ColorText

})