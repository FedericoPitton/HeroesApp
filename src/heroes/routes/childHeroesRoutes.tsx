import { Navigate } from "react-router-dom";
import { DcPage, MarvelPage,Hero,SearchPage } from "../pages";

export const childHeroesRoutes = [

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
        path: "hero",
        element: <Hero />
    },
    {
        path: "search",
        element: <SearchPage />
    },
    {
        path: "/",
        element: <Navigate to={'marvel'}/>
    },

]