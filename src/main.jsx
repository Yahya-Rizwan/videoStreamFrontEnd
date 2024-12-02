import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home.jsx";
import store from "./Redux-tool-kit/store.js"
import { Provider } from "react-redux";
import SignUpPage from "./pages/SignUpPage.jsx";
import User from "./pages/User.jsx";
import LogInPage from "./pages/LoginPage.jsx";
import VideoPage from "./pages/Video.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <LogInPage />,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/user",
        element: <User />,
      },
      {
        path: "/video",
        element: <VideoPage />,
      },
      
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
