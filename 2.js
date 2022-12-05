// const name = (x)=>{
//     console.log("F name")
//     if(item[x] != undefined){
//         console.log(item[x].age)
//     }
//     else{
//         console.log("no name")
//     }
// }

// const age = (x,callback)=>{
//     console.log("F age")
//     if()
// }

// const show = (x,callback){
//     console.log("F show")

//     callback(x,name)
// }

// show(4,age)

// const person = {
//     name : "marian online",
//     age : 2,
//     store : {
//         name : "FIFA",
//         age : 10,
//         like : "Com"
//     }
// }
// console.log(person.store.age)

// const person = {
//     name : "Marain Online",
//     age : 3,
//     store : ["Basic Web","JS tier 2","Python","C"]
// }
// console.log(person.store[1])

// const printMarian = ()=>{
//     console.log("Marian")
// }

// const printOnline = ()=>{
//     console.log("Online")
// }

// const call = (callback)=>{
//     console.log("It f call")
//     callback()
// }

// call(printMarian)

// const content = document.getElementById("content")
// alert(content.innerHTML)
// content.innerHTML = "Hello"

// content.style.color = "orange"
// content.style.fontSize = "25px"
// content.style.backgroundColor = "green"

// const btn = document.getElementById("btn")
// const content = document.getElementById("content")
// function mouseoff(event){
//     content.style.color = "orange"
// }
// function mouseover(event){
//     content.style.color = "green"
// }

// btn.onclick = clickme;
// btn.onmouseout = mouseoff
// btn.onmouseover = mouseover

const inp = document.getElementById("inp")
const content = document.getElementById("content")

function clickme(event){
    let z = inp.value
    let x = z.length
    content.innerText = z[Number(x-1)]

    if (x == 0){
        content.innerText = "Nothing"
    }
}


inp.onkeyup = clickme;