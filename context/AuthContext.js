import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { getDataStorage, setDataStorage } from '../utils/storage.utils';
import axios from 'axios';
import { API_URL } from '../constants';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState({ name: '', email: '' });
    const [isLogout, setIsLogout] = useState(false);

    useEffect(() => {
        const getStoredTokens = async () => {
            const storedAccessToken = await getDataStorage('accessToken');
            const storedRefreshToken = await getDataStorage('refreshToken');
            if (!storedAccessToken || !storedRefreshToken) {
                setIsLoading(false);
                setIsLogout(true);
                return;
            }
            setAccessToken(storedAccessToken);
            setRefreshToken(storedRefreshToken);
            setIsLoading(false);
        };

        getStoredTokens();
    });

    const login = async (accessToken, refreshToken) => {
        await setDataStorage('accessToken', accessToken);
        await setDataStorage('refreshToken', refreshToken);
        setAccessToken(accessToken);
        setRefreshToken(refreshToken);
        setIsLogout(false);
    };

    const updateUser = async () => {
        try {
            console.log('accessToken', accessToken);
            console.log('refreshToken', refreshToken);
            const res = await axios.get(`${API_URL}/user`, {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    'x-refresh': refreshToken,
                },
            });
            setUser(res.data.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        updateUser();
    }, [accessToken && refreshToken]);

    const logout = async () => {
        await setDataStorage('accessToken', '');
        await setDataStorage('refreshToken', '');
        setIsLogout(true);
        setAccessToken(null);
        setRefreshToken(null);
    };

    return (
        <AuthContext.Provider
            value={{
                accessToken,
                refreshToken,
                isLoading,
                login,
                logout,
                user,
                updateUser,
                isLogout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
