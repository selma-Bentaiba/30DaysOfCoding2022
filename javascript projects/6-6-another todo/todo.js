const clear = document.querySelector(".clear")
const list = document.getElementById("list")
const input = document.getElementById("input")
const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough"

let LIST ,id

//storage
let data = localStorage.getItem("TODO")
if(data){
    LIST = JSON.parse(data)
    id = LIST.length 
    loadList(LIST)
}else{
    LIST = []
    id = 0
}

function loadList(array){
    array.forEach(function(item){
        addTODO(item.name, item.id, item.done, item.trash)
    });
}
clear.addEventListener("click",function(){
    localStorage.clear()
    location.reload()
})


const dateElement = document.getElementById("date");
const options = {weekday :"long", month:"short", day:"numeric" } ; 
const today = new Date();
dateElement.innerHTML = today.toLocaleDateString("en-US",options);

function addTODO( TODO, id, done, trash){
    if(trash){ return;}
    const DONE = done ? CHECK : UNCHECK     
    const LINE = done ? LINE_THROUGH : " "   
    
    
    const item = `
    <li class = "item">
<i class="fa ${DONE} co" job="complete" id="${id}"></i>
<p class="text ${LINE} ">${TODO}</p>
<i class="fa fa-trash-o de" job="delete" id="${id}"></i>
</li>`
const position ="beforeend"
list.insertAdjacentHTML(position, item);

}
document.addEventListener("keyup", function(event){
    if( event.keyCode == 13 ){
        const TODO = input.value 
        if(TODO){
            addTODO( TODO, id, false, false)
            LIST.push({
                name : TODO,
                id : id,
                done : false ,
                trash : false 
            });
            localStorage.setItem("TODO",JSON.stringify(LIST))
            id++
        }
        input.value = ""
    }
})

function completeTODO(element){
    element.classList.toggle(CHECK)
    element.classList.toggle(UNCHECK)
    element.parentNode.querySelector(".text").classList.toggle(LINE_THROUGH)
LIST[element.id].done = LIST[element.id].done ? false : true 
}

function removeTODO(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    LIST[element.id].trash = true
}
list.addEventListener("click",function(event){
    const element = event.target
    const elementJob = element.attributes.job.value
    if(elementJob == "complete"){
        completeTODO(element)
        
    }else if(elementJob == "delete"){
        removeTODO(element)
    }
})
















