import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import * as reactRouterDom from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import ErrorPage from "./pages/ErrorPage";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import About from "./pages/About";
import * as Sentry from "@sentry/react";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = reactRouterDom.createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/contact",
		element: <Contact />,
	},
	{
		path: "/signup",
		element: <Signup />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/donate",
		element: <Donate />,
	},
	{
		path: "/errorpage",
		element: <ErrorPage />,
	},
]);

Sentry.init({
	dsn: "https://3c82e074ec5f2a7fecc13f13337c5b4c@o4507321460588544.ingest.us.sentry.io/4507321462423552",
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.replayIntegration(),
	],
	// Performance Monitoring
	tracesSampleRate: 1.0, //  Capture 100% of the transactions
	// Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled
	tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});

root.render(
	<React.StrictMode>
		<ToastContainer
			position="top-center"
			autoClose={500}
			hideProgressBar
			newestOnTop
			closeOnClick={false}
			theme="dark"
			closeButton={false}
			rtl={false}
			draggable
			className="custom-toast-container"
			toastClassName="custom-toast"
		/>

		<reactRouterDom.RouterProvider router={router} />
	</React.StrictMode>
);
