import { useAuth } from '@/context/authContext';
import { apiReqest } from '@/services/api';
import { colors, text } from '@/styles/styles';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

const SalesOrders = () => {
  const {user} = useAuth();
  const [orders, setOrders] = useState([]);
  
  const getOrder = async () => {

    try {
      const salesorders = await apiReqest('salesorders', 'GET', null, user!)
      console.log(salesorders);
      setOrders(salesorders);
    } catch (error) {
      console.error(error);
    }
  }
  
  useEffect(() => {getOrder()}, []);

  return (
    <View style={[colors.dark.background, {flex: 1, padding: 10}]}>
      {orders.length > 0 ? 
        orders.map((order: any) => (<SalesOrderItem key={order.id} order={order} />)):
        <Text style={[text.description, {margin: 10}]}>No Sales Orders Found</Text>
      }
    </View>
  )
}

export default SalesOrders



const SalesOrderItem = ({order}: {order: any}) => {
  const router = useRouter()

  return (
    <TouchableWithoutFeedback 
      onPress={() => router.push({
                        pathname: '(protected)/(modal)/salesorder/[id]',
                        params: { id: order.salesorder_id.toString() },
      })}
    >
    <View style={[colors.dark.background, {padding: 10, backgroundColor: '#282828ff', borderRadius: 8}]}>
      <Text style={[colors.dark.defaultText, text.subheading]}>{order.customer_name}</Text>
      <Text style={[colors.dark.defaultText, text.default]}>{order.salesorder_id}</Text>
      <Text style={[colors.dark.defaultText, text.description]}>{order.order_status}</Text>

    </View>
    </TouchableWithoutFeedback>

)
}

const styles = StyleSheet.create({})