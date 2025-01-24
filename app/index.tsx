import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useEffect } from "react";
import { useFonts } from "expo-font";
import { resetAndNavigate } from "@/utils/Helpers";

const SplashScreen = () => {
 const [loaded] = useFonts({
  SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
 });

 useEffect(() => {
  const timer = setTimeout(() => {
   if (loaded) {
    resetAndNavigate("/(tabs)");
   }
  }, 2000); // 2 seconds delay

  return () => clearTimeout(timer);
 }, [loaded]);

 if (!loaded) {
  return null;
 }

 return (
  <View style={styles.container}>
   <View style={styles.content}>
    <View style={styles.logoContainer}>
     <Image
      source={require("@/assets/images/logo.png")}
      style={styles.logo}
      resizeMode="contain"
     />
    </View>
    <View style={styles.taglineContainer}>
     <Text style={styles.tagline}>
      Stream, Play, Discover. All in One Place
     </Text>
    </View>
   </View>
  </View>
 );
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#FFFFFF",
 },
 content: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
 },
 logoContainer: {
  alignItems: "center",
 },
 logo: {
  width: 168,
  height: 80,
 },
 taglineContainer: {
  alignItems: "center",
 },
 tagline: {
  fontSize: 18,
  color: "#666666",
 },
});

export default SplashScreen;
