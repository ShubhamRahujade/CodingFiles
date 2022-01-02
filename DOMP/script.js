let ProductList = document.querySelectorAll("li")
let Button1 = document.querySelector("button")

Button1.addEventListener("click",function(){
   for (let i=0; i < ProductList.length; i++){
       console.log(ProductList[i])

       if (i % 2 == 0){
           ProductList[i].style.color = "Green"
       }
        else {
            ProductList[i].style.color = "Pink"
        
       }
 }

})