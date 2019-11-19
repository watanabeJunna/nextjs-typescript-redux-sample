import { createStore, Reducer, AnyAction, Store } from 'redux'
import { persistReducer, persistStore, Persistor } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { reducer } from './store/reducer'
import { State } from './store/todos'
import { PersistPartial } from 'redux-persist/es/persistReducer'
import { composeEnhancers } from './interfaces/todos'

const persistConfig: any = {
    key: 'root',
    storage,
    whitelist: ['todos']
}

const persistedReducer: Reducer<{
    todos: State;
} & PersistPartial, AnyAction> = persistReducer(persistConfig, reducer)

const store: Store<{
  todos: State;
} & PersistPartial, AnyAction> = createStore(
    persistedReducer,
    composeEnhancers()
)

export const persistor: Persistor = persistStore(store)
export default store