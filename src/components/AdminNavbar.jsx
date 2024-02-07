import React from "react";
import { Navbar } from "@material-tailwind/react";

import ProfileMenu from "./ProfileMenu";

const AdminNavbar = () => {

    return (
        <Navbar className="mx-auto w-full shadow-none p-2 px-5">
            <div className="relative mx-auto flex items-center justify-between">
                <div className="flex flex-col gap-">
                    <h1 className="text-gray-900 font-extrabold text-xl tracking-wide">Welcome to Resturant</h1>
                    <span className="text-gray-700 text-sm">Hello Ankit Singh , Welcome Back !</span>
                </div>
                <ProfileMenu />
            </div>
        </Navbar>
    );
}

export default AdminNavbar