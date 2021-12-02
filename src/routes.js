import Blog from "./components/Blog"
import PostBlog from "./components/PostBlog"
import Register from "./pages/Register"
import Login from "./pages/Login"
import Profile from "./pages/Profile"


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
    },
    {
        name: "PROFILE",
        path: "/profile",
        component: Profile
    }
]