import CustomButton from "@/components/CustomButton";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";
import React from "react";
import { Alert, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const router = useRouter();
  const { user } = useUser();
  const { signOut } = useAuth();

  const logout = async () => {
    try {
      await signOut();
      router.replace("/(auth)/sign-in");
    } catch (err) {
      Alert.alert(JSON.stringify(err, null, 2));
    }
  };

  return (
    <SafeAreaView>
      <Text>Hello {user?.emailAddresses[0].emailAddress}</Text>
      <CustomButton
        title="Logout"
        bgVariant="outline"
        textVariant="primary"
        onPress={logout}
      />
    </SafeAreaView>
  );
};

export default Home;
