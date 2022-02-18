import { configureStore } from '@reduxjs/toolkit'
import LoginReducer from './Slice/LoginSlice'

export default configureStore({
    reducer: {
        Login: LoginReducer
    }
})
