import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Header from '@/components/Header'
import Button from '@/components/Button'
import { useRouter } from 'expo-router'

const about = () => {
    const router = useRouter()
  return (
    <View style={styles.container}>
        <Header title="About" />
        <Text style={styles.text}>This is an Expo App demonstarting navigation and reusable components</Text>
        <Button title="Go Back" onPress={() => router.back()} />

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
    text: {
        fontSize: 18,
        marginVertical: 20,
        textAlign: 'center',
        paddingHorizontal: 20
    }
})

export default about