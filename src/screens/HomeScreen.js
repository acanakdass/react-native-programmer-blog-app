import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements';
import { NavigationEvents } from 'react-navigation'
import useCategories from '../hooks/useCategories';
import { FlatList } from 'react-native-gesture-handler';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';

const HomeScreen = ({ route, navigation }) => {

   let testView = null

   const [articlesDatas, setArticlesDatas] = useState([])
   const [isReady, setIsReady] = useState(false)

   var paramId = 0
   if (route.params) {
      paramId = route.params.categoryId;
      testView = <Text> Id:{paramId} </Text>;
      // setCategoryIds(paramId)
   }

   const [getCategoriesFromApi, categories] = useCategories()


   useEffect(() => {
      if (paramId != 0) {

         const articles = categories.find(category => category.Id == paramId)
         console.log(articles.Articles.$values)
         setArticlesDatas(articles.Articles.$values)
      }
      setTimeout(() => {
         setIsReady(true)
      }, 2000)
   }, [paramId])





   if (!isReady) {
      return (
         <View style={{ margin: 100 }}>

            <ActivityIndicator animating={true} size="large" style={{ marginVertical: 250 }} color="black" />
         </View>
      )
   } else {

      return (
         <View style={{ margin: 10 }}>
            <SafeAreaView forceInset={{ top: 'always' }}>


            </SafeAreaView>
         </View>
      )
   }

}
export default HomeScreen

const styles = StyleSheet.create({})
