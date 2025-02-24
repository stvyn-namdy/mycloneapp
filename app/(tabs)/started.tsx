import React from 'react';
import { 
    View,
    Text,
    Image,
    StatusBar,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
 } from 'react-native';
 import { useRouter } from 'expo-router';

const Started = () => {

    const router = useRouter();
    const navigateToLanguagePage = () => {
        router.push('/language');
    }

    return (
        <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ffffff" barStyle="dark-content" />
      
      <View style={styles.content}>
        <Image
          source={require('../../assets/images/duolingo-2.png')}  
          style={styles.logo}
          resizeMode="contain"
        />
        
        <Text style={styles.title}>
          Welcome to the world{'\n'}of Language
        </Text>
        
        <Text style={styles.description}>
          Duolingo will help you gain knowledge that will change your life. Practice in challenges and get free training
        </Text>
        
        <View style={styles.paginationContainer}>
          <View style={[styles.paginationDot, styles.activeDot]} />
          <View style={styles.paginationDot} />
          <View style={styles.paginationDot} />
        </View>
        
        <TouchableOpacity
            style={styles.nextButton}
            onPress={navigateToLanguagePage}
        >
            <Text style={styles.nextButtonText}>Next</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fffff'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 30,
        paddingVertical: 40,
      },
      logo: {
        width: 260,
        height: 260,
        marginBottom: 20,
      },
      title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2D3E1E',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 38,
      },
      description: {
        fontSize: 18,
        color: '#999999',
        textAlign: 'center',
        marginBottom: 60,
        lineHeight: 24,
      },
      paginationContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 40,
      },
      paginationDot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        marginHorizontal: 5,
      },
      activeDot: {
        backgroundColor: '#58CC02',
      },
      nextButton: {
        backgroundColor: '#58CC02',
        width: '100%',
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center',
      },
      nextButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
        fontWeight: '600',
      },
})

export default Started;