import { createBrowserRouter } from "react-router-dom";
import Blogs from "../../Pages/Blogs/Blogs";
import Contact from "../../Pages/Contact/Contact";
import Error from "../../Pages/Error/Error";
import Home from "../../Pages/Home/Home";
import SingleProject from "../../Pages/Home/Projects/SingleProject";
import Main from "../Main/Main";

export const router = createBrowserRouter([
    {
        path: '*',
        element: <Error></Error>
    },
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/projects/:id',
                element: <SingleProject></SingleProject>
            }
        ]
    }
])