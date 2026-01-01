import { useSplashLoading } from "@/hooks/useSplashLoading";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import React from "react";

export const LogitThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [loaded, error] = useFonts({
    "Pretendard-Black": require("@/assets/fonts/Pretendard-Black.otf"),
    "Pretendard-ExtraBold": require("@/assets/fonts/Pretendard-ExtraBold.otf"),
    "Pretendard-Bold": require("@/assets/fonts/Pretendard-Bold.otf"),
    "Pretendard-SemiBold": require("@/assets/fonts/Pretendard-SemiBold.otf"),
    "Pretendard-Medium": require("@/assets/fonts/Pretendard-Medium.otf"),
    "Pretendard-Regular": require("@/assets/fonts/Pretendard-Regular.otf"),
    "Pretendard-Light": require("@/assets/fonts/Pretendard-Light.otf"),
    "Pretendard-ExtraLight": require("@/assets/fonts/Pretendard-ExtraLight.otf"),
    "Pretendard-Thin": require("@/assets/fonts/Pretendard-Thin.otf"),
  });
  const [, setLoading] = useSplashLoading("theme");

  React.useEffect(() => {
    if (loaded || error) {
      setLoading(false);
    }
  }, [loaded, error, setLoading]);

  if (!loaded && !error) {
    return null;
  }
  return <ThemeProvider value={DefaultTheme}>{children}</ThemeProvider>;
};
