import { createSlice } from '@reduxjs/toolkit'
import { setItem } from '@utils/localStorage'

export const authSlice = createSlice({
    name: 'authen',
    initialState: {
        data: {
            isLogin: false,
            access_token: ''
        }
    },
    reducers: {
        loginAction: (state, action) => {
            setItem('isLogin', true)
            setItem('access_token', JSON.stringify(action.payload))

            return {
                ...state,
                isLogin: true,
                data: action.payload
            }
        },
        logoutAction: (state, action) => {
            localStorage.clear()
            return {
                ...state,
                isLogin: false,
                data: action.payload
            }
        },
        userLoaderAction: (state, action) => {
            return {
                ...state,
                isLogin: true,
                data: action.payload
            }
        },
    },
})
export const { loginAction, logoutAction, userLoaderAction } = authSlice.actions
export default authSlice.reducer