import { configureStore } from '@reduxjs/toolkit'
import staffReducer from './reducers/staffSlice'
 const store = configureStore({
    reducer : {
        staff:staffReducer,
    },
})
export default store;