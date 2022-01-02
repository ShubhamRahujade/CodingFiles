let x = 20
let y = x
x = 400

console.log(x)
console.log(y)

// array
let arr = [77,88,99]
let arr2 = arr

arr[0] = 66

console.log(arr)
console.log(arr2)

//obj
let human = {
    fullName : 'shubham rahujade',
    Age : 27,
    rollNo : 30,
}

human2 = human

human2['Age'] = 333
human["Age"] = 111

console.log(human)
console.log(human2)

console.log('---------------------------------')

// array as parameter to another function

let aa = [44,55,66]

function Arr(ar){

    ar[0] = 101
    return ar
}
let a = Arr(aa)
console.log(a)
console.log(aa)

console.log('-------------------------------------')

let qqq = [10,20,30,40,50,60]

function Brr(cr){
    cr[2] = 905
    return cr
}
console.log(qqq)
let ww = Brr(qqq)
console.log(ww)
console.log(qqq)

console.log('----------------------------------------')

let rahul = {
    age : 45,
    weight : 70,
}

function updateAge(obj){
    obj.age = 35
    return obj
}
let c = updateAge(rahul)
console.log(c)
console.log(rahul)