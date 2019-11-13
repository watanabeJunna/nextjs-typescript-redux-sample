import { useSelector } from 'react-redux'
import Task from './TodoListItem'
import { Todo } from '../store/todos'
import PlusButton from './PlusButton'

export default () => {
    const todos = useSelector((state: any) => state.todos.todos)

    return (
        <>
            {todos.map((item: Todo, index: number) => {
                return (
                    <Task
                        key={index}
                        task={item.task}
                    />
                )
            })}
            <PlusButton />
        </>
    )
}