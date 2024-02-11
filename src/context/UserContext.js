import React, { createContext, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const UserContext = createContext();

export const useUserContext = () => {
    return useContext(UserContext);
}

export const UserProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false)
    const success = (message) => {
        return toast.success(message);
    };

    const error = (message) => {
        return toast.error(message)
    }


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
        logout
    };

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
