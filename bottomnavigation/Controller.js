import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import Home from "./screens/Home";
import Live from "./screens/Live";
import Notifications from "./screens/Notifications";
import Map from "./screens/Map";
import Vr from "./screens/Vr";

//Screen names
const home = "Home";
const live = "Live";
const notifications = "Notifications";
const map = "Map";
const vr = "Vr";

const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => setIsLoading(false), 2000);
  }, []);

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={home}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === home) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === live) {
              //   Set icon to Live Stream
              iconName = focused ? "videocam" : "videocam-outline";
            } else if (rn === notifications) {
              iconName = focused ? "notifications" : "notifications-outline";
            } else if (rn === map) {
              iconName = focused ? "earth" : "earth-outline";
            } else if (rn === vr) {
              //   Set icon to AR
              iconName = focused ? "cube" : "cube-outline";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "tomato",
          inactiveTintColor: "grey",
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 70 },
        }}
      >
        <Tab.Screen name={home} component={Home} />
        <Tab.Screen name={map} component={Map} />
        <Tab.Screen name={vr} component={Vr} />
        <Tab.Screen name={live} component={Live} />
        <Tab.Screen name={notifications} component={Notifications} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
