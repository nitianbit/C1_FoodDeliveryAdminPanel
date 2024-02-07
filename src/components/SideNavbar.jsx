import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Input,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import {
    MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

// const ListItems = [
//     { title: "Dashboard", icon: "PresentationChartBarIcon"},
//     { title: "Menu Item", icon: "ShoppingBagIcon"},
//     { title: "Orders", icon: "InboxIcon"},
//     { title: "Users", icon: "UserCircleIcon"},
//     { title: "Logout", icon: "PowerIcon"},
// ]

const SideNavbar = () => {
    

    return (
        <Card className="h-[100%] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5 border-r-2">
            <div className="mb-2 flex items-center gap-4 p-4">
                <img src="https://docs.material-tailwind.com/img/logo-ct-dark.png" alt="brand" className="h-8 w-8" />
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div>
            <div className="p-2">
                <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" />
            </div>
            <List className="mt-5">
                
                <NavLink to="/dashboard">
                    <ListItem className="" >
                        <ListItemPrefix>
                            <PresentationChartBarIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Dashboard
                        </Typography>
                    </ListItem>
                </NavLink>
    
                <NavLink to="/dashboard/menus">
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Menu Item
                        </Typography>
                    </ListItem>
                </NavLink>
    
        


                <NavLink to="/dashboard/orders">
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Orders
                        </Typography>
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                </NavLink>
    
                <NavLink to="/dashboard/users">
                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                            Users
                        </Typography>
                    </ListItem>
                </NavLink>
    

                <ListItem>
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Typography color="blue-gray" className="mr-auto font-normal">
                        Logout
                    </Typography>
                </ListItem>
            </List>

        </Card>
    );
}

export default SideNavbar