import React, { createContext, useContext } from 'react'
import { getItem } from '@utils/localStorage'
import { userLoaderAction } from '@redux/authReducer'
import { useDispatch, useSelector } from 'react-redux'

const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector((state) => {
        if (state.auth.isLogin) {
            return true
        } else {
            const access_token = JSON.parse(getItem('access_token'))
            if (access_token) {
                dispatch(userLoaderAction(access_token))
                return true
            } else {
                return false
            }
        }

    })

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )
}