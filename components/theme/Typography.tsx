import React from "react";
import { StyleSheet, Text, TextProps, TextStyle } from "react-native";
import { useUnistyles } from "react-native-unistyles";

type TypographyVariant = "h1" | "h1_b" | "h2" | "subtitle" | "body" | "caption";

interface TypographyProps extends TextProps {
  variant?: TypographyVariant;
  color?: string;
  weight?: "400" | "500" | "600" | "700" | "800" | "900";
  align?: "left" | "center" | "right";
  children: React.ReactNode;
}

export const Typography = ({
  variant = "body",
  color,
  align = "left",
  style,
  children,
  ...props
}: TypographyProps) => {
  const { theme } = useUnistyles();

  const dynamicStyle: TextStyle = {
    color: color || theme.colors.text,
    textAlign: align,
  };

  return (
    <Text style={[typographyStyles[variant], dynamicStyle, style]} {...props}>
      {children}
    </Text>
  );
};

const typographyStyles = StyleSheet.create({
  h1: {
    fontFamily: "Pretendard-ExtraBold",
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h1_b: {
    fontFamily: "Pretendard-Black",
    fontSize: 32,
    lineHeight: 40,
    letterSpacing: -0.5,
  },
  h2: {
    fontFamily: "Pretendard-Bold",
    fontSize: 30,
    lineHeight: 32,
    letterSpacing: -0.4,
  },
  subtitle: {
    fontFamily: "Pretendard-SemiBold",
    fontSize: 18,
    lineHeight: 24,
  },
  body: {
    fontFamily: "Pretendard-Regular",
    fontSize: 16,
  },
  caption: {
    fontFamily: "Pretendard-Regular",
    fontSize: 14,
    lineHeight: 18,
  },
});
