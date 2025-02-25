import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';

const languages = [
  { name: 'USA', flag: require('./assets/flags/USA.png') },
  { name: 'UK', flag: require('./assets/flags/UK.png') },
  { name: 'Turkey', flag: require('./assets/flags/Turkey.png') },
  { name: 'Canada', flag: require('./assets/flags/Canada.png') },
  { name: 'Germany', flag: require('./assets/flags/Germany.png') },
  { name: 'Ireland', flag: require('./assets/flags/Ireland.png') },
  { name: 'France', flag: require('./assets/flags/France.png') },
  { name: 'China', flag: require('./assets/flags/China.png') },
  { name: 'Japan', flag: require('./assets/flags/Japan.png') },
  { name: 'Korea', flag: require('./assets/flags/SouthKorea.png') },
  { name: 'Thailand', flag: require('./assets/flags/Thailand.png') },
  { name: 'Vietnam', flag: require('./assets/flags/Vietnam.png') },
];

const language = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose the Language</Text>

      {/*Search Bar Input*/}
      <TextInput style={styles.searchInput} placeholder="Find a Language" />

      {/* Language/Country List */}
      <FlatList
        data={languages}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <TouchableOpacity style={[styles.languageItem,]}>
            <Image source={item.flag} style={styles.flagImage} />
            <Text style={styles.country}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eaffda',
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2c472a',
    textAlign: 'center',
    marginBottom: 20,
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 18,
    paddingLeft: 20,
    fontSize: 16,
    borderWidth: 2,
    borderColor: '#49d65e',
    marginBottom: 20,
  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingHorizontal: 10,
    borderRadius: 10,
    paddingTop: 15,
    paddingBottom : 15,
  },
  flagImage: {
    width: 40, 
    height: 40,
    marginRight: 10,
    borderRadius: 20, 
  },
  country: {
    fontSize: 18,
    color: '#4e524e',
  },
  button: {
    backgroundColor: '#49d65e',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  flagImage: {
    width: 40,
    height: 25,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default language;
