import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Register from "../../Pages/Home/Login/Register";
import Services from "../../Pages/Services/Services";
import ServiceDetails from "../../Pages/Services/ServiceDetails";
import NotFound from "../../Pages/NoteFound/NotFound";
import Blog from "../../Pages/Blog/Blog";



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
                // loader: ({params}) =>{fetch(`services.json/services/${params.id}`)},
                element: <ServiceDetails />,
               
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path:'*',
                element: <NotFound />
            }
        ]
    }
])

export default router;