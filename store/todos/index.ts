import { Actions } from '../actions'

export interface Todo {
    id: string,
    done: boolean,
    task: string,
}

export interface State {
    todos: Todo[]
}

export const initialState = (injects?: State): State => {
    return {
        todos: [],
        ...injects
    }
}

export const reducer = (state = initialState(), action: Actions) => {
    switch (action.type) {
        case 'TODOS_ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]}
        default:
            return state
    }
}