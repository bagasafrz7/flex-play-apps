import React from "react";
import { View, StyleSheet } from "react-native";
import { Colors } from "@/utils/Constant";

export function ListCardSkeleton() {
 return (
  <View>
   <View style={{ flexDirection: "column" }}>
    {[1, 2, 3, 4].map((item) => (
     <View style={styles.listCard} key={item}>
      <View style={styles.listIcon} />
      <View style={styles.listInfo}>
       <View style={[styles.skeleton, styles.titleSkeleton]} />
       <View style={[styles.skeleton, styles.descSkeleton]} />
      </View>
     </View>
    ))}
   </View>
  </View>
 );
}

const styles = StyleSheet.create({
 listCard: {
  flexDirection: "row",
  alignItems: "center",
  padding: 12,
  borderRadius: 12,
  backgroundColor: "#fff",
  marginBottom: 12,
  borderWidth: 1,
  borderColor: Colors.secondaryBorder,
 },
 listIcon: {
  width: 48,
  height: 48,
  backgroundColor: "#e0e0e0",
  borderRadius: 24,
  marginRight: 12,
 },
 listInfo: {
  flex: 1,
 },
 skeleton: {
  backgroundColor: "#e0e0e0",
  borderRadius: 4,
 },
 titleSkeleton: {
  height: 16,
  width: "70%",
  marginBottom: 8,
 },
 descSkeleton: {
  height: 14,
  width: "50%",
 },
});
