import React from 'react';
import { createContext, useEffect, useState } from 'react';
import { getDataStorage, setDataStorage } from '../utils/storage.utils';

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [accessToken, setAccessToken] = useState(null);
    const [refreshToken, setRefreshToken] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const getStoredTokens = async () => {
            const storedAccessToken = await getDataStorage('accessToken');
            const storedRefreshToken = await getDataStorage('refreshToken');
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
    };

    const logout = async () => {
        await setDataStorage('accessToken', '');
        await setDataStorage('refreshToken', '');
        setAccessToken(null);
        setRefreshToken(null);
    };

    return (
        <AuthContext.Provider
            value={{ accessToken, refreshToken, isLoading, login, logout }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
