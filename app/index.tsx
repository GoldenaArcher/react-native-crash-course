import { Link } from "expo-router";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View>
      <Text>Welcome to Home</Text>
      <Link href="/contact">Go to Contact</Link>
    </View>
  );
};

export default index;
