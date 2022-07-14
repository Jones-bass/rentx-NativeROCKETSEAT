import React, { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface User {
    id: string; // id do usuário no banco de dados local(celuar)/watermelondb
    user_id: string; // id do usuário no banco de dados do back-end/sqlite
    name: string;
    email: string;
    avatar: string;
    driver_license: string;
    token: string;
}

interface AuthState {
    user: User;
    token: string;
}

interface SignInCredentials {
    email: string;
    password: string;
}

interface AuthContextData { // interface dos dados que serão compartilhados na aplicação.
    user: User;
    signIn: (credentials: SignInCredentials) => Promise<void>;
}

export interface AuthProviderProps {
    children: ReactNode;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
    const [data, setData] = useState<AuthState>({} as AuthState);

    async function signIn({ email, password }: SignInCredentials) {
        const response = await api.post("/sessions", {
            email,
            password,
        });

        const { token, user } = response.data;
        api.defaults.headers.common.authorization = `Bearer ${token}`
        setData({token, user})

    }
    return (
        <AuthContext.Provider
            value={{
                user: data.user,
                signIn,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

function useAuth(): AuthContextData {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth };
