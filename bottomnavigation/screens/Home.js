import * as React from "react";
import { View, Text, Button } from "react-native";
import AsycStorage from "@react-native-async-storage/async-storage";

export default function Home({ navigation }) {
  const clearOnboarding = async () => {
    try {
      await AsycStorage.removeItem("@viewedOnboarding");
      console.log("Onboarding Cleared");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => alert("This is a Home!")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Home Screen
      </Text>
      <Button title="Clear Onboarding" onPress={clearOnboarding} />
    </View>
  );
}
