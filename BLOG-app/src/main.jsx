import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import store from "../src/redux/store.js";
import "./index.css";
import App from "./App.jsx";
import { AuthLayout } from "./components/index.js";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
 import Post from "./pages/post";
import Signup from "./pages/SignUp";
import AddPost from "./pages/AddPost";
import AllPosts from "./pages/AllPosts";
import EditPost from "./pages/EditPost";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <LoginPage />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/all-posts",
        element: (
          <AuthLayout authentication>
            <AllPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout>
        ),
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      { path: "/post/:slug", element: <Post /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
