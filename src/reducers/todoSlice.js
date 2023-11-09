import { createSlice } from '@reduxjs/toolkit'

    
const todoSlice = createSlice({
    name: 'todos',
    initialState : [
        {
            id: 1,
            task: "sample text",
            completed: false
        }
    ],
    reducers: {
        addTodo: (state,action) => {
            const newTodo = {
                id: Date.now(),
                task: action.payload,
                completed: false
            }
            state.push(newTodo)
        },
        toggleComplete: (state,action) => {
            const index = state.findIndex((i) => i.id === action.payload.id)
            state[index].completed = action.payload.completed;
        },
        deleteTodo: (state,action) => {
            return state.filter((item) => (item.id !== action.payload.id))
        }
    }
})

export const {addTodo, toggleComplete, deleteTodo} = todoSlice.actions;
export default todoSlice.reducer;