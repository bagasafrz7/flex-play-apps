import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
 TouchableOpacity,
 StyleSheet,
 Text,
 StyleProp,
 ViewStyle,
} from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

interface DetailAppBarProps {
 title: string;
 style?: StyleProp<ViewStyle>;
}

export function DetailAppBar({ title, style }: DetailAppBarProps) {
 return (
  <Animated.View entering={FadeIn.delay(100)} style={[styles.header, style]}>
   <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
    <Ionicons name="arrow-back" size={24} color="#000" />
   </TouchableOpacity>
   <Text style={styles.headerTitle} numberOfLines={1}>
    Details
   </Text>
   <TouchableOpacity style={styles.menuButton}>
    <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
   </TouchableOpacity>
  </Animated.View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#fff",
 },
 header: {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  paddingHorizontal: 16,
  paddingTop: 60,
  paddingBottom: 16,
 },
 headerTitle: {
  fontSize: 18,
  fontWeight: "600",
 },
 backButton: {
  padding: 8,
 },
 menuButton: {
  padding: 8,
 },
});
