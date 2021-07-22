import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListItem, Icon } from 'react-native-elements'
import { FontAwesome5 } from '@expo/vector-icons';
import { FlatList } from 'react-native-gesture-handler';
import useCategories from '../../hooks/useCategories';
import { ActivityIndicator } from 'react-native-paper';

const CategoriesScreen = ({ navigation }) => {

   const list = [
      {
         title: 'Appointments',
         icon: 'clock'
      },
   ]

   const [getCategoriesFromApi, categories] = useCategories()
   const [categoriesLoaded, setCategoriesLoaded] = React.useState(false);

   useEffect(() => {

      if (categories != []) {
         setCategoriesLoaded(true)
      }
   }, [categories])

   var renderItem = ({ item }) => (
      <ListItem
         onPress={() => {
            console.log(item.Id);
            // console.log(item.Articles.$values);
            const data = item.Articles.$values;
            navigation.push("CategoriesArticles", { headerTitle: item.Name, articles: data })
         }}

         key={item.Id} bottomDivider>
         <FontAwesome5 name="react" size={24} color="black" />
         <ListItem.Content   >
            <ListItem.Title >{item.Name}</ListItem.Title>
         </ListItem.Content>
         <ListItem.Chevron />
      </ListItem>
   )

   console.log(categories)
   if (!categoriesLoaded) {
      return (
         <ActivityIndicator style={{ marginTop: 280 }} size="large" animating={true} color="black" />
      )
   }

   return (
      <View>
         <FlatList
            style={{ marginBottom: 15 }}
            keyExtractor={(item, index) => index.toString()}
            data={categories}
            renderItem={renderItem}
         />
      </View>

   )
}


export default CategoriesScreen

const styles = StyleSheet.create({})
