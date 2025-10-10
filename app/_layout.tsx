import { Stack } from "expo-router";
import { isIOS, isWeb } from "../src/utils/platform";

export default function ContactLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="details/[id]"
        options={{
          title: "Details",
          headerBackButtonDisplayMode: "minimal",
          headerTitleAlign: isWeb ? "center" : "left",
          animation: isIOS ? "ios_from_right" : "slide_from_bottom",
        }}
      />
    </Stack>
  );
}
