import React, { useContext, useEffect } from 'react'
import { StyleSheet, View, ToastAndroid } from 'react-native'
import AuthForm from '../../components/AuthForm';
import { NavigationEvents } from 'react-navigation';
import { Button } from 'react-native-elements/dist/buttons/Button';
import Spacer from '../../components/Spacer';

const SignUpScreen = ({ navigation }) => {

   return (
      <View>
         {/* <NavigationEvents
         // onWillFocus={()=>{}}
         // onDidFocus={}
         // onDidBlur={()=>{}}
         // onWillFocus={clearErrorMessage}
         /> */}
         <AuthForm
            headerText="Sign Up!"
            errorMessage=""
            signButtonText="Sign Up"
         // signFunc={({ email, password }) => signIn({ email, password })}
         />
         <Button
            type="clear"
            title="Already have an account? Sign In"
            onPress={() => navigation.push("SignIn")}
         />
      </View>
   )
}
SignUpScreen.navigationOptions = () => {
   return {
      headerShown: false,
   };
};

export default SignUpScreen

const styles = StyleSheet.create({})
