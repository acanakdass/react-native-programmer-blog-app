import React, { useState } from 'react'

import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Ionicons } from '@expo/vector-icons';


import HomeScreen from './src/screens/HomeScreen';

import { ActivityIndicator } from 'react-native';
import { AuthContext } from './src/context/AuthContext';
import SigninScreen from './src/screens/AuthScreens/SigninScreen';
import SignUpScreen from './src/screens/AuthScreens/SignUpScreen';
import AccountScreen from './src/screens/AccountScreen';
import SearchScreen from './src/screens/SearchScreen';
import CategoriesScreen from './src/screens/CategoryStackScreens/CategoriesScreen';
import CategoriesArticles from './src/screens/CategoryStackScreens/CategoriesArticles';
import ArticleMainScreen from './src/screens/ArticleMainScreen';

const Tab = createMaterialBottomTabNavigator();

const Tabs = createBottomTabNavigator();
const HomeStack = createStackNavigator();
const CategoryStack = createStackNavigator();
const AccountStack = createStackNavigator();
const ProfileStack = createDrawerNavigator();
const SearchStack = createStackNavigator();
const Drawer = createDrawerNavigator();
const AuthStack = createStackNavigator();
const RootStack = createStackNavigator();

const AuthStackScreen = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      options={{ title: "Sign In" }}
      name="SignIn"
      component={SigninScreen} />
    <AuthStack.Screen
      options={{ title: "SignUp" }}
      name="SignUp"
      component={SignUpScreen} />
  </AuthStack.Navigator>
)

const AppScreen = () => (
  <Drawer.Navigator>
    <Drawer.Screen name="Home" component={TabsScreen} />
    <Drawer.Screen name="Account" component={AccountScreen} />
  </Drawer.Navigator>
)

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{ title: "Home Page" }} />
    {/* <HomeStack.Screen name="ArticleMain" component={ArticleMainScreen} options={{ title: "Article", animationEnabled: false }} /> */}
  </HomeStack.Navigator>
)

const CategoryStackScreen = () => (
  <CategoryStack.Navigator>
    <CategoryStack.Screen name="Categories" component={CategoriesScreen} options={{ title: "Categories" }} />
    <CategoryStack.Screen name="CategoriesArticles" component={CategoriesArticles} options={{ title: "Articles of current category" }} />
    <CategoryStack.Screen name="ArticleMain" component={ArticleMainScreen} options={{ title: "Article" }} />

  </CategoryStack.Navigator>
)

const AccountStackScreen = () => (
  <AccountStack.Navigator>
    <AccountStack.Screen name="Account" component={AccountScreen} options={{ title: "Account" }} />
  </AccountStack.Navigator>
)

const ProfileStackScreen = () => (
  <ProfileStack.Navigator>
    <ProfileStack.Screen name="Profile" component={ProfileScreen} />
  </ProfileStack.Navigator>
)

const SearchStackScreen = () => (
  <SearchStack.Navigator>
    <SearchStack.Screen name="Search" component={SearchScreen} />
  </SearchStack.Navigator>
)

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
    <Tab.Screen options={{ tabBarLabel: "Categories" }} name="Categories" component={CategoryStackScreen} />
    <Tab.Screen options={{ tabBarLabel: "Home" }} name="Home" component={HomeStackScreen} />
    <Tab.Screen options={{ tabBarLabel: "Search" }} name="Search" component={SearchStackScreen} />
    <Tab.Screen options={{ tabBarLabel: "Account" }} name="Account" component={AccountStackScreen} />

  </Tab.Navigator>
)

const RootStackScreen = ({ userToken }) => (
  <RootStack.Navigator headerMode="none">
    {userToken ? (
      <RootStack.Screen name="App" component={AppScreen} options={{ animationEnabled: false }} />
    ) : (
      <RootStack.Screen name="Auth" component={AuthStackScreen} options={{ animationEnabled: false }} />
    )}
  </RootStack.Navigator>
)
const theme = {
  ...DefaultTheme,
  roundness: 15,
  colors: {
    ...DefaultTheme.colors,
    primary: 'black',
    accent: '#2E86AB',
  },
};

export default () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState("token");
  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken('token');
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken('token');
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      }
    }
  }, [])
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500)
  })


  if (isLoading) {
    return (
      <ActivityIndicator style={{ marginTop: 300 }} size="large" color="black" />
    )
  }
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