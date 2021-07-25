import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'


const AccountStack = createStackNavigator();

import AccountScreen from '../../screens/AccountScreen';

const AccountStackScreen = () => (
   <AccountStack.Navigator>
      <AccountStack.Screen name="Account" component={AccountScreen} />
   </AccountStack.Navigator>
)

export default AccountStackScreen

const styles = StyleSheet.create({})
