/*export  const increment =(payload) => {
    return {
type:"INCREMENT",
payload    }
}
export  const decrement =(payload) => {
    return {
type:"DECREMENT",
payload    }
}*//*
export  const add = "ADD"
export function add(addtask) {
    return{
        type:"ADD",
        payload: addtask
    }
}

export  const edit = "EDIT"
export function edit(edittask) {
    return{
        type:"EDIT",
        payload:edittask
    }
}

export  const delet = "DELETE"
export function delet(deletetask) {
    return {
        type:"DELETE",
        payload:deletetask
    }
}*/
export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";

export function addTodo(todo) {
    return {
        type:ADD_TODO,
        payload: todo,
    }
}

export function deleteTodo(todoId) {
    return {
        type:DELETE_TODO,
        payload: todoId,
    }
}


export function updateTodo(todo) {
    return {
        type:UPDATE_TODO,
        payload: todo,
    }
}
