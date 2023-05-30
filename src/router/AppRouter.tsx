import { createBrowserRouter,  RouterProvider } from "react-router-dom"
import { LoginPage } from "../auth"
import { MarvelPage, DcPage } from "../heroes"
import { HeroesApp } from "../HeroesApp"

const router = createBrowserRouter([
    {
        path: '/',
        element: <HeroesApp />,
        children: [
            
            {
                index: true,
                element: <MarvelPage />
            },
            {
                path: "marvel",
                element: <MarvelPage />
            },
            {
                path: "dc",
                element: <DcPage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
        ]
    }
])


export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
