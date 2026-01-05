import { AuthProvider, useAuth } from '@/context/authContext';
import { Stack, useRouter } from 'expo-router';
import { useEffect } from 'react';

 function RouteGaurd({children}: {children: React.ReactNode}){
  const router = useRouter()
  const {user} = useAuth()

  // useEffect(() => {

  //   if (user) {
  //     router.replace('/(app)/dashboard')
  //   } else {
  //     router.replace('/(auth)/welcome')
  //   }
  // }, [user, router])
  return (<>
    {children}
  </>);

}

export default function RootLayout(){

    const router = useRouter()
  const {user} = useAuth()

  useEffect(() => {

    if (user) {
      router.replace('/(protected)')
    } else {
      router.replace('/(public)')
    }
  }, [user, router])
  return (
    <AuthProvider>
    <RouteGaurd>
      <Stack screenOptions={{headerShown: false}}/>
    </RouteGaurd>
    </AuthProvider>
  )
}
