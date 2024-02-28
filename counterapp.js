let head = document.getElementById("h2")
let count = 0
let increament = document.getElementById("btn1")
let reset = document.getElementById("btn2")
let decreament = document.getElementById("btn3")

increament.addEventListener("click",function(){
   count++;
    head.innerText=count
})

decreament.addEventListener("click",function(){
    count--;
     head.innerText=count
 })

 reset.addEventListener("click",function(){
    count=0
     head.innerText=count
 })

