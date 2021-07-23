import React from 'react'
import { RefreshControl, StyleSheet, View } from 'react-native'
import RenderHTML from 'react-native-render-html'
import { useWindowDimensions } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Text } from 'react-native-elements';
import Spacer from '../components/Spacer';
const ArticleMainScreen = ({ route }) => {

   const [article, setArticle] = React.useState([])

   const [refreshing, setRefreshing] = React.useState(false);

   const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      setTimeout(() => {
         setRefreshing(false)
      }, 1000)
   }, []);


   React.useEffect(() => {
      if (route) {
         // console.log(route.params.articleData);
         setArticle(route.params.articleData);
      }

   }, [])
   const source = {
      html: article.Content
   };
   const { width } = useWindowDimensions();
   return (
      <View>
         <ScrollView style={{ padding: 20 }}

         // refreshControl={
         //    <RefreshControl
         //       refreshing={refreshing}
         //       onRefresh={onRefresh}
         //    />}
         >
            <Text style={{ paddingBottom: 10, marginBottom: 10, borderBottomWidth: 1, borderBottomColor: "lightgray" }} h2>{article.Title} </Text>
            <Spacer margin={5}></Spacer>
            <RenderHTML
               contentWidth={width}
               source={source}
               enableExperimentalMarginCollapsing={true}

            />
         </ScrollView>
      </View>
   );

}

export default ArticleMainScreen

const styles = StyleSheet.create({})
