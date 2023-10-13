import { Navigate } from "react-router-dom";
import { DcPage, MarvelPage,HeroePage,SearchPage } from "../pages";

export const ChildHeroesRoutes = [

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
        path: "hero/:heroId",
        element: <HeroePage />
    },
    {
        path: "hero/",
        element: <HeroePage />
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