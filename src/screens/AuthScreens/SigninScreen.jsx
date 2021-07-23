import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ToastAndroid, ImageBackground, Text } from 'react-native'
import AuthForm from '../../components/AuthForm';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Spacer from '../../components/Spacer';
import { AuthContext } from '../../context/AuthContext';
// const image = { uri: "https://i.pinimg.com/736x/46/2a/c7/462ac79bf254bcf4e78ee747ff142a7b.jpg" };
import { SocialIcon } from 'react-native-elements'

const SigninScreen = ({ navigation }) => {

   const { signIn } = React.useContext(AuthContext)

   return (
      <View style={styles.container}>

         <AuthForm
            headerText="Sign In To Your Account"
            errorMessage=""
            signButtonText="Sign In"
         // signFunc={({ email, password }) => signIn({ email, password })}
         />
         {/* <SocialIcon
            title='Sign In With Facebook'
            button
            type='facebook'
         /> */}
         <Button
            type="clear"
            title="Don't have an account? Sign Up"
            onPress={() => navigation.push("SignUp")}
         />
         <Button
            type="clear"
            title="Go without Sign In"
            onPress={signIn}
         />
         {/* <ImageBackground blurRadius={2} source={image} style={styles.image}>
         </ImageBackground> */}

      </View >
   )
}

export default SigninScreen

const styles = StyleSheet.create({
   container: {

      flex: 1,
      flexDirection: 'column',
   },
   image: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
   },
   text: {
      color: 'white',
      fontSize: 42,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000a0',
   },
})
