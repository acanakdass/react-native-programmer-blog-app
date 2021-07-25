import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'
import { FlatList } from 'react-native-gesture-handler';
import useCategories from '../../hooks/useCategories';
import { ActivityIndicator } from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';

const CategoriesScreen = ({ navigation }) => {

   const [getCategoriesFromApi, categories] = useCategories()
   const [categoriesLoaded, setCategoriesLoaded] = React.useState(false);

   useEffect(() => {

      if (categories.length > 0) {
         setCategoriesLoaded(true)
      }
   }, [categories])

   useEffect(() => {
      const onFocus = navigation.addListener('focus', () => {

         // console.log('Categories screen focused!')
         getCategoriesFromApi()
      })
      return onFocus;
   }, [])

   useEffect(() => {
      const onBlur = navigation.addListener('blur', () => {

         // console.log('Categories screen blurred!')

      })
      return onBlur;

   }, [])

   const setIcon = (name) => {
      switch (name) {
         case 'C#':
            return (<MaterialCommunityIcons name="language-csharp" size={24} color="black" style={styles.icon} />)
         case 'Python':
            return (<Ionicons style={styles.icon} name="logo-python" size={24} color="black" />)
         case 'Java':
            return (<FontAwesome5 name="java" size={24} color="black" style={styles.icon} />)
         case 'Javascript':
            return (<Ionicons name="logo-javascript" size={24} color="black" style={styles.icon} />)
         case 'React':
            return (<FontAwesome5 name="react" size={24} color="black" style={styles.icon} />)
         case 'Angular':
            return (<FontAwesome5 name="angular" size={24} color="black" style={styles.icon} />)
         default:
            return (<AntDesign name="questioncircleo" size={24} color="black" style={styles.icon} />);
      }
   }
   var renderItem = ({ item }) => (

      <ListItem
         onPress={() => {
            const data = item.Articles.$values;
            navigation.push("CategoriesArticles", { categoryName: item.Name, articles: data })
         }}
         key={item.Id} bottomDivider
      >
         {setIcon(item.Name)}
         <ListItem.Content   >
            <ListItem.Title >{item.Name}</ListItem.Title>
         </ListItem.Content>
         <ListItem.Chevron />
      </ListItem>
   )

   if (!categoriesLoaded) {
      return (
         <ActivityIndicator style={{ marginTop: 250 }} size="large" animating={true} color="black" />
      )
   }

   return (
      <View>
         <FlatList

            keyExtractor={(item, index) => index.toString()}
            data={categories}
            renderItem={renderItem}
         />
      </View>

   )
}


export default CategoriesScreen

const styles = StyleSheet.create({
   icon: {
      width: 27
   }
})
