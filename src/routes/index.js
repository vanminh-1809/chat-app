import Login from "../pages/Login";
import Register from "../pages/Register";
import Chat from "../pages/Chat";

export const publicRoutes = [
    {path: '/login', component: Login},
    {path: '/register', component: Register}
]

export const privateRoutes = [
    {path: '/', component: Chat}
]