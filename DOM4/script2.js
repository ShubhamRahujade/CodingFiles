let UlEle = document.querySelector("ul")

let liEle = document.querySelectorAll('li')
console.log(liEle)


// Program 1

// UlEle.addEventListener("mouseover",function(){
//     UlEle.textContent = UlEle.textContent.toUpperCase()
// })

// UlEle.addEventListener("mouseout",function(){
//     UlEle.textContent = UlEle.textContent.toLowerCase()
// })


// Program 2

UlEle.addEventListener("mouseover",()=>{
    
    for (let i = 0; i<liEle.length; i++)
    liEle[i].textContent = liEle[i].textContent.toUpperCase()
})

UlEle.addEventListener("mouseout",()=>{
    
    for (let i = 0; i<liEle.length; i++)
    liEle[i].textContent = liEle[i].textContent.toLowerCase()
})