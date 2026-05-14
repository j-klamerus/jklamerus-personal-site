import { createHashRouter } from "react-router-dom";

import App from "./App";
import Navbar from "./components/navbar";
import About from "./components/about";

export const router = createHashRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/about",
        element: <About/>
    }
])