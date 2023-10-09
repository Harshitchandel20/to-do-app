const button = document.getElementById("button")
const input = document.getElementById("input")
const todolistparent = document.getElementById("todolist")

let todolist = []

button.addEventListener("click", addfunction)

// to add the input text in the list

function addfunction(){
    const inputText = input.value.length;
    if(inputText!==0){
    todolist.push(input .value)
    input.value = null}
    appendList()
}

// function addfunction(){
//     todolist.push(input.value)
//     input.value = null
//     appendList()
// }

// appending the information stored in our todolist

function appendList(){

    todolistparent.innerHTML = null
    todolist.forEach((el,ind)=>{
        todolistparent.innerHTML += ` <li> ${el} <a onClick=editList(${ind})>Edit</a> <a onClick=deleteList(${ind})> X &nbsp |</a> </li> `
    }
    )
}

// edit function for our todolist

function editList(index){
    let value = prompt()
    if (value ==""){
        appendList();
    }else if(value==cancel){
        appendList();
    }
    else{
    // todolist[index] = value
    todolist.splice(index,1,value)
    appendList()}
}

// delete List from todolist

function deleteList(index){
    todolist.splice(index,1)
    appendList()
}