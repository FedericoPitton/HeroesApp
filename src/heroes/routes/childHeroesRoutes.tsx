import { Navigate } from "react-router-dom";
import { DcPage, MarvelPage } from "../pages";

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
        path: "*",
        element: <Navigate to={'marvel'}/>
    },

]