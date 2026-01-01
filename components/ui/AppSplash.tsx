import { Image } from "expo-image";
import React from "react";
import { View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSequence,
  withTiming,
} from "react-native-reanimated";
import { Typography } from "../theme/Typography";

export const AppSplash = React.memo(function AppSplash() {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withSequence(
        withTiming(-6, { duration: 1000 }),
        withTiming(0, { duration: 400 }),
        withTiming(-3, { duration: 400 }),
        withTiming(0, { duration: 400 }),
        withTiming(-2, { duration: 400 }),
        withTiming(0, { duration: 700 })
      ),
      -1,
      true
    );
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotateZ: `${interpolate(rotation.value, [-1, 1], [-5, 5])}deg`,
        },
      ],
    };
  });

  return (
    <View className="flex justify-center items-center w-full h-full">
      <Animated.View
        style={[
          {
            borderRadius: 15,
            backgroundColor: "#5288FF",
            shadowColor: "#0050FF",
            shadowOffset: { width: 0, height: 0 },
            shadowOpacity: 0.5,
            shadowRadius: 50,
            elevation: 10,
          },
          animatedStyle,
        ]}
      >
        <Image
          style={{ width: 100, aspectRatio: 1 }}
          source={require("@/assets/images/splash-icon.png")}
        />
      </Animated.View>
      <View className="flex justify-center items-center py-7 gap-1">
        <Typography variant="h2">Logit</Typography>
        <Typography color="#777777" variant="body">
          Log the insight, do it now.
        </Typography>
      </View>
    </View>
  );
});
