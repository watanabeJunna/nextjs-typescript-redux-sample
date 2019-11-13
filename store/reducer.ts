import uuid from 'uuid/v4'
import { combineReducers } from 'redux'
import * as Todos from './todos'
import { Todo, State } from './todos'

/// DEBUG
const inject: State = {
    todos: [
        'Export Component完成させたい',
        '一通り突貫したテストをしたい',
        'DataContentコンポーネントのレンダリングを効率化したい',
        'connectを導入したい、Reduxのやつ',
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