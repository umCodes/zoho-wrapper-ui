import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';


export default function Home(){
    const router = useRouter();
  return (
    <View>

      <Pressable onPress={() => {}}>
        <Text>Home</Text>

      </Pressable>
    </View>
  )
}


const styles = StyleSheet.create({})