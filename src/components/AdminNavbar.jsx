import React, { useState } from "react";
import { Navbar } from "@material-tailwind/react";

import ProfileMenu from "./ProfileMenu";
import ProfileDialog from "./Dialog/ProfileDialog";
import EditProfileDialog from "./Dialog/EditProfileDialog";

const AdminNavbar = () => {
    const [open, setOpen] = useState(false);
    const [editopen, setEditOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
    const edithandleOpen = () => setEditOpen(!editopen);

    return (
        <>
            <ProfileDialog open={open} handleOpen={handleOpen} />
            <EditProfileDialog  open={editopen} handleOpen={edithandleOpen}/>
            <Navbar className="mx-auto w-full shadow-none p-2 px-5">
            <div className="relative mx-auto flex items-center justify-between">
                <div className="flex flex-col gap-">
                    <h1 className="text-gray-900 font-extrabold text-xl tracking-wide">Welcome to Resturant</h1>
                    <span className="text-gray-700 text-sm">Hello Ankit Singh , Welcome Back !</span>
                </div>
                <ProfileMenu  handleOpen={handleOpen} edithandleOpen={edithandleOpen}/>
            </div>
        </Navbar>
        </>
    );
}

export default AdminNavbar