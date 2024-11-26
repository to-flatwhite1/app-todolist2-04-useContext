import { v4 as uuidv4 } from 'uuid';

export const ADD_TODO = 'ADD_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const setTodos = (state, action) => {
    switch (action.type) {
        case ADD_TODO:
            return [
                {
                    id: uuidv4(),
                    isDone: false,
                    task: action.payload.task,
                    createDate: new Date().toLocaleDateString(),
                },
                ...state,
            ];
        case UPDATE_TODO:
            return state.map((todo) => {
                return todo.id === action.payload.id ? { ...todo, isDone: !todo.isDone } : todo;
            });
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.payload.id);
        default:
            return state;
    }
};
