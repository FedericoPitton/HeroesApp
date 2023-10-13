import { createBrowserRouter,  RouterProvider } from "react-router-dom"
import { AuthProvider, LoginPage } from "../auth"
import { ChildHeroesRoutes, HeroesRoutes } from "../heroes/routes"
import { PrivateRoute } from "./PrivateRoute"
import {  PublicRoute } from "./PublicRoute"

const router = createBrowserRouter([
    {
        path: "/login",
        element: <PublicRoute><LoginPage /></PublicRoute>
    },
    {
        path: '/',
        element: <PrivateRoute><HeroesRoutes /></PrivateRoute> ,
        children: ChildHeroesRoutes
    }
])


export const AppRouter = () => {
    return (
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    )
}
