import { apiReqest } from "@/services/api";
import { useRouter } from "expo-router";
import * as SecureStore from 'expo-secure-store';
import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useState } from "react";

const AuthContext = createContext({
    user: null,
    userData: {
        phone_number: '',
        password: '',
    },
    setUserData: (() => {} ) as Dispatch<SetStateAction<{ phone_number: string; password: string; }>>,
    isLoading: false,
    error: '',
    // authorize: async () =>{},
    setError: (() => {}) as Dispatch<SetStateAction<string>>, 
    authenticate: async () => {}, 
    logout: async () => {} 
});


export function AuthProvider({children}: {children: ReactNode}){
    const [user, setUser] = useState(null);
    const [userData, setUserData] = useState({
        phone_number: '',
        password: '',
    });
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter()

    // useEffect(() => {
    //     if(!user) router.replace('/(public)')
    // }, [user, router]);
    
    const authenticate = async () => {
        try {
            setIsLoading(true)  
            const response = await apiReqest('auth/login', 'POST', userData)
            await SecureStore.setItemAsync('refresh_token', String(response.refresh_token));
            setUser(response.access_token);
            setIsLoading(false)
            router.replace('/(protected)/dashboard')
        } catch (error) {
            setIsLoading(false)
            console.error("Authentication error: ", error);
        }

    }

    const logout = async () => {
        try{
            await apiReqest('auth/logout', 'DELETE', null)
            await SecureStore.deleteItemAsync('refresh_token');
            setUser(null);
            router.replace('/(public)')
        }catch(error){
            console.error("Logout error: ", error);
        }
    }
    return (
        <AuthContext.Provider  value={{user, userData, setUserData, authenticate, isLoading, error, setError, logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext);
