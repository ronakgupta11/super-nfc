import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import ProfilePage from '../containers/screens/ProfilePage'
const ProfilePageStack = () => {
  return (
    <Stack.Navigator>
     <Stack.Screen
      name="Profile "
      component={ProfilePage}
      options={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#2e64e5',
          fontFamily: 'Kufam-SemiBoldItalic',
          fontSize: 18,
        },
        headerStyle: {
          shadowColor: '#fff',
          elevation: 0,
        },
      }}
    />
    </Stack.Navigator>
  )
}

export default ProfilePageStack