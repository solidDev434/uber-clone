import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="welcome" options={{ headerShown: false }} />
      <Tabs.Screen name="sign-up" options={{ headerShown: false }} />
      <Tabs.Screen name="sign-in" options={{ headerShown: false }} />
    </Tabs>
  );
}
