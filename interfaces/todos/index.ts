import { compose } from 'redux'
import { Todo } from '../../store/todos'
import { ConfiguredStore } from '../../store'

export type PageContextProps = {
    store: ConfiguredStore
}

export type ComponentProps = {
    state: Todo[]
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}