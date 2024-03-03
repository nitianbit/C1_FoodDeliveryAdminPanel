import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    InboxIcon,
    UserCircleIcon,
} from "@heroicons/react/24/solid";

import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";



const SideNavbar = () => {
    const { logout } = useUserContext()

    return (
        <Card className="h-[calc(100vh)] w-full max-w-[14rem] p-4 shadow-xl shadow-blue-gray-900/5 ">
            <div className="mb-2 flex items-center gap-4 p-4">
                <img src="/logo.jpg" alt="brand" className="h-8 w-8" />
                <Typography variant="h6" color="blue-gray">
                    ChapatiBasket
                </Typography>
            </div>
            
            <List className="mt-5 text-gray-900">

                <NavLink to="/dashboard" end className={({ isActive }) => (isActive ? 'border-r-4 border-gray-800 max-w-[12.5rem] rounded-md' : 'max-w-[12.5rem] rounded-md')}>
                    <ListItem className="border-gray-800" >
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Dashboard
                        </Typography>
                    </ListItem>
                </NavLink>

                <NavLink to="/dashboard/menus" className={({ isActive }) => (isActive ? 'border-r-4 border-gray-800 max-w-[12.5rem] rounded-md' : 'max-w-[12.5rem] rounded-md')}>
                    <ListItem className="border-gray-800">
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Menu Item
                        </Typography>
                    </ListItem>
                </NavLink>

                <NavLink to="/dashboard/orders" className={({ isActive }) => (isActive ? 'border-r-4 border-gray-800 max-w-[12.5rem] rounded-md' : 'max-w-[12.5rem] rounded-md')}>
                    <ListItem className="border-gray-800">
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Orders
                        </Typography>
                        
                    </ListItem>
                </NavLink>

                <NavLink to="/dashboard/drivers" className={({ isActive }) => (isActive ? 'border-r-4 border-gray-800 max-w-[12.5rem] rounded-md' : 'max-w-[12.5rem] rounded-md')}>
                    <ListItem className="border-gray-800">
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Drivers
                        </Typography>
                    </ListItem>
                </NavLink>

            </List>

        </Card>
    );
}

export default SideNavbar