import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home/Home";
import UserDetails from "../components/UserDetails/UserDetails";
import Main from "../layout/Main";


export const router = createBrowserRouter([

    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/user/:id',
                element: <UserDetails></UserDetails>,
                loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            }

        ]
    }
])