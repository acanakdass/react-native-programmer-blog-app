import React, { useState } from 'react'
import { StyleSheet, View, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Text, Button, Input } from 'react-native-elements';
import { TextInput } from 'react-native-paper';
import Spacer from './Spacer';
const AuthForm = ({ headerText, signButtonText, signFunc, errorMessage }) => {


   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [passwordRepeat, setPasswordRepeat] = useState('');

   return (
      <KeyboardAvoidingView>
         <ScrollView contentContainerStyle={styles.contentContainerStyle}>
            <View style={styles.container}>
               <Text h3>{headerText}</Text>

               <Spacer margin={20} />
               <TextInput
                  label="Email"
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
                  autoCorrect={false}
                  mode="outlined"
                  outlineColor="lightgray"
                  color="red"
               ></TextInput>
               <TextInput
                  outlineColor="lightgray"
                  mode="outlined"
                  label="Password"
                  value={password}
                  secureTextEntry
                  onChangeText={(inputPw => setPassword(inputPw))} />
               {errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
               {signButtonText == 'Sign Up' ? (
                  <TextInput
                     outlineColor="lightgray"
                     mode="outlined"
                     label="Repeat Password"
                     value={passwordRepeat}
                     secureTextEntry
                     onChangeText={(inputPw => setPasswordRepeat(inputPw))} />
               ) : (<View></View>)}
               <Spacer margin={10} />

               <Button
                  style={{ backgroundColor: "black" }}
                  disabled={signButtonText == 'Sign Up' ? email === '' || password == '' || passwordRepeat == '' : email === '' || password == ''}
                  type="solid"
                  title={signButtonText}
               />

            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   )
}

export default AuthForm

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      // marginBottom: 100,
      marginHorizontal: 30
   },
   contentContainerStyle: {
      paddingVertical: 120,
   },
   errorMessage: {
      color: 'red',
      textAlign: 'center',
      marginBottom: 2
   }
})
