import ThemeLayout from '../theme/layout/ThemeLayout.jsx';
import Home from '../theme/pages/home/Home.jsx';
import Login from '../theme/pages/auth/Login.jsx';
import Signup from '../theme/pages/auth/Signup.jsx';

const routes = [
	{
		path: "/",
		element: <ThemeLayout/>,
		children: [
			{
				index: true,
				element: <Home/>,
			},
			{
				path: "login",
				element: <Login/>,
			},
			{
				path: "signup",
				element: <Signup/>,
			}
		]
	},
]

export default routes;