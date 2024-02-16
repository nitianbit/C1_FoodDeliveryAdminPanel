import React, { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { doGET } from '../utils/httpUtil';
import { USER } from '../utils/constants';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const success = (message) => {
        return toast.success(message);
    };

    const error = (message) => {
        return toast.error(message)
    }

    const getCurrentUser = async (e) => {
        try {
            const response = await doGET(USER.CURRENT_USER);

            if (response?.data?.status >= 400) {
                return error(response?.data?.message)
            }
            if (response?.data?.status == 200) {
                setUser(response?.data?.data)
            }
        } catch (error) { }
    };

    useEffect(() => {
        if (localStorage.getItem('isLoggedIn')) {
            getCurrentUser()
        }
    }, [])


    const logout = () => {
        localStorage.clear();
        setLoggedIn(false);
        success("Logout Successfully")
    }

    const contextValue = {
        success,
        error,
        loggedIn,
        setLoggedIn,
        logout,
        user,
        setUser,
        getCurrentUser
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
