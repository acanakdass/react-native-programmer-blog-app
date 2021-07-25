import React, { useState } from 'react'
import { Button } from 'react-native-paper';
import { View } from 'react-native';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';



import HomeScreen from './src/screens/HomeScreen';

import { ActivityIndicator, LogBox } from 'react-native';
import { AuthContext } from './src/context/AuthContext';
import { Context as CategoriesContext } from './src/context/CategoriesContext';
import AccountScreen from './src/screens/AccountScreen';
import SearchScreen from './src/screens/SearchScreen';
import CategoriesScreen from './src/screens/CategoryStackScreens/CategoriesScreen';
import CategoriesArticles from './src/screens/CategoryStackScreens/CategoriesArticles';
import ArticleMainScreen from './src/screens/ArticleMainScreen';
import CreateCategoryScreen from './src/screens/AdminScreens/CreateCategoryScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AuthStackScreen from './src/navigation/navigatorScreens/AuthStackScreen';
import AppScreen from './src/navigation/navigatorScreens/AppScreen';

const Tab = createMaterialBottomTabNavigator();

// const Tabs = createBottomTabNavigator();
// const SearchStack = createStackNavigator();
const RootStack = createStackNavigator();


LogBox.ignoreAllLogs();



// const SearchStackScreen = () => (
//   <SearchStack.Navigator>
//     <SearchStack.Screen name="Search" component={SearchScreen} />
//   </SearchStack.Navigator>
// )

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" userToken={userToken} component={AppScreen} options={{ animationEnabled: false }} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreen} options={{ animationEnabled: false }} />
    )}
  </RootStack.Navigator>
)

const theme = {
  ...DefaultTheme,
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    accent: '#2E86AB',
  },
};

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('admin');
        console.log('admin login')
        AsyncStorage.setItem('tokenType', 'admin')

      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('admin');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
      goWithoutSignIn: () => {
        setUserToken('guest')
        console.log('guest login')
        AsyncStorage.setItem('tokenType', 'guest')
      }
    }
  }, [])

  // React.useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 500)
  // })


  // if (isLoading) {
  //   return (
  //     <ActivityIndicator style={{ marginTop: 300 }} size="large" color="black" />
  //   )
  // }
  return (
    <AuthContext.Provider value={authContext}>
      <PaperProvider theme={theme}>
        <NavigationContainer>
          <RootStackScreen userToken={userToken} />
        </NavigationContainer>
      </PaperProvider>
    </AuthContext.Provider>
  )
}