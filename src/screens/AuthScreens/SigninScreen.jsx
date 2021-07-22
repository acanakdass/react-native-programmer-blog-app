import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ToastAndroid } from 'react-native'
import AuthForm from '../../components/AuthForm';
import { NavigationEvents } from 'react-navigation';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Spacer from '../../components/Spacer';
import { AuthContext } from '../../context/AuthContext';

const SigninScreen = ({ navigation }) => {

   const { signIn } = React.useContext(AuthContext)

   return (
      <View>
         {/* <NavigationEvents
         // onWillFocus={()=>{}}
         // onDidFocus={}
         // onDidBlur={()=>{}}
         // onWillFocus={clearErrorMessage}
         /> */}
         <AuthForm
            headerText="Sign In To Your Account"
            errorMessage=""
            signButtonText="Sign In"
         // signFunc={({ email, password }) => signIn({ email, password })}
         />
         <Button
            type="clear"
            title="Don't have an account? Sign Up"
            onPress={() => navigation.push("SignUp")}
         />
         <Button
            type="clear"
            title="Go without signin"
            onPress={signIn}

         />
      </View>
   )
}
SigninScreen.navigationOptions = () => {
   return {
      headerShown: false,
   };
};

export default SigninScreen

const styles = StyleSheet.create({})
