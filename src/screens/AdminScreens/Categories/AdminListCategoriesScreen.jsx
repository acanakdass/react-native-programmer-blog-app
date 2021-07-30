import React, { useEffect } from 'react'
import { StyleSheet, View, Text, Animated, TouchableOpacity, ToastAndroid } from 'react-native'
import { ListItem, Icon } from 'react-native-elements'

import { ActivityIndicator } from 'react-native-paper';
import { MaterialCommunityIcons, AntDesign, Ionicons, FontAwesome5 } from '@expo/vector-icons';
import useCategories from '../../../hooks/useCategories';
import { Swipeable, FlatList, RectButton } from 'react-native-gesture-handler';

const AdminListCategoriesScreen = ({ navigation }) => {

   const [getCategoriesFromApi, categories, postCategory, isPosting, deleteCategory] = useCategories()
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

      getCategoriesFromApi()
   }, [isPosting])
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


   const onSwipeFromRight = () => {
      ToastAndroid.show('swiped to see delete button', ToastAndroid.SHORT)
   }
   const onPressDelete = (categoryId) => {
      deleteCategory(categoryId)
      console.log('deletedd')
      console.log(categoryId)
   }

   const RightSwapActions = ({ progress, dragX, onPressRightButton, categoryId }) => {
      const scale = dragX.interpolate({
         inputRange: [0, 100],
         outputRange: [0, 1],
         extrapolate: 'clamp'
      });
      return (
         <TouchableOpacity onPress={() => onPressDelete(categoryId)} style={styles.rightSwap} >
            <View>
               <Animated.Text style={[
                  styles.rightSwapText,
                  {
                     transform: [{ translateX: scale }],
                  },
               ]}>
                  Delete
               </Animated.Text>
            </View>
         </TouchableOpacity >
      )
   }

   var renderItem = ({ item }) => (

      <Swipeable
         renderRightActions={(progress, dragX) => <RightSwapActions categoryId={item.Id} dragX={dragX} progress={progress} onPressRightButton={onPressDelete} />}
         onSwipeableRightOpen={onSwipeFromRight}
      >
         <ListItem key={item.Id} bottomDivider>
            {setIcon(item.Name)}
            <ListItem.Content   >
               <ListItem.Title >{item.Name}</ListItem.Title>
            </ListItem.Content>
         </ListItem>
      </Swipeable>
   )
   if (!categoriesLoaded) {
      return (
         <ActivityIndicator style={{ marginTop: 250 }} size="large" animating={true} color="black" />
      )
   }

   return (
      <View>
         <View>
            <FlatList

               keyExtractor={(item, index) => index.toString()}
               data={categories}
               renderItem={renderItem}
            />
         </View>
      </View>
   )
}

export default AdminListCategoriesScreen

const styles = StyleSheet.create({
   icon: {
      width: 27
   },
   rightSwap: {
      backgroundColor: 'red',
      justifyContent: 'center',
      // flex: 1
      alignItems: 'flex-end'
   },
   rightSwapText: {
      color: 'white',
      fontWeight: '600',
      padding: 15
   }
})
