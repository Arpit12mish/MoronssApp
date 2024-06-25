import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home/HomeScreen';
// Import other screens for the bottom tabs here if needed

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* Add other tabs here if needed */}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
