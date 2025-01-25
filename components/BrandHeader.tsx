import { View, Image, Text, StyleSheet } from "react-native";

export function BrandHeader() {
 return (
  <View style={styles.header}>
   <View style={styles.logoContainer}>
    <Image source={require("@/assets/images/logo.png")} style={styles.logo} />
   </View>
   <Text style={styles.tagline}>Stream, Play, Discover - All in One Place</Text>
  </View>
 );
}

const styles = StyleSheet.create({
 header: {
  padding: 16,
 },
 logoContainer: {
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 4,
 },
 logo: {
  width: 168,
  height: 42,
 },
 brandName: {
  fontSize: 20,
  fontWeight: "bold",
 },
 tagline: {
  color: "#666",
  fontSize: 14,
 },
});
