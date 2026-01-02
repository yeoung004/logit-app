import { View } from "react-native";

interface BasicHeader {
  title?: React.ReactNode;
  left?: React.ReactNode;
  right?: React.ReactNode;
}

const Basic = ({ left, right, title }: BasicHeader) => {
  return (
    <View className="flex-row h-14 items-center justify-between w-full px-7">
      <View>{left}</View>
      <View>{title}</View>
      <View>{right}</View>
    </View>
  );
};
export const Header = Object.assign(Basic, {});
