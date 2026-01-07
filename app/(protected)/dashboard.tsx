import { useAuth } from '@/context/authContext';
import { colors } from '@/styles/styles';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function Dashboard(){
  const {user, logout} = useAuth();
  return (
    <View style={[colors.dark.background, {flex: 1}]}>
      <Text style={[colors.dark.defaultText]}>
        {user}
      </Text>
      <Pressable onPress={logout}>
        <Text style={[colors.dark.clickableText]}>Logout</Text>
      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({})