import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "@/components/Header";
import Button from "@/components/Button";
import { useRouter } from "expo-router";

const contact = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
        <Header title="Contact" />
      <Button title="Go Back" onPress={() => router.back()} />
      <Text>About Our Company</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default contact;
