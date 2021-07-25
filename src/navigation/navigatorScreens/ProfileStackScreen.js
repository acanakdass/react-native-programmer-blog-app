import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';

import ProfileStackScreen from './ProfileStackScreen';
const ProfileStack = createDrawerNavigator();

const ProfileStackScreen = () => (
   <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
   </ProfileStack.Navigator>
)

export default ProfileStackScreen

const styles = StyleSheet.create({})
