// // string array boolean objects 

// // three ways to write function in js 


// //function declaration
// // function expression 
// // arrow function 


// //function declaration

// function add(x,y) {
//     return (x+y)
    
// }
// let a = add(22,44) //arguments
// console.log(a)

// // expressions

// let subst = function sub(x,y) {
//     return (x-y)
    
// }
// let aa = subst(10,8)
// console.log(aa)

// // Arrow function

// let mul = (x,y)=> {
//     return (x*y)
// }
// let aaa = mul(10,20)
// console.log(aaa)

// //greet

// let greet = grt => {
//     return grt
// }
// let g = greet('Welcome')
// console.log(g)

// // we can also remove return keyword and brackets if there is a single statement

// let greet1 = grt => grt
// let gg = greet1('Welcome Home')
// console.log(gg)

// // add

// let addi =(x,y) => (x+y)
// let cc = addi(5,3)
// console.log(cc)

// console.log('---------------------------')

// let x = 20
// console.log('x')
// console.log(x)

// console.log('============================')

// let mult = function(x,y){
//     return (x*y)
// }
// let ee = mult(10,8)
// console.log(ee)

// //===========================================================

// //function as parameter to another function

// let addition = function(x,y){
//     return(x+y)
// }

// console.log(addition)

// let ff = function(x,y){
//     return (x+y)
// }


// let s = 20

// // function addit(s){
// //     let s = ff(11,22)
// //     return s
// // }

// // let q = addit(20)
// // console.log(r)


let add = function(x,y){
    return x+y
}

console.log(add)
function addit(ff){

    let qqq = ff(11,22) //33
    return qqq
}
let re = addit(add)
console.log(re)

// array as parameter to function

