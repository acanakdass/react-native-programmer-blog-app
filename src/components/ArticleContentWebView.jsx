import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import WebView from 'react-native-webview'

const ArticleContentWebView = ({ articleContent }) => {
   return (
      <WebView
         scalesPageToFit={false}
         showsVerticalScrollIndicator={false}
         originWhitelist={['*']}

         androidHardwareAccelerationDisabled={true} source={{ html: articleContent }} />
   )
}

export default ArticleContentWebView

const styles = StyleSheet.create({})
