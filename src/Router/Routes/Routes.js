import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Register from "../../Pages/Home/Login/Register";
import Services from "../../Pages/Services/Services";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import NotFound from "../../Pages/NoteFound/NotFound";
import Blog from "../../Pages/Blog/Blog";
import MyReviews from "../../Pages/Reviews/MyReviews";
import AddService from "../../Pages/AddService/AddService";
import PrivateRoute from "../Routes/PrivateRoute"



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/services',
                element: <Services />
            },
            {
                path: '/services/:id',
                element: <ServiceDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)

            },
            {
                path: '/reviews',
                element: <PrivateRoute><MyReviews /></PrivateRoute>
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/addService',
                element: <PrivateRoute><AddService /></PrivateRoute>
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
])

export default router;