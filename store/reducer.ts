import { combineReducers } from 'redux'
import * as Todos from './todos'
import { State } from './todos'

const inject: State = {
    todos: []
}

export const initialState = () => {
    return {
        todos: Todos.initialState(inject),
    }
}

export const reducer = combineReducers({
    todos: Todos.reducer,
})