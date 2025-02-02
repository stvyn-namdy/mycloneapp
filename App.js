import React from 'react';
import { 
  View,
  Text, 
  Image,
  StyleSheet, 
  SafeAreaView,
  TouchableOpacity, 
  
} from 'react-native';

export default function App() {
  const DuolingOwl = () => (
    <View style={styles.container}>
    <View style={styles.owl}>
      <View style={styles.eyesContainer}>
        <View style={styles.eyes} />
        <View style={styles.eyes} />
      </View>
      <View style={styles.beak} />
    </View>
    <View style={styles.feet} />
   </View>
  );

  
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
  owlContainer: {
    alignItems: 'center',
    marginBottom: 20
  },
  owl: {
    width: 80,
    height: 80,
    backgroundColor: '#58CC02',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  eyesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 40
  },
  eyes: {
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderRadius: 7.5
  },
  beak: {
    width: 8,
    height: 8,
    backgroundColor: '#FF9600',
    borderRadius: 4,
    marginTop: 5
  },
  feet: {
    width: 30,
    height: 4,
    backgroundColor: '#FF9600',
    borderRadius: 2,
    marginTop: 5
  }
});
