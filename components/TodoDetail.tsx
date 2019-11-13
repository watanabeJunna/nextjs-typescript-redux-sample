import Task from './TodoListItem'
import { ComponentProps } from '../interfaces/todos'
import { Todo } from '../store/todos'

export default ({ state }: ComponentProps) => {
    return (
        <>
            {state.map((item: Todo, index: number) => {
                return (
                    <Task
                        key={index}
                        task={item.task}
                    />
                )
            })}
        </>
    )
}