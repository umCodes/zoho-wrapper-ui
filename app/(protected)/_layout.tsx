import { Tabs } from 'expo-router';

export default function TabsLayout(){
  return (
    <Tabs>
      <Tabs.Screen name='dashboard' options={{title: "Home"}} />
      <Tabs.Screen name='salesorders' options={{title: "Home"}} />
    </Tabs>
  )

}
