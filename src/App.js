import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import "./App.css";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register";
import AdminLayout from "./layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";
import Orders from "./pages/orders/Orders";
import SingleOrderDetail from "./pages/orders/SingleOrderDetail";
import Menus from "./pages/menus/Menus";

const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" >

        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />

        <Route path="dashboard" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="users" element={<Users />} />
            <Route path="orders">
                <Route index element={<Orders />} />
                <Route path=":id" element={<SingleOrderDetail />} />
            </Route>

            <Route path="menus">
                <Route index element={<Menus />} />
            </Route>
        </Route>

    </Route>
))

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
