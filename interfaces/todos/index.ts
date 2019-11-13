import { Todo } from '../../store/todos'
import { ReduxStoreInstance } from '../../store'

export type PageContextProps = {
    store: ReduxStoreInstance
}

export type ComponentProps = {
    state: Todo[]
}