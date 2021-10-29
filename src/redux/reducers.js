/*
const initialState = 
{   counter : 0};


 export default function reducer (state=initialState,action ) 
 {
     switch(action.type){
         case "INCREMENT":
             return {counter: state.counter+2};

             
        case "DECREMENT":
        return {counter:state.counter-3.5};
        default :
       return state;     
     }
 }
 //
 const initialState = {
     todos: [{id:1, task:"One", isDone: false}],
 }
 const todoReducer =(state=initialState, action)  => {
     switch (action.type) {
         case types.COMPLETE_TODO:
             return {
                 ...state,
             }
     }
 }
 export default todoReducer;*/
 import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from './actions';
import { todos } from './states';


export let reducer = (state = todos, action) => {
    let newTodos;
    switch (action.type) {
        case ADD_TODO:
            newTodos = [...state];
            newTodos.push(action.payload);
            return newTodos;
        case DELETE_TODO:
            newTodos = [...state];
            newTodos = newTodos.filter(todo => todo.id != action.payload);
            return newTodos;
        case UPDATE_TODO:
            newTodos = [...state];
            let index = -1;
            for (let i = 0; i < newTodos.length; i++) {
                index++;
                if (newTodos[i].id == action.payload.id) {
                    break;
                }

            }
            if (index != -1) {
                newTodos[index] = action.payload;
                return newTodos;
            }

    }
    return state;
}