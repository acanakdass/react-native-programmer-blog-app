import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign } from '@expo/vector-icons';

const AdminStack = createStackNavigator();

import CreateCategoryScreen from '../../screens/AdminScreens/CreateCategoryScreen';
const AdminStackScreen = ({ navigation }) => (
   <AdminStack.Navigator>
      <AdminStack.Screen name="CreateCategory" component={CreateCategoryScreen} options={{
         title: "Create Category", headerTitleAlign: 'center', headerLeft: () => (
            <AntDesign style={{ marginLeft: 15 }} name="menu-fold" size={24} color="black"
               onPress={() => navigation.toggleDrawer()} />
         )
      }} />

      {/* <HomeStack.Screen name="ArticleMain" component={ArticleMainScreen} options={{ title: "Article", animationEnabled: false }} /> */}
   </AdminStack.Navigator>
)

export default AdminStackScreen

const styles = StyleSheet.create({})
