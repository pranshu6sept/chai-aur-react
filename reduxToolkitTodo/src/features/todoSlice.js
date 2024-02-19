import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState ={
    todos:[{
        id:1,
        text:"Hello World"
    }]
}

export const todoSlice =createSlice({
    name:'todo',
    initialState,
    reducers:{
        addToDo : (state, action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeToDo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>todo.id !== action.payload)
        },
        updateToDo : (state,action)=>{
            state.todos = state.todos.map((prevtodo)=>prevtodo.id !== action.payload? todo : prevtodo)
        },


    }

})

export const {addToDo,removeToDo,updateToDo} = todoSlice.actions

export default todoSlice.reducer