import {combineReducers, configureStore} from '@reduxjs/toolkit'
import todoReducer from "./todos/todoSlice.ts"
import authReducer from "./auth/authSlice.ts"
import singleTodoReducer from "./singletodo/singleTodoSlice.ts"
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
const reducers = combineReducers(
    {
        singleTodo:singleTodoReducer,
        todo:todoReducer,
        auth:authReducer
    })
const persistConfig = {
    key: 'root',
    storage,
}
const persistedReducers = persistReducer(persistConfig, reducers)


const store= configureStore({
    reducer: persistedReducers,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})
export const persistor=persistStore(store)
export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch