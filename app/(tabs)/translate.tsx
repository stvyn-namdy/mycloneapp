import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { useRouter } from "expo-router";

export default function TranslateScreen() {
  const router = useRouter();

  const navigateToNext = () => {
    router.push("/+not-found");
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Translate this sentence</Text>
      <View style={styles.progressContainer}>
        <View style={styles.volumeBar}>
          <View style={styles.volumeFill} />
          <View style={styles.volumeThumb}></View>
        </View>
      </View>

      <View style={styles.audioContainer}>
        <Image
          source={require("../../assets/images/volume.png")}
          resizeMode="contain"
          style={[
            styles.volumeIcon,
            { opacity: 0.5, backgroundColor: "transparent" },
          ]}
        />
        <TouchableOpacity style={styles.wordButton}>
          <Text style={styles.wordText}>I want a salad.</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wordContainer}>
        <TouchableOpacity style={styles.wordButton}>
          <Text style={styles.wordText}>Yo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wordButton}>
          <Text style={styles.wordText}>quiero</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wordButton}>
          <Text style={styles.wordText}>ensafere</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wordContainer}>
        <TouchableOpacity style={styles.wordButtonDisabled}>
          <Text style={styles.wordTextDisabled}>jugo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.wordButtonDisabled}>
          <Text style={styles.wordTextDisabled}>see</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.wordContainer}>
        <TouchableOpacity style={styles.wordButtonDisabled}>
          <Text style={styles.wordTextDisabled}>narjani</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={navigateToNext}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#000",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  volumeBar: {
    flex: 1,
    height: 10,
    backgroundColor: "#D3D3D3",
    borderRadius: 5,
    position: "relative",
    marginHorizontal: 10,
  },
  volumeFill: {
    width: "60%",
    height: "100%",
    backgroundColor: "#58CC02",
    borderRadius: 5,
  },
  volumeThumb: {
    position: "absolute",
    top: -6,
    right: "40%",
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#58CC02",
    alignItems: "center",
    justifyContent: "center",
  },
  audioContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  volumeIcon: {
    width: 28,
    height: 28,
  },
  prompt: {
    fontSize: 20,
    color: "#000",
    textAlign: "center",
    marginLeft: 10,
  },
  wordContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  wordButton: {
    backgroundColor: "#fff",
    borderColor: "#58CC02",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  wordText: {
    fontSize: 16,
    color: "#000",
  },
  wordButtonDisabled: {
    backgroundColor: "#eee",
    borderColor: "#ccc",
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  wordTextDisabled: {
    fontSize: 16,
    color: "#888",
  },
  button: {
    backgroundColor: "#58CC02",
    padding: 15,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
