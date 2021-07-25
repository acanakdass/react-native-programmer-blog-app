import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'



const AuthStack = createStackNavigator();

import SigninScreen from '../../screens/AuthScreens/SigninScreen'
import SignUpScreen from '../../screens/AuthScreens/SignUpScreen'

const AuthStackScreen = () => (
   <AuthStack.Navigator>
      <AuthStack.Screen
         options={{ title: "Sign In", headerTitleAlign: 'center', headerShown: false }}
         name="SignIn"
         component={SigninScreen} />
      <AuthStack.Screen
         options={{ title: "SignUp", headerTitleAlign: 'center', headerShown: false }}
         name="SignUp"
         component={SignUpScreen} />
   </AuthStack.Navigator>
)

export default AuthStackScreen

const styles = StyleSheet.create({})
