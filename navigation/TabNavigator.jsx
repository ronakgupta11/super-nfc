// import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { BottomNavigation } from 'react-native-paper';
import { Icon, MD3Colors } from 'react-native-paper';
import React,{useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Tab = createMaterialBottomTabNavigator();
import HomePageStack from './HomePageStack';
import StreamPageStack from './StreamPageStack';
import ProfilePageStack from './ProfilePageStack';
export default function MyTabs() {
  return (
    <Tab.Navigator
    tabbBar={({ navigation, state, descriptors, insets }) => (
      <BottomNavigation.Bar
        navigationState={state}
       safeAreaInsets={insets}
        onTabPress={({ route, preventDefault }) => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (event.defaultPrevented) {
            preventDefault();
          } else {
           navigation.dispatch({
              ...CommonActions.navigate(route.name, route.params),
              target: state.key,
            });
          }
        }}
        renderIcon={({ route, focused, color }) => {
          const { options } = descriptors[route.key];
          if (options.tabBarIcon) {
            return options.tabBarIcon({ focused, color, size: 30 });
          }

          return null;
        }}
        getLabelText={({ route }) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.title;

          return label;
        }}
      />
    )}
  >
      <Tab.Screen
        name="Home"
        component={HomePageStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="home" size={24} color={color} />;
          },
        

        }}
      />
      <Tab.Screen
        name="Streams"
        component={StreamPageStack}
        options={{
          tabBarLabel: 'Streams',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="swap-vertical" size={24} color={color} />;
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfilePageStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => {
            return <Icon source="account" size={24} color={color} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}