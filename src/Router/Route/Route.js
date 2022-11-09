import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import NewService from "../../Pages/AddNewService/NewService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRout from "../../Pages/Login/PrivateRout";
import Register from "../../Pages/Register/Register";
import AllItems from "../../Pages/Service/AllItems";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/items',
                element: <AllItems></AllItems>
            },
            {
                path: '/blogs',
                element: <PrivateRout><Blogs></Blogs></PrivateRout>
            },
            {
                path: '/newservice',
                element: <NewService></NewService>
            }

        ]
    }
])
export default router; 