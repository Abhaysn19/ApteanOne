// HomeScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to our Beautiful App</Text>
      <Text style={styles.subtitle}>Explore and Enjoy!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F4F4F4", // Light Gray background
  },

  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3498db", // Blue color
    marginBottom: 8,
  },

  subtitle: {
    fontSize: 16,
    color: "#2ecc71", // Green color
  },
});

export default HomeScreen;
