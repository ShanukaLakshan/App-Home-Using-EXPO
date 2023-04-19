import * as React from "react";
import { View, Text } from "react-native";

export default function Notifications({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text
        onPress={() => navigation.navigate("Home")}
        style={{ fontSize: 26, fontWeight: "bold" }}
      >
        Notifications Screen
      </Text>
    </View>
  );
}
