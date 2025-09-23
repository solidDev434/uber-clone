import { ButtonProps } from "@/types/type";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Text, TouchableOpacity } from "react-native";
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from "react-native-reanimated";

const getBgVariantStyle = (variant: ButtonProps["bgVariant"]) => {
  switch (variant) {
    case "primary":
      return "bg-blue-500";
    case "secondary":
      return "bg-gray-500";
    case "success":
      return "bg-green-500";
    case "danger":
      return "bg-red-500";
    case "outline":
      return "bg-transparent border-[0.5px] border-neutral-500";
    default:
      return "bg-[#0286ff]";
  }
};

const getTextVariantStyle = (variant: ButtonProps["textVariant"]) => {
  switch (variant) {
    case "primary":
      return "text-black";
    case "secondary":
      return "text-gray-100";
    case "success":
      return "text-green-100";
    case "danger":
      return "text-red-100";
    default:
      return "text-white";
  }
};

const getLoaderVariantStyle = (variant: ButtonProps["loaderVariant"]) => {
  switch (variant) {
    case "primary":
      return "#000";
    case "secondary":
      return "#f3f4f6";
    case "success":
      return "#dcfce7";
    case "danger":
      return "#fee2c2";
    default:
      return "#fff";
  }
};

const CustomButton = ({
  onPress,
  title,
  bgVariant = "primary",
  textVariant = "default",
  IconLeft,
  IconRight,
  className,
  isLoading,
  ...props
}: ButtonProps) => {
  const rotation = useSharedValue(0);

  React.useEffect(() => {
    rotation.value = withRepeat(
      withTiming(360, { duration: 1500, easing: Easing.linear }),
      -1,
      false
    );
  }, [rotation]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ rotateZ: `${rotation.value}deg` }],
    };
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      className={`*:w-full rounded-full p-3 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${getBgVariantStyle(bgVariant)} ${className}`}
      disabled={isLoading}
      style={{
        opacity: isLoading ? 0.7 : 1,
      }}
      {...props}
    >
      {IconLeft && <IconLeft />}
      {isLoading && (
        <Animated.View style={[animatedStyle]} className="mr-1.5">
          <FontAwesome
            name="spinner"
            size={20}
            color={getLoaderVariantStyle(textVariant)}
          />
        </Animated.View>
      )}
      <Text className={`text-lg font-bold ${getTextVariantStyle(textVariant)}`}>
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default CustomButton;
