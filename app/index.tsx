import React, {useLayoutEffect} from 'react';
import { 
  View,
  Text,
  Image, 
  StyleSheet, 
  StatusBar,
  SafeAreaView,
  TouchableOpacity, 
} from 'react-native';
import { useRouter, useNavigation } from 'expo-router'

export default function HomeScreen() {
  const router = useRouter()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [navigation]);

  const navigateToGetStarted = () => {
    router.push('/(tabs)/started')
  }

  const navigateToLogin = () => {
    router.push('/(tabs)/login')
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='#034140' barStyle='light-content' />

    <View style={styles.content}>
      <Image
        source={require('../assets/images/duolingo-logo.webp')}
        style={styles.logo}
        resizeMode='contain'
       />

        <Text style={styles.tagline}>
          Learn a Language for {'\n'} free. Forever.
        </Text>

      <TouchableOpacity style={styles.getStartedButton} onPress={navigateToGetStarted}>
        <Text style={styles.getStartedText}>GET STARTED</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.accountButton} onPress={navigateToLogin}>
        <Text style={styles.accountText}>I ALREADY HAVE AN ACCOUNT</Text>
      </TouchableOpacity>

    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#034140'
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  logoText: {
    fontSize: 36,
    color: '#58CC02',
    fontWeight: 'bold',
    marginBottom: 20
  },
  tagline: {
    fontSize: 22,
    color: '#fcfcfc',
    textAlign: 'center',
    marginBottom: 40
  },
  getStartedButton: {
    backgroundColor: '#58CC02',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15
  },
  getStartedText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  accountButton: {
    borderWidth: 2,
    borderColor: '#58CC02',
    width: '100%',
    padding: 15,
    borderRadius: 12,
    marginBottom: 100
  },
  accountText: {
    color: '#58CC02',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
