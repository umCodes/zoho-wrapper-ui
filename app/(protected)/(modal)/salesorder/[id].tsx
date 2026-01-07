import { useAuth } from '@/context/authContext';
import { apiReqest } from '@/services/api';
import { text } from '@/styles/styles';
import { useLocalSearchParams } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SalesOrder = () => {
    const {user} = useAuth();
    const [salesorder, setSalesOrder] = useState<any>(null);
    const { id } = useLocalSearchParams<{ id: string }>();
    async function getSalesOrder() {
        try {
            if(!user) throw new Error('User not authenticated');
            const so = await apiReqest(`salesorders/${id}`, 'GET', null, user);
            setSalesOrder(so)
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() =>{
        getSalesOrder();
    }, []);

   if(!salesorder) return <Text>Loading...</Text>
    
   return (
        <SafeAreaView>
            <Text style={[text.heading]}>{salesorder.customer_name}</Text>
            <Text style={[text.subheading]}>{salesorder.salesorder_id}</Text>
        </SafeAreaView>
  )
}

export default SalesOrder

const styles = StyleSheet.create({})