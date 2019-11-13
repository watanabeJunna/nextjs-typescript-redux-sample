import Task from './TodoListItem'
import { PageContextProps } from '../interfaces/todos'
import { Todo } from '../store/todos'
import PlusButton from './PlusButton'

export default ({ store }: PageContextProps) => {
    return (
        <>
            {store.getState().todos.todos.map((item: Todo, index: number) => {
                return (
                    <Task
                        key={index}
                        task={item.task}
                    />
                )
            })}
            <PlusButton store={store} />
        </>
    )
}