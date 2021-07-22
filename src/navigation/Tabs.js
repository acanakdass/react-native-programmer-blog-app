import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CategoriesScreen from '../screens/CategoryStackScreens/CategoriesScreen';
import HomeScreen from '../screens/HomeScreen'
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import SigninScreen from '../screens/SigninScreen';

const Tab = createMaterialBottomTabNavigator();
const Tabs = () => {
   return (

      <Tab.Navigator
         // activeColor="#e91e63"
         activeColor="black"
         shifting
         labeled
         initialRouteName="Home"
         barStyle={{ backgroundColor: 'white', }}
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
         <Tab.Screen options={{ tabBarLabel: "Categories" }} name="Categories" component={CategoriesScreen} />
         <Tab.Screen options={{ tabBarLabel: "Categories2" }} name="Categories2" component={CategoriesScreen} />
         <Tab.Screen options={{ tabBarLabel: "Home" }} name="Home" component={HomeScreen} />
         <Tab.Screen options={{ tabBarLabel: "Search" }} name="Search" component={HomeScreen} />
         <Tab.Screen options={{ tabBarLabel: "Account" }} name="Account" component={SigninScreen} />

      </Tab.Navigator>


      // <NavigationContainer>
      //    <Stack.Navigator>
      //       <Stack.Screen name="Home" component={Home} />
      //       <Stack.Screen name="Profile" component={Profile} />
      //       <Stack.Screen name="Settings" component={Settings} />
      //    </Stack.Navigator>
      // </NavigationContainer>
   );
}


export default Tabs;