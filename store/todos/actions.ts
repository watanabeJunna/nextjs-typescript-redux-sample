import uuid from 'uuid/v4'
import types from './types'

/**
 * @param task 
 */
export const addTodo = (task: string) => {
    return {
        type: types.addTodo,
        payload: {
            id: uuid(),
            done: false,
            task
        }
    }
}

/**
 * @param id 
 */
export const doneTodo = (id: string) => {
    return {
        type: types.doneTodo,
        payload: { id }
    }
}

/**
 * @param id
 * @param task
 */
export const changeTodo = (id: string, task: string) => {
    return {
        type: types.changeTodo,
        payload: {
            id,
            task
        }
    }
}