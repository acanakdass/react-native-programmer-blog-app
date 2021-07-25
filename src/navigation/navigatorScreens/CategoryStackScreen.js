import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import CategoriesScreen from '../../screens/CategoryStackScreens/CategoriesScreen';
import CategoriesArticles from '../../screens/CategoryStackScreens/CategoriesArticles';
import ArticleMainScreen from '../../screens/ArticleMainScreen';
import { createStackNavigator } from '@react-navigation/stack'

const CategoryStack = createStackNavigator();


const CategoryStackScreen = () => (
   <CategoryStack.Navigator>
      <CategoryStack.Screen name="Categories" component={CategoriesScreen} options={{ title: "Categories", headerTitleAlign: 'center' }} />
      <CategoryStack.Screen
         name="CategoriesArticles"
         component={CategoriesArticles}
         options={({ route }) => ({
            title: route.params.categoryName,
            headerTitleAlign: 'center'
         })} />

      <CategoryStack.Screen
         name="ArticleMain"
         component={ArticleMainScreen}
         options={({ route }) => ({
            title: route.params.articleName, headerTitleAlign: 'center'
         })} />

   </CategoryStack.Navigator>
)

export default CategoryStackScreen

const styles = StyleSheet.create({})
