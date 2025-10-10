import { Tabs } from "expo-router";
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";
import { isAndroid } from "../../src/utils/platform";

export default function ContactTabsLayout() {
  const Navigator = isAndroid ? Drawer : Tabs;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
      }}
      detachInactiveScreens={false}
    >
      <Navigator.Screen
        name="index"
        options={{
          title: "Contacts",
          tabBarLabel: "Contacts",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
      <Navigator.Screen
        name="new-contact"
        options={{
          title: "New Contact",
          tabBarLabel: "New Contact",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
      <Navigator.Screen
        name="me"
        options={{
          title: "Me",
          tabBarLabel: "Me",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
          headerShown: true,
        }}
      />
    </Navigator>
  );
}
