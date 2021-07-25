import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-elements'
import { TextInput } from 'react-native-paper'
import Spacer from '../../components/Spacer'
import useCategories from '../../hooks/useCategories'
const CreateCategoryScreen = () => {

   const [name, setName] = useState('')
   const [description, setDescription] = useState('')

   const [getCategoriesFromApi, categories, postCategory, isPosting] = useCategories();

   // const { postCategory } = React.useContext(CategoryContext)

   const data = {
      "name": name,
      "description": description,
      "isActive": true,
      "isDeleted": false
   }
   return (
      <View style={{ padding: 20 }}>
         <TextInput
            mode="outlined"
            label="Category Name"
            value={name}
            onChangeText={text => setName(text)}
         />
         <Spacer margin={10} />
         <TextInput
            mode="outlined"
            label="Description"
            value={description}
            onChangeText={text => setDescription(text)}
         />
         <Spacer margin={10} />
         <Button loading={isPosting} onPress={() => {
            postCategory(data);

            // response == 200 ? alert(`category ${name} created`) : alert("Error while creating")
         }} title="Create Category" />


      </View>
   )
}

export default CreateCategoryScreen

const styles = StyleSheet.create({})
