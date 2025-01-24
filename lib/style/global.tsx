import { Colors } from "@/utils/Constant";
import { StyleSheet } from "react-native";

export const globalStyle = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: Colors.white,
  paddingVertical: 14,
 },
 paddingHorizontal: {
  paddingHorizontal: 10,
 },
 containerButton: {
  paddingBottom: 100,
 },
 section: {
  paddingHorizontal: 16,
  paddingVertical: 10,
 },
 sectionHeader: {
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 16,
 },
 sectionTitle: {
  fontSize: 18,
  fontWeight: "600",
 },
 viewAll: {
  color: "#666",
 },
});
