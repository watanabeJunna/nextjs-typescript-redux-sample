import { createStore, Store, Reducer } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { initialState, reducer } from './reducer'

export type StoreState = ReturnType<typeof initialState>
export type ReduxStoreInstance = Store<StoreState>
// export type ReducerState = ReturnType<typeof reducer>
// export type ReduxReducerInstance = Reducer<ReducerState>

const makeConfiguredStore = (reducer: Reducer, initialState: StoreState) =>
    createStore(reducer, initialState, composeWithDevTools())

export type ConfiguredStore = ReturnType<typeof makeConfiguredStore> & {
    persistor: any
}

export const initStore = (state = initialState()) => {
    if (process.browser) {
        const persistConfig: any = {
            key: 'root',
            whitelist: ['todos'], 
            storage
        }

        const persistedReducer = persistReducer(persistConfig, reducer)
        const store = makeConfiguredStore(persistedReducer, state) as ConfiguredStore

        store.persistor = persistStore(store)

        return store
    } else {
        return makeConfiguredStore(reducer, state)
    }
}
