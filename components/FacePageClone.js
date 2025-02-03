import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";

export default function FacePageClone() {
return (
    <SafeAreaView style={styles.backdrop}>
        <Image source={{uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1200px-Facebook_Logo_%282019%29.png"}} style={styles.logo} />
        <Text style={styles.IdPassword}>Mobile number or email address</Text>
        <Text style={styles.IdPassword}>Password</Text>
        <TouchableOpacity>
            <Text style={styles.button}>Log In</Text>
        </TouchableOpacity>
        <Text style={styles.forgot}>Forgotten Password?</Text>
        <Text style={styles.create}>Create new account</Text>
        <Text style={styles.meta}>Meta</Text>
    </SafeAreaView>
);
}

const styles = StyleSheet.create({
backdrop: {
    flex: 1,
    backgroundColor: "#1D2434",
    alignItems: "center",
    justifyContent: "center",
},
logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
},
IdPassword: {
    // flex:1,
    alignSelf: "left",
    color: "#ADA9BA",
    borderColor: "#ADA9BA",
    borderWidth: 1,
    backgroundColor: "#4A5062",
    padding: 20,
    borderRadius: 15,
    fontSize: 20,
    margin: 10,
},
button: {
    paddingLeft: 165,
    paddingRight: 165,
    backgroundColor: "#1877F2",
    color: "white",
    borderRadius: 25,
    fontSize: 20,
    padding: 10,
    margin: 10,
},
forgot: {
    color: "white",
    fontWeight: "medium",
    fontSize: 20,
    margin: 10,
},
create: {
    color: "#1877F2",
    borderWidth: 1,
    borderColor: "#1877F2",
    marginTop: 200,
    padding: 15,
    paddingLeft: 100,
    paddingRight: 100,
    borderRadius: 25,
    fontSize: 20,
    margin: 10,
},
meta: {
    color: "#ffffff",
    fontSize: 20,
    margin: 10,
},
});