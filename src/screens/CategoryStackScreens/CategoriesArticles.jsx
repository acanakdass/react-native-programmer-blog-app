import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { color } from 'react-native-elements/dist/helpers';
import { FlatList } from 'react-native-gesture-handler';
import { Button, Card, Title, Paragraph } from 'react-native-paper';
const CategoriesArticles = ({ route, navigation }) => {

   const [articles, setArticles] = React.useState(route.params.articles)

   React.useEffect(() => {
      setArticles(route.params.articles)
      console.log(articles);
   }, [route.params.articles])


   var renderCards = ({ item }) => (
      <Card theme mode="elevated" style={{ margin: 5, padding: 5 }}>
         <Card.Cover source={{ uri: 'https://cdn.shopify.com/s/files/1/0070/7032/files/blog_examples_hero.jpg?v=1528925017' }} />
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
               onPress={() => navigation.push("ArticleMain", { articleData: item })}
            >See More..</Button>
            <Button onPress={() => console.log("clicked")} > See More..</Button>
         </Card.Actions>
      </Card>
   )


   return (
      <View>

         <FlatList
            keyExtractor={(item, index) => index.toString()}
            data={articles}
            renderItem={renderCards}
         />
      </View>
   )
}

export default CategoriesArticles

const styles = StyleSheet.create({})
