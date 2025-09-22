import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white dark:bg-black">
      <Text>Open up App to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}
