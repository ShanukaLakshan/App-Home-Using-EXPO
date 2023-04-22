import React, { useState, useEffect } from "react";
import {  View, ActivityIndicator } from "react-native";
import AsycStorage from "@react-native-async-storage/async-storage";

import Controller from "./bottomnavigation/Controller";
import Onboarding from "./components/Onboarding";

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
    <>
      {loading ? (
        <Loading />
      ) : viewdOnboarding ? (
        <Controller />
      ) : (
        <Onboarding />
      )}
    </>
  );
};
