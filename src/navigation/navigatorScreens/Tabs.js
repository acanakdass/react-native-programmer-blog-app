import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import CategoryStackScreen from './CategoryStackScreen';
import HomeStackScreen from './HomeStackScreen';
import AccountStackScreen from './AccountStackScreen';

const Tab = createMaterialBottomTabNavigator();
const TabsScreen = () => (
   // <Tabs.Navigator>
   //   <Tabs.Screen name="Home" component={HomeStackScreen} />
   //   {/* <Tabs.Screen name="Profile" component={ProfileStackScreen} /> */}
   //   <Tabs.Screen name="Search" component={SearchStackScreen} />
   // </Tabs.Navigator>
   <Tab.Navigator
      // activeColor="#e91e63"
      activeColor="black"
      shifting
      labeled
      initialRouteName="Home"
      barStyle={{ backgroundColor: 'white', height: 50 }}
      screenOptions={({ route }) => ({
         tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
               iconName = focused ? 'home' : 'home-outline';
               size = focused ? 25 : 20;
            } else if (route.name === 'Search') {
               iconName = focused ? 'search' : 'search-outline';
               size = focused ? 25 : 20;
            } else if (route.name === 'Categories') {
               iconName = focused ? 'list' : 'list-outline';
               size = focused ? 25 : 20;
            } else if (route.name === 'Categories2') {
               iconName = focused ? 'list' : 'list-outline';
               size = focused ? 25 : 20;
            } else if (route.name === 'Account') {
               iconName = focused ? 'person' : 'person-outline';
               size = focused ? 25 : 20;
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
         },

      })}

   >
      <Tab.Screen options={{ tabBarLabel: "Categories" }} name="Categories" component={CategoryStackScreen} />
      <Tab.Screen options={{ tabBarLabel: "Home" }} name="Home" component={HomeStackScreen} />
      <Tab.Screen options={{ tabBarLabel: "Account" }} name="Account" component={AccountStackScreen} />

   </Tab.Navigator>
)


export default TabsScreen;