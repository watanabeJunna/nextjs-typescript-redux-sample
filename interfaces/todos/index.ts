import { compose } from 'redux'
import { Todo } from '../../store/todos'
import { ReduxStoreInstance } from '../../store'

export type PageContextProps = {
    store: ReduxStoreInstance
}

export type ComponentProps = {
    state: Todo[]
}

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose