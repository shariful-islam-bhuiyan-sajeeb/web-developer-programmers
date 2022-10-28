import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../Layout/Main";
import Login from "../Home/Login";
import Register from "../Home/Register";
import Error from "../Categories/Error";
import Course from "../Categories/Course";
import FAQ from "../Categories/FAQ";
import Blog from "../Categories/Blog";
import Categories from "../Categories/Categories";
import CourseDetails from "../Categories/CourseDetails";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		errorElement: <Error />,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/categories",
				element: <Categories></Categories>,
			},
			{
				path: "/login",
				element: <Login></Login>,
			},
			{
				path: "/register",
				element: <Register></Register>,
			},
			{
				path: "/error",
				element: <Error></Error>,
			},
			{
				path: "/course",
				element: <PrivateRoutes> <Course></Course> </PrivateRoutes>,
				loader: () =>
					fetch("https://assignment-10-server-two.vercel.app/courses"),
			},

			{
				path: "/FAQ",
				element: <FAQ></FAQ>,
			},
			{
				path: "/blog",
				element: <Blog></Blog>,
			},
			{
				path: "/details/:id",
				loader: ({ params }) =>
					fetch(
						`https://assignment-10-server-two.vercel.app/courses/${params.id}`
					),
				element: <CourseDetails />,
			},
		],
	},
]);
