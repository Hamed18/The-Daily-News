import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Login from "../pages/Home/Login/Login";
import Register from "../pages/Register/Register";
import News from "../pages/News/News";

const routes = createBrowserRouter([
	{
	  path: "/",
	  element: <Root></Root>,
	  children: [
		{
			path: "/",
			element: <Home></Home>,
			loader: () => fetch('/news.json')
		},
		{
			path: "/news/:id",  // dynamic route
			element: <News></News>
		},
		{
			path: '/login',
			element: <Login></Login>
		},
		{
			path: '/register',
			element: <Register></Register>
		}
	  ]
	},
  ]);

  export default routes;