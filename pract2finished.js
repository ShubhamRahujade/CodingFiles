// Basic function

// function without parameter and without return type


function sum(){
    console.log(5+5)
  
}
sum()

console.log('-----------------------------')

// function with parameter and without return type

function mul(x,y){
    console.log(x*y)
}
mul(10,2)

//function with parameter and with return type

function sub(x,y){
    return(x-y)
}

let aaa = sub(10,5)
console.log(aaa)

let bbb = sub(20,10)
console.log(bbb)

console.log(aaa-bbb)