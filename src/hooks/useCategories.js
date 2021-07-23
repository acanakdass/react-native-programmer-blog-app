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

               setCategories(res.data.$values);
            })
      } catch (error) {
         // seterrorMessage('Something went wrong :(')
         console.log("error :" + error)
      }
   }


   const postCategory = async (dataToSend) => {

      try {
         await blogApi.post("/categories", dataToSend)
            .then(res => {
               alert("Category created successfuly")
            })
      } catch (error) {
         alert(error)
      }
   }

   useEffect(() => {
      getCategoriesFromApi()
   }, [])

   return [getCategoriesFromApi, categories, postCategory]
};