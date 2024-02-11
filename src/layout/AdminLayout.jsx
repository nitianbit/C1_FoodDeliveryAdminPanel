import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import SideNavbar from '../components/SideNavbar'
import AdminNavbar from '../components/AdminNavbar'
import { useUserContext } from '../context/UserContext'

const AdminLayout = () => {
    const { error } = useUserContext()
    const navigate = useNavigate()

    const isLoggedIn = localStorage.getItem('isLoggedIn')
    // useEffect(() => {

    //     if (!isLoggedIn) {
    //         navigate('/')
    //         error('Not Authorized')
    //     }
    // }, [])

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
