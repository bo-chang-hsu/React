import { createSlice } from '@reduxjs/toolkit'

export const LoginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false
    },
    reducers: {
        login: (state) => {
            state.isLogin = true
        },
        logout: (state) => {
            state.isLogin = false
        }
    }
})
export const { login, logout } = LoginSlice.actions

export default LoginSlice.reducer
