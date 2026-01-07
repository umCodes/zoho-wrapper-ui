import { useAuth } from '@/context/authContext';
import { Redirect } from 'expo-router';

export default function IndexRedirect() {
    
  const {user} = useAuth();

  if (!user) return <Redirect href='/(public)'/>
  else return <Redirect href='/(protected)'/>
}
