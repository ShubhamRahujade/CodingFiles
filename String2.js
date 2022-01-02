//let x=100
//let y=50

//console.log(x+y)
//console.log(x-y)
//console.log(x*y)
//console.log(x/y)
//console.log(x%y)

//console.log("--------------")
//console.log(12%5)


let p=1000
let q=500

console.log(p+q)
console.log(p-q)
console.log(p*q)
console.log(p/q)
console.log(p%q)

console.log("-----------------")

// DRY-----------------> DO NOT REPEAT YOURSELF

//officeboy (water, greentea)
//function calculator(x,y){
  //  console.log(x+y)
  //  console.log(x-y)
  //  console.log(x*y)
  //  console.log(x/y)
  //  console.log(x%y)
//}
//calculator(200,100)
//console.log('---------')
//calculator(300,100)

//function funtionName(parameter1,para2){

//} // functionName

//functionName(11,12) // function calling with arguments

// Method

// Action
// Return


// -------Basic functions----------

// Function without parameter and without return type

function add(){
   console.log(9+9)
}
add()

console.log('------------------')
// Function with parameter and withoutt return type

function sub(x,y){
       console.log(x-y)

}
sub(6,3)

console.log('----------------------')

// Function with parameter and with return type

function mul(x,y){
    return(x*y)
}

let aaa = mul(10,5)
console.log(aaa)

let bbb = mul(11,5)
console.log(bbb)

console.log(bbb-aaa)

console.log('-------------------')

function div(x,y){
    return (x/y)
}

let ccc = div(20,4)
console.log(ccc)