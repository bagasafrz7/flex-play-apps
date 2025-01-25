import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";

const { width } = Dimensions.get("window");

export function DetailCardSkeleton() {
 return (
  <View style={styles.container}>
   {/* Header Placeholder */}
   <View style={styles.header} />

   {/* Banner Placeholder */}
   <Animated.View
    entering={FadeInDown.delay(0).springify()}
    style={styles.bannerContainer}
   >
    <View style={styles.banner} />
   </Animated.View>

   {/* Content Placeholder */}
   <Animated.View
    entering={FadeInUp.delay(0).springify()}
    style={styles.content}
   >
    <View style={styles.titleSkeleton} />
    <View style={styles.subtitleSkeleton} />
    <View style={styles.descriptionSkeleton} />
   </Animated.View>

   {/* Bottom Button Placeholder */}
   <Animated.View
    entering={FadeInDown.delay(0).springify()}
    style={styles.bottomContainer}
   >
    <View style={styles.bottomButton} />
   </Animated.View>
  </View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#fff",
 },
 header: {
  height: 50,
  backgroundColor: "#f0f0f0",
 },
 bannerContainer: {
  width: width,
  height: width * 0.6,
  padding: 16,
 },
 banner: {
  flex: 1,
  backgroundColor: "#e0e0e0",
  borderRadius: 16,
 },
 content: {
  flex: 1,
  padding: 16,
 },
 titleSkeleton: {
  width: "60%",
  height: 30,
  backgroundColor: "#e0e0e0",
  marginBottom: 10,
 },
 subtitleSkeleton: {
  width: "40%",
  height: 20,
  backgroundColor: "#e0e0e0",
  marginBottom: 16,
 },
 descriptionSkeleton: {
  width: "100%",
  height: 120,
  backgroundColor: "#e0e0e0",
 },
 bottomContainer: {
  padding: 16,
  paddingBottom: 32,
 },
 bottomButton: {
  backgroundColor: "#e0e0e0",
  padding: 16,
  borderRadius: 12,
 },
});
