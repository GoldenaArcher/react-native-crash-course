import { Link } from "expo-router";
import { Text, View } from "react-native";

const index = () => {
  return (
    <View style={{ padding: 20 }}>
      <Text>Welcome to Home</Text>
      <Link href="/contact">Go to Contact</Link>
    </View>
  );
};

export default index;
