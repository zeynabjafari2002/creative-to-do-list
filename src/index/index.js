"use strict"
let $=document

// date
let date=new Date()
// console.log(date);
let currentMonthDate=date.toLocaleString('en-US', {month: 'short'})
let dateRightNow= currentMonthDate +"/"+ date.getDate()

// variables of to dos
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
        date : dateRightNow, 
        status : false
    }
    if(inputValue.value==='' || inputValue.value===null ){
        alert("can't be empty")
    }
    else{
        taskArray.push(newTaskObj)
        todoGenerator(taskArray)
    }
    inputValue.value=''
    inputValue.focus()
    setLocalStorage(taskArray)
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
        if(inputValue.value==='' || inputValue.value===null ){
            alert("can't be empty")
        }
        else{
            taskArray.push(newTaskObj)
            todoGenerator(taskArray)
        }
        inputValue.value=''
        inputValue.focus()
    }
    setLocalStorage(taskArray)
}


// adding to DOM  
let tableBody=$.getElementById('tableBody')

function todoGenerator(todoList){
    tableBody.innerHTML=''
    todoList.forEach(function tasks(task){ 
        let tableRow=$.createElement('tr')
        tableRow.className='text-white'
        tableBody.appendChild(tableRow)

        let tableDataId=$.createElement('td')
        tableDataId.innerHTML=task.id
        tableDataId.className='text-center'
        tableRow.append(tableDataId)

        let tableDataTask=$.createElement('td')
        tableDataTask.innerHTML=task.task
        tableDataTask.className='pl-2'
        tableRow.append(tableDataTask)

        let tableDataDate=$.createElement('td')
        tableDataDate.innerHTML=task.date
        tableDataDate.className='text-center'
        tableRow.append(tableDataDate)

        let tableDataStatus=$.createElement('td')
        tableDataStatus.className='text-center cursor-pointer'
        tableDataStatus.setAttribute('onclick' , 'changeStatusInArray('+task.id+')')
        if(task.status){
            let doneTask=$.createElement('i')
            doneTask.className='uil uil-check-square'
            tableDataStatus.append(doneTask)
        }
        else if(!task.status){
            let unDone=$.createElement('i')
            unDone.className='uil uil-square-full'
            tableDataStatus.append(unDone)
        }
        tableRow.append(tableDataStatus)

        let tableDataDelete=$.createElement('td')
        tableDataDelete.className='text-center cursor-pointer  text-xl'
        tableDataDelete.setAttribute('onclick','deleteTask('+task.id+')')
        let deleteIcon=$.createElement('i')
        deleteIcon.className='uil uil-trash-alt hover:text-red-600'
        tableDataDelete.append(deleteIcon)
        tableRow.append(tableDataDelete)

    })
}

// change status
function changeStatusInArray(taskId){
    let clickedTask=taskArray.find((todo)=>todo.id===taskId);

    if(clickedTask.status===false){
        clickedTask.status=true
        taskArray[taskId-1].status=true

        todoGenerator(taskArray)
        setLocalStorage(taskArray)
    }
    else if(clickedTask.status===true){
        clickedTask.status=false
        taskArray[taskId-1].status=false

        todoGenerator(taskArray)
        setLocalStorage(taskArray)
    }
}

// delete task
function deleteTask(taskId){
    let localStorageTodos=JSON.parse(localStorage.getItem('todo'))
    taskArray=localStorageTodos
    let onclickedTodo=localStorageTodos.findIndex(function (todo){
        return todo.id===taskId
    })

    taskArray.splice(onclickedTodo,1)
   
    setLocalStorage(taskArray)
    todoGenerator(taskArray)
}

// adding to local  storage
function setLocalStorage(todoList){
    localStorage.setItem('todo' , JSON.stringify(todoList))
}


// getting data from local storage
function getDataFromLocalStorage(){
    let localStorageData=JSON.parse(localStorage.getItem('todo'))
    if(localStorageData){
        taskArray=localStorageData
    }
    else{
        taskArray=[]
    }
    todoGenerator(taskArray)
}

window.addEventListener('load' , getDataFromLocalStorage)
