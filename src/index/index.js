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
       
    }
}









