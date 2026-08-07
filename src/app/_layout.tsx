import "../../global.css";

import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

// SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    "Inter-Thin": require("../../assets/fonts/Inter-Thin.ttf"),
    "Inter-ExtraLight": require("../../assets/fonts/Inter-ExtraLight.ttf"),
    "Inter-Light": require("../../assets/fonts/Inter-Light.ttf"),
    "Inter-Regular": require("../../assets/fonts/Inter-Regular.ttf"),
    "Inter-Medium": require("../../assets/fonts/Inter-Medium.ttf"),
    "Inter-SemiBold": require("../../assets/fonts/Inter-SemiBold.ttf"),
    "Inter-Bold": require("../../assets/fonts/Inter-Bold.ttf"),
    "Inter-ExtraBold": require("../../assets/fonts/Inter-ExtraBold.ttf"),
  });

  useEffect(() => {
    if (loaded) SplashScreen.hideAsync();
  }, [loaded]);

  if (!loaded) return null;

  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: "#fff" },
      }}
    />
  );
}
