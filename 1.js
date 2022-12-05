
// console.log("Hello world")
// const say = function(){
//     console.log("Hello")
// }
// say()


// const send = (x,y)=>{
//     console.log(`value x = ${x} value y = ${y}`)
// }
// const result = send(10,20)
// console.log(result)


// const person ={
//     name : "John",
//     age : 9
// }
// console.log(person.age)
// person.name = "FIFA"
// console.log(person)


// const item = [
//     {
//         name : "FIFA",
//         age : 16,
//         height : 170
//     },
//     {
//         name : "John",
//         age : 9,
//         height : 160
//     }
// ]
// console.log(item)
// console.log(item[0].name)
// console.log(item[1].height)


// const j =[
//     {name : "key", price : 100},
//     {name : "water", price : 50},
//     {name : "toy", price : 80},
//     {name : "cub", price : 70}
// ]
// for (i = 0; i < j.length; i++){
//     console.log(j[i].price)
// }


// const animals = ["Dog","Cat","Rat"]
// animals.push("Tiger")
// console.log(animals)
// animals.pop()
// console.log(animals)
// animals.unshift("Fish")
// console.log(animals)
// animals.shift()
// console.log(animals)


let show = ''
const rian = (n)=>{
    let num = 0
    for (let i = 0; i < n; i++){
        for (let j = 1; j < n+1; j++){
            num++
            show += num
        }
        show += "\n"   
    }
    
    console.log(show)
    show = ''

}

rian(2)
rian(3)
rian(4)