import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import OngoingStreams from '../containers/screens/OngoingStreams';
import HomePage from '../containers/screens/HomePage';
const Tab = createMaterialTopTabNavigator();
import HomePageStack from '../navigation/HomePageStack';
import StreamPageStack from '../navigation/StreamPageStack';
import ProfilePageStack from '../navigation/ProfilePageStack';
 export default function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomePageStack} />
      <Tab.Screen name="Profile" component={ProfilePageStack} />
      <Tab.Screen name="Streams" component={StreamPageStack} />
    </Tab.Navigator>
  );
}