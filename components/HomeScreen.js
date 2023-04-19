import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import AsycStorage from "@react-native-async-storage/async-storage";

export default HomeScreen = () => {
  const clearOnboarding = async () => {
    try {
      await AsycStorage.removeItem("@viewedOnboarding");
      console.log("Onboarding Cleared");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Button title="Clear Onboarding" onPress={clearOnboarding} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
