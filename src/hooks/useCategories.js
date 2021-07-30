import { useEffect, useState } from "react";
import { ToastAndroid } from "react-native";
import blogApi from '../api/blogApi'

export default () => {
   const [categories, setCategories] = useState([])
   const [isPosting, setIsPosting] = useState(false)

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

      setIsPosting(true)
      try {
         await blogApi.post("/categories", dataToSend)
            .then(res => {
               alert("Category created successfuly")
               setIsPosting(false)

            })
      } catch (error) {
         console.log('Deleting Api')

         alert(error)
         setIsPosting(false)

      }
   }

   const deleteCategory = async (categoryId) => {
      setIsPosting(true)
      try {
         await blogApi.delete(`/categories/${categoryId}`)
            .then(res => {
               console.log(res.data)
               console.log(`/categories/${categoryId}`)
               // alert("Category deleted")
               ToastAndroid.show('Category Deleted', ToastAndroid.SHORT)
               setIsPosting(false)

            })
      } catch (error) {

         setIsPosting(false)

      }
   }

   useEffect(() => {
      getCategoriesFromApi()
   }, [])

   return [getCategoriesFromApi, categories, postCategory, isPosting, deleteCategory]
};