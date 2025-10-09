import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function ContactTabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#007AFF",
      }}
      detachInactiveScreens={false}
    >
      <Tabs.Screen
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
      <Tabs.Screen
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
      <Tabs.Screen
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
    </Tabs>
  );
}
