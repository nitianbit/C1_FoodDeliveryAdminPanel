import React from 'react'
import { Outlet } from 'react-router-dom'
import SideNavbar from '../components/SideNavbar'
import AdminNavbar from '../components/AdminNavbar'

const AdminLayout = () => {
    return (
        <div className='w-screen h-screen overflow-hidden'>
            <div className='w-full h-full flex '>
                <div>
                    <SideNavbar />
                </div>
                <div className='w-full m-5'>
                    <AdminNavbar />
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
