import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titulo = () => {
  return (
    <View style={styles.container}>
      <Text>IMC</Text>
    </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
    fontBlue: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 30,
    }
})