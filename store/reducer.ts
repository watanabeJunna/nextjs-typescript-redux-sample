import uuid from 'uuid/v4'
import { combineReducers } from 'redux'
import * as Todos from './todos'
import { Todo, State } from './todos'

/// DEBUG
const inject: State = {
    todos: [
        'Redux Persist使いたい',
        'Jestでテストしたい',
        '型を修正とかしたい',
    ].map((e: string) => {
        return {
            id: uuid(),
            done: false,
            task: e
        } as Todo
    })
}

export const initialState = () => {
    return {
        todos: Todos.initialState(inject),
    }
}

export const reducer = combineReducers({
    todos: Todos.reducer,
})