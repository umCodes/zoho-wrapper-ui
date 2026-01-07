import { colors } from '@/styles/styles';
import { Tabs } from 'expo-router';

export default function TabsLayout(){
  return (
    <Tabs      
    screenOptions={{
        headerStyle: {
          backgroundColor: colors.dark.background.backgroundColor,
        },
        headerTintColor: '#fff',
        tabBarStyle: {
          backgroundColor: colors.dark.background.backgroundColor, 
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: colors.dark.clickableText.color,
        tabBarInactiveTintColor: '#94a3b8',
      }}
    >
      <Tabs.Screen name='dashboard' options={{title: "Dashboard"}} />
      <Tabs.Screen name='salesorders' options={{title: "Sales Orders"}} />
    </Tabs>
  )

}
