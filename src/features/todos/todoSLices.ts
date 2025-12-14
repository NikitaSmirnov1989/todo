import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState: TodoItem[] = [];
export type TodoItem = {
    title: string; /*Заголовок задачи*/
    id: string; /*Идентификатор задачи id*/
    done: boolean; /*Выполнена ли задачи или нет*/
}

/*Тип экшена для удаления*/
type Add_Action = {
    type: string,
    payload: string,
}

type Remove_Action = {
    type: string,
    payload: string,
}

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        add(state, action: Add_Action){
            const newItem = {
                title: action.payload,
                id: uuidv4(),
                done: false,
            };
            state.push(newItem);

        },
        remove(state, action: Remove_Action){
            state = state.filter((item) => {
                return item.id !== action.payload;
            })
        }
    }
});

export const {add, remove} = todoSlice.actions;
export default todoSlice.reducer;