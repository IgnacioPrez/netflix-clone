import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"
import { PublicRoutes } from "../routes"

const AuthGard = () => {
    const userState = useSelector(state => state.user)
    return userState.id ? <Outlet/> : <Navigate replace to={PublicRoutes.DASHBOARD}/>
}
export default AuthGard