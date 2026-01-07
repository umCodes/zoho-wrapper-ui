import { Stack, useRouter } from 'expo-router'
import { Pressable, Text } from 'react-native'


export default function ModalsLayout() {
    const router = useRouter()
    
    return (
    <Stack>
        <Stack.Screen name="salesorder/[id]" options={{headerShown: true, title: 'Sales Order',headerLeft: () => (
                <Pressable onPress={() => router.back()}>
                <Text>Back</Text>
                </Pressable>
            ),}}/>
    </Stack>
  )
}


