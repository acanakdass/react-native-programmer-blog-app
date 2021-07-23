import { useEffect, useState } from "react";
import blogApi from '../api/blogApi'

export default () => {
   const [articles, setArticles] = useState([])

   const getArticlesFromApi = async () => {
      console.log("makin request")
      // const response = await trackerApi.post('/signin', { email, password });
      try {
         const response = await blogApi.get("/articles")
            .then(res => {
               const data = res.data.$values;
               setArticles(data);
               // console.log(articles)
            })
      } catch (error) {
         // seterrorMessage('Something went wrong :(')
         console.log("error :" + error)
      }
   }

   useEffect(() => {
      getArticlesFromApi()
   }, [])

   return [getArticlesFromApi, articles]
};