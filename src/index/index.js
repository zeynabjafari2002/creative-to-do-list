"use strict"
let $=document

// date
let dateRightNow=new Date().getMonth() +"/"+ new Date().getDate()

// statistics of to dos
let taskArray=[]
let totalNum=$.querySelector('#totalNum')
let completedNum=$.querySelector('#completedNum')
let pendingNum=$.querySelector('#pendingNum')
let inputValue=$.querySelector('#todoInput')
let pencilAddBtn=$.querySelector('#submitTodoBtn')

// adding task to array
pencilAddBtn.addEventListener('click' , addNewTaskByPencilBtn)

function addNewTaskByPencilBtn(){
    let newTaskObj={
        id : taskArray.length+1 ,
        task : inputValue.value ,
        date : dateRightNow , 
        status : false
    }
    inputValue.value=''
    taskArray.push(newTaskObj)
    todoGenerator(taskArray)
}

$.addEventListener('keypress' , addNewTaskByEnter)

function addNewTaskByEnter(event){
    if(event.keyCode===13){
        let newTaskObj={
            id : taskArray.length+1 ,
            task : inputValue.value ,
            date : dateRightNow ,
            status : false
        }
        inputValue.value=''
        taskArray.push(newTaskObj)
        todoGenerator(taskArray)
    }
}


// adding to DOM  
let tableBody=$.getElementById('tableBody')

function todoGenerator(todoList){
    tableBody.innerHTML=''
    todoList.forEach(function tasks(task){
        tableBody.insertAdjacentHTML("beforeend" , '<tr class="text-white "><td class=" text-center">'+ task.id +'</td><td class=" pl-2">'+task.task+'</td><td class=" text-center">'+task.date+'</td><td class=" text-center cursor-pointer"><i class="uil uil-square-full"></i></td><td class=" text-center cursor-pointer  text-xl"><i class="uil uil-trash-alt  hover:text-red-600"></i></td></tr>' )
    })
}






