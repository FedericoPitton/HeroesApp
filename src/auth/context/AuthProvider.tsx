import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


const init = () => {
    const getUser:any = localStorage.getItem('user');
    const user = JSON.parse(getUser)

    return {
        logged: !!user,
        user: user
    }
}
export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const onLogin = (name:string) => {
        const user = {id:'ABC', name}
        const action = {type: types.login,payload: user}

        localStorage.setItem('user', JSON.stringify(user));  
        dispatch(action)
    }
    const onLogout = () => {
        localStorage.removeItem('user')
        const action = {type: types.logout}
        dispatch(action)
    }
    return (
        <AuthContext.Provider value={{
            ...authState,
            login:onLogin,
            logout:onLogout
        }}>
            {children}
        </AuthContext.Provider>
    )
}

