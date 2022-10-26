import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Home/Login";
import Register from "../Home/Register";
import Error from "../Categories/Error";
import Course from "../Categories/Course";
import FAQ from "../Categories/FAQ";
import Blog from "../Categories/Blog";

 export const  router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
             path:'/home',
             element:<Home></Home>   
            },
            {
               path:'/login',
               element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'/error',
                element:<Error></Error>
            },
            {
                path:'/course',
                element:<Course></Course>
            },
            {
                path:'/FAQ',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            }

        ]
    },
 ])