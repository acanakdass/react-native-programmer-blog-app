import { useEffect, useState } from "react";
import blogApi from '../api/blogApi'

export default () => {
   const [categories, setCategories] = useState([])
   // const [errorMessage, seterrorMessage] = useState('')

   const getCategoriesFromApi = async () => {
      console.log("makin requestt")
      // const response = await trackerApi.post('/signin', { email, password });
      try {
         const response = await blogApi.get("/categories")
            .then(res => {
               const data = res.data.$values;
               setCategories(data);
               // console.log(categories)
            })
      } catch (error) {
         // seterrorMessage('Something went wrong :(')
         console.log("error :" + error)
      }
   }

   useEffect(() => {
      getCategoriesFromApi()
   }, [])

   return [getCategoriesFromApi, categories]
};