import { createHashRouter } from "react-router-dom";

import App from "./App";
import About from "./components/about";
import Projects from "./components/projects";
import Resume from "./components/resume";
import Links from "./components/Links";

export const router = createHashRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/projects",
        element: <Projects/>
    },
    {
        path: "/resume",
        element: <Resume/>
    },
    {
        path: "/links",
        element: <Links/>
    }
])