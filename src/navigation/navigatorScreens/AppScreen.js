import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import AccountScreen from '../../screens/AccountScreen';

import { createDrawerNavigator } from '@react-navigation/drawer';
import TabsScreen from './Tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AdminCategoryStackScreen from './AdminCategoryStackScreen';
// import CategoriesList from '../../screens/AdminScreens/Categories/CategoriesList';
const AppScreen = ({ navigation }) => {

   const Drawer = createDrawerNavigator();
   const [tokenData, setTokenData] = React.useState('')

   const getTokenData = async () => {
      try {
         var token = await AsyncStorage.getItem('tokenType');
         setTokenData(token);
         console.log("token :" + token);
      } catch (error) {
         console.log(error);
      }
   }

   React.useEffect(() => {
      const onFocus = navigation.addListener('focus', () => {
         // console.log("Home Screen focused");
         getTokenData()
      })
      return onFocus;
   }, [])

   return (
      <Drawer.Navigator>
         <Drawer.Screen name="Home" component={TabsScreen} />
         <Drawer.Screen name="Account" component={AccountScreen} />
         {tokenData == 'admin' ? (
            < Drawer.Screen name="Categories" component={AdminCategoryStackScreen} />
         ) : null}
         {/* {tokenData == 'admin' ? (
            < Drawer.Screen name="Articles" component={CategoriesList} />
         ): null} */}
      </Drawer.Navigator>
   )
}
export default AppScreen

const styles = StyleSheet.create({})
