import {
 StyleSheet,
 TextInput,
 TouchableOpacity,
 TextInputProps,
 StyleProp,
 ViewStyle,
} from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";

interface CustomTextInputProps extends Omit<TextInputProps, "style"> {
 colorIcon?: string;
 leftIcon?: keyof typeof MaterialIcons.glyphMap; // Perubahan di sini
 rightIcon?: keyof typeof MaterialIcons.glyphMap;
 onRightIconPress?: () => void;
 onLeftIconPress?: () => void;
 style?: StyleProp<ViewStyle>;
}

export function CustomTextInput({
 leftIcon,
 rightIcon,
 onRightIconPress,
 onLeftIconPress,
 value,
 onChangeText,
 style,
 colorIcon = "#666",
 ...props
}: CustomTextInputProps) {
 return (
  <Animated.View entering={FadeIn} style={[styles.container, style]}>
   {leftIcon && (
    <TouchableOpacity onPress={onLeftIconPress}>
     <MaterialIcons size={20} name={leftIcon} color={colorIcon} />
    </TouchableOpacity>
   )}

   <TextInput
    style={styles.input}
    value={value}
    onChangeText={onChangeText}
    {...props}
   />

   {rightIcon && (
    <TouchableOpacity onPress={onRightIconPress}>
     <MaterialIcons size={20} name={rightIcon} color={colorIcon} />
    </TouchableOpacity>
   )}
  </Animated.View>
 );
}

const styles = StyleSheet.create({
 container: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  borderRadius: 25,
  paddingHorizontal: 16,
  paddingVertical: 8,
  marginHorizontal: 16,
  marginVertical: 8,
 },
 input: {
  flex: 1,
  fontSize: 16,
  marginHorizontal: 8,
  color: "#000",
  paddingVertical: 4,
 },
});
