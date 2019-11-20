import { createStore, Store, Reducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { initialState, reducer } from './reducer'

export type StoreState = ReturnType<typeof initialState>
export type ReduxStoreInstance = Store<StoreState>

export const initStore = (state = initialState(), { isServer, req, debug, storeKey }: any) => {
    return createStore(reducer, state, composeWithDevTools())
}