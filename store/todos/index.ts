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

export const reducer = (state = initialState(), action: Actions): State => {
    switch (action.type) {
        case 'TODOS_ADD_TODO':
            return {...state, todos: [...state.todos, action.payload]}
        case 'TODOS_DONE_TODO':
            const donePropProcessed = state.todos.map((item: Todo): Todo => {
                if (item.id === action.payload.id) {
                    return {...item, done: true}
                } else {
                    return item
                }
            })
            return {...state, todos: donePropProcessed}
        case 'TODOS_CHANGE_TODO':
            const taskPropProcessed = state.todos.map((item: Todo): Todo => {
                if (item.id === action.payload.id) {
                    return {...item, task: action.payload.task}
                } else {
                    return item
                }
            })

            return {...state, todos: taskPropProcessed}
        default:
            return state
    }
}