import Blog from "./components/Blog"
import PostBlog from "./components/PostBlog"
import Register from "./pages/Register"
import Login from "./pages/Login"


export const publicRoutes = [
    {
        name: "REGISTER",
        path: "/register",
        component: Register
    },
    {
        name: "LOGIN",
        path: "/login",
        component: Login
    }
]

export const privateRoutes = [
    {
        name: "BLOG",
        path: "/blog",
        component: Blog
    },
    {
        name: "POSTBLOG",
        path: "/post-blog",
        component: PostBlog
    }
]