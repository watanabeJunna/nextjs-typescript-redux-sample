import { useSelector } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import Task from './TodoListItem'
import { Todo } from '../store/todos'
import AddTodo from './AddTodo'
import  { persistor } from '../configureStore'

export default () => {
    const todos = useSelector((state: any) => state.todos.todos)

    return (
        <>
            <PersistGate loading={null} persistor={persistor} >
                {todos.map((item: Todo, index: number) => {
                    if (item.done === false) {
                        return (
                            <Task
                                id={item.id}
                                key={index}
                                task={item.task}
                            />
                        )
                    }
                })}
                <AddTodo />
            </PersistGate>
        </>
    )
}