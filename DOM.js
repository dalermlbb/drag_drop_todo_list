let list = document.querySelectorAll('li')
let delet = document.querySelector('.delete')

let Todo = document.querySelector('.Todo')
let TodoList = document.querySelector('.Todo-list')

let Diong = document.querySelector('.Diong')
let DiongList = document.querySelector('.Diong-list')

let Done = document.querySelector('.Done')
let DoneList = document.querySelector('.Done-list')

let Trash = document.querySelector('.Trash')
let TrashList = document.querySelector('.Trash-list')

let inpt = document.querySelector('input')
let add = document.querySelector('.btnAdd')

let olish = null

add.addEventListener('click',()=>{
    let list = document.createElement('li')
    list.textContent = inpt.value 
    list.setAttribute('draggable','true')
    TodoList.appendChild(list)
    inpt.value = ''
    inpt.focus()

    list.addEventListener("dragstart",(e)=>{
        olish = e.target 
    })
    
})

Diong.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

Diong.addEventListener("drop",(e)=>{
    DiongList.appendChild(olish)
})

Done.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

Done.addEventListener("drop",(e)=>{
    DoneList.appendChild(olish)
})

TodoList.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

TodoList.addEventListener("drop",(e)=>{
    TodoList.appendChild(olish)
})

TrashList.addEventListener("dragover",(e)=>{
    e.preventDefault()
})

TrashList.addEventListener("drop",(e)=>{
    TrashList.appendChild(olish)
})


delet.addEventListener('click',()=>{
    let TrashListLI = TrashList.querySelectorAll('li')

    TrashListLI.forEach((element)=>{
        TrashList.removeChild(element)
    })
})
