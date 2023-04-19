import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import AsycStorage from "@react-native-async-storage/async-storage";

import Onboarding from "./components/Onboarding";
import HomeScreen from "./components/HomeScreen";

const Loading = () => {
  <View>
    <ActivityIndicator size="large" />
  </View>;
};

export default App = () => {
  const [loading, setLoading] = useState(true);
  const [viewdOnboarding, setViewedOnboarding] = useState(false);

  const checkOnboarding = async () => {
    try {
      const value = await AsycStorage.getItem("@viewedOnboarding");
      if (value !== null) {
        setViewedOnboarding(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkOnboarding();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <Loading />
      ) : viewdOnboarding ? (
        <HomeScreen />
      ) : (
        <Onboarding />
      )}
      <StatusBar style="auto" />
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
