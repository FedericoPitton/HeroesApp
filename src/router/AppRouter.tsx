import { createBrowserRouter,  RouterProvider } from "react-router-dom"
import { LoginPage } from "../auth"
import { childHeroesRoutes, HeroesRoutes } from "../heroes/routes"

const router = createBrowserRouter([
    {
        path: "login",
        element: <LoginPage />
    },
    {
        path: '/',
        element: <HeroesRoutes />,
        children: childHeroesRoutes
    }
])


export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
