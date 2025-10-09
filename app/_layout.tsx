import React from "react";
import { Stack, usePathname } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { isIOS, isWeb } from "../src/utils/platform";

const RootLayout = () => {
  const pathname = usePathname();
  const isContactRootRoute = pathname === "/contact";

  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          marginTop: StatusBar.currentHeight || 0,
          width: "100%",
          maxWidth: isWeb ? 1080 : "100%",
          alignSelf: "center",
        }}
      >
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
            }}
          />
          <Stack.Screen
            name="contact"
            options={{
              title: "Contacts",
              headerBackButtonDisplayMode: "minimal",
            }}
          />
        </Stack>
        {/* <Stack>
          <Stack.Screen
            name="index"
            options={{
              title: "Home",
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="contact/index"
            options={{
              title: "Contacts",
              headerTitleAlign: isWeb ? "center" : "left",
              headerBackButtonDisplayMode: "minimal",
            }}
          />
          <Stack.Screen
            name="contact/details/[id]"
            options={{
              title: "Contact Details",
              headerTitleAlign: isWeb ? "center" : "left",
              animation: isIOS ? "ios_from_right" : "slide_from_bottom",
              headerBackButtonDisplayMode: "minimal",
            }}
          />
        </Stack> */}
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default RootLayout;
