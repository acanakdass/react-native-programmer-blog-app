import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'
import { AuthContext } from '../context/AuthContext'
const AccountScreen = ({ navigation }) => {
   const { signOut } = React.useContext(AuthContext)

   return (
      <View>
         <Text>Account Section</Text>
         <Button
            onPress={signOut}
         >Sign Out</Button>

      </View>
   )
}

export default AccountScreen

const styles = StyleSheet.create({})
