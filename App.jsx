// App.jsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import screens
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import ForgotPassword from "./ForgotPassword";
import MainPage from "./MainPage";
import TakeCharge from "./TakeCharge";
import ModifyPage from "./ModifyPage";
import Chat from "./Chat";
import Compartment from "./Compartment"; 
import General from "./General";
import Sleeper from "./Sleeper";
import ThreeTierAC from "./ThreeTierAC";
import TwoTier from "./TwoTier";
import OneTier from "./OneTier";



// Placeholder screens for bottom tabs
function Complaint() {
  return null; // Replace with actual Complaint screen
}
function Notify() {
  return null; // Replace with actual Notify screen
}
function Inbox() {
  return null; // Replace with actual Inbox screen
}
function Profile() {
  return null; // Replace with actual Profile screen
}

// Create navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigator
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#ffffffff",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: { backgroundColor: "#1E3A8A", height: 70, paddingBottom: 5 },
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "MainPage") iconName = "home-outline";
          else if (route.name === "Complaint") iconName = "clipboard-outline";
          else if (route.name === "Notify") iconName = "notifications-outline";
          else if (route.name === "Inbox") iconName = "mail-outline";
          else if (route.name === "Profile") iconName = "person-outline";

          return <Ionicons name={iconName} size={25} color={color} />;
        },
      })}
    >
      <Tab.Screen name="MainPage" component={MainPage} options={{ title: "Home" }} />
      <Tab.Screen name="Complaint" component={Complaint} />
      <Tab.Screen name="Notify" component={Notify} />
      <Tab.Screen name="Inbox" component={Inbox} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        {/* Bottom tabs start after login */}
        <Stack.Screen name="MainPage" component={BottomTabs} />
        <Stack.Screen name="TakeCharge" component={TakeCharge} />
        <Stack.Screen name="ModifyPage" component={ModifyPage} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Compartment" component={Compartment} />
        <Stack.Screen name="General" component={General} />
        <Stack.Screen name="Sleeper" component={Sleeper} />
        <Stack.Screen name="ThreeTierAC" component={ThreeTierAC} />
        <Stack.Screen name="TwoTier" component={TwoTier} />
        <Stack.Screen name="OneTier" component={OneTier} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
