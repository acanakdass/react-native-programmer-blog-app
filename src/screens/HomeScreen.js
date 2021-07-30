import React, { useState, useEffect } from 'react'
import { RefreshControl, StyleSheet, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { Button, Card, Title, Paragraph, TextInput } from 'react-native-paper';
import { ActivityIndicator } from 'react-native-paper';
import useArticles from '../hooks/useArticles';
import { Searchbar } from 'react-native-paper';

const HomeScreen = ({ navigation }) => {


   const [isReady, setIsReady] = useState(false)

   const [getArticlesFromApi, articles] = useArticles()


   useEffect(() => {
      if (articles.length > 0)
         setIsReady(true)
      // console.log("Articles lenght:" + articles.length)
   }, [articles])

   useEffect(() => {
      const onFocus = navigation.addListener('focus', () => {
         // console.log("Home Screen focused");
         getArticlesFromApi();
      })
      return onFocus;
   }, [])

   var renderCards = ({ item }) => (
      <Card theme mode="elevated" style={styles.card} >
         <Card.Cover source={{ uri: 'https://miro.medium.com/max/10884/1*5TRuG7tG0KrZJXKoFtHlSg.jpeg' }} />
         <Card.Content>
            <Title>{item.Title}</Title>
            <Paragraph>{(item.SeoDescription).substring(0, 50)}</Paragraph>
         </Card.Content>
         <Card.Actions>
            <Button
               // onPress={() => navigation.navigate("Home", {
               //    screen: "ArticleMain",
               //    params: { articleData: item }
               // })}
               onPress={() => navigation.push("ArticleMain", { articleData: item, articleName: item.Title })}
            >See More..</Button>
         </Card.Actions>
      </Card>
   )





   if (!isReady) {
      return (
         <View style={{ margin: 100 }}>

            <ActivityIndicator animating={true} size="medium" style={{ marginVertical: 150 }} color="black" />
         </View>
      )
   } else {

      return (
         <View style={styles.container}>
            <Searchbar

               placeholder="Type Here..." />

            <FlatList
               keyExtractor={(item, index) => index.toString()}
               data={articles}
               renderItem={renderCards}
            />
         </View>

      )
   }
}
export default HomeScreen

const styles = StyleSheet.create({
   card: {
      margin: 5,
      padding: 5,
      flex: 1
   },
   container: {
      margin: 5
   },

})
