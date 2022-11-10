import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import NewService from "../../Pages/AddNewService/NewService";
import Blogs from "../../Pages/Blogs/Blogs";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import PrivateRout from "../../Pages/Login/PrivateRout";
import Register from "../../Pages/Register/Register";
import Allreview from "../../Pages/Review/Allreview";
import MoreItems from "../../Pages/Review/MoreItems";
import Review from "../../Pages/Review/Review";
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
                element: <Blogs></Blogs>
            },
            {
                path: '/newservice',
                element: <NewService></NewService>
            },
            // {http://localhost:5000/services/${params.id},
            {
                path: "/review/:id",
                loader: ({ params }) => fetch(`https://treval-server-l7liumtab-masraful.vercel.app/services/${params.id}`),
                element: <PrivateRout><Review></Review></PrivateRout>

            },
            {
                path: '/costomer',
                element: <Allreview></Allreview>
            },
            {
                path: '/allservice/:id',
                loader: ({ params }) => fetch(`https://treval-server-l7liumtab-masraful.vercel.app/items/${params.id}`),
                element: <PrivateRout><MoreItems></MoreItems></PrivateRout>
            }

        ]
    }
])
export default router; 