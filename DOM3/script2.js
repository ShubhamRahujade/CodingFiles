let LiList = document.querySelectorAll("li")
let Button2 = document.querySelector("button")

// in querySelectorAll we get all list of li

// for (let i=0; i<LiList.length; i++){
//     console.log(LiList[i])

//     if (i % 2 == 0){
//         LiList[i].style.color = "Violet"
//     }
//     else {
//         LiList[i].style.color = "Brown"
//     }

// }

Button2.addEventListener("click",function(){

    for (let i=0; i<LiList.length; i++){
        console.log(LiList[i])
    
        if (i % 2 == 0){
            LiList[i].style.color = "Violet"
        }
        else {
            LiList[i].style.color = "Brown"
        }
    
    }
})