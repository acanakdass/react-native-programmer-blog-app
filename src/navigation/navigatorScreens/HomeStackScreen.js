import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons';

import HomeScreen from '../../screens/HomeScreen';
import ArticleMainScreen from '../../screens/ArticleMainScreen';
import { createStackNavigator } from '@react-navigation/stack'

const HomeStack = createStackNavigator();

const HomeStackScreen = ({ navigation }) => (
   <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={HomeScreen} options={{
         title: "Home Page", headerTitleAlign: 'center', headerLeft: () => (
            <AntDesign style={{ marginLeft: 15 }} name="menu-fold" size={24} color="black"
               onPress={() => navigation.toggleDrawer()} />
         ), headerRight: () => (
            <AntDesign style={{ marginRight: 15 }} name="infocirlceo" size={24} color="black"
               onPress={() => navigation.toggleDrawer()} />
         )
      }} />
      <HomeStack.Screen
         name="ArticleMain"
         component={ArticleMainScreen}
         options={({ route }) => ({
            title: route.params.articleName, headerTitleAlign: 'center'
         })} />

      {/* <HomeStack.Screen name="ArticleMain" component={ArticleMainScreen} options={{ title: "Article", animationEnabled: false }} /> */}
   </HomeStack.Navigator>
)

export default HomeStackScreen

const styles = StyleSheet.create({})
