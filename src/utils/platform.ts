import { Platform } from "react-native";

export const isWeb = Platform.OS === "web";
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";
export const isNative = isIOS || isAndroid;

export const isSuportedPlatform = (os: Platform["OS"]): boolean => {
  switch (os) {
    case "android":
    case "ios":
    case "web":
      return true;
    default:
      return false;
  }
};
