import * as SecureStore from 'expo-secure-store';

const API_URL = process.env.EXPO_PUBLIC_API_URL!;


console.log(API_URL);

export async function apiReqest(endpoint: string, method: 'GET' | 'POST' | 'DELETE' = 'GET' , body?: any, token: string = ''){
    try {
        if(!API_URL) throw new Error("API URL DOESN'T EXIST");
        
        console.log("fetching....");
        
        const response = await fetch(`${API_URL}/api/${endpoint}`, {
            method: method,
            headers: {
                'authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
                ...((endpoint === 'auth/refresh' || endpoint === 'auth/logout') && 
                    {"auth-refresh-token": await SecureStore.getItemAsync('refresh_token')})
            },
          ...(body && method !== 'GET' && { body: JSON.stringify(body)})
        })

        if(!response.ok) throw new Error(response.statusText)
            
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        throw console.error();
    }
} 


//Auth
