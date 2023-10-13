import { useContext } from "react"
import { AuthContext } from "../auth"
import { Navigate } from "react-router-dom"

export const PublicRoute = ({children}:any) => {

    const {logged}:any = useContext(AuthContext)
  return (!logged)
  ? children
  : <Navigate to={'/marvel'}/>
}
