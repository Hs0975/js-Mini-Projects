let input = document.getElementById("input")
let button = document.getElementById("btn")
let list = document.getElementById("list")

button.addEventListener("click",function(){
   let uls = document.createElement ("ul")
    let items = document.createElement("li");
    let delbtn= document.createElement("button");
    let editbtn= document.createElement("button");
    
delbtn.textContent="Delete"
editbtn.textContent="Edit"

delbtn.style="padding:10px 20px; color:black; border-radius:5px;  background-color:cyan"
editbtn.style="padding:10px 20px; color:black; border-radius:5px;  background-color:cyan"
    delbtn.onclick=()=>{
        uls.removeChild(items)
    }
       
    editbtn.onclick=()=>{
        input=items.value;
    }

items=input.value;
uls.append(items,delbtn,editbtn);
list.appendChild(uls)

})