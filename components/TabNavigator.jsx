import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OngoingStreams from '../containers/screens/OngoingStreams';
import HomePage from '../containers/screens/HomePage';
const Tab = createMaterialTopTabNavigator();

 export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="Streams" component={OngoingStreams} />
    </Tab.Navigator>
  );
}