import { globalStyle } from "@/lib/style/global";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export function CardApps() {
 return (
  <View style={[globalStyle.section]}>
   <View style={globalStyle.sectionHeader}>
    <Text style={globalStyle.sectionTitle}>New Apps</Text>
    <TouchableOpacity>
     <Text style={globalStyle.viewAll}>View All</Text>
    </TouchableOpacity>
   </View>
   {[1, 2, 3, 4].map((item) => (
    <TouchableOpacity key={`app-${item}`} style={styles.appCard}>
     <View style={styles.appIcon} />
     <View style={styles.appInfo}>
      <Text style={styles.appTitle}>Title Apps</Text>
      <Text style={styles.appDesc}>Desc</Text>
     </View>
    </TouchableOpacity>
   ))}
  </View>
 );
}

const styles = StyleSheet.create({
 appCard: {
  flexDirection: "row",
  alignItems: "center",
  padding: 12,
  borderRadius: 12,
  backgroundColor: "#fff",
  marginBottom: 12,
  borderWidth: 1,
  borderColor: "#eee",
 },
 appIcon: {
  width: 48,
  height: 48,
  backgroundColor: "#000033",
  borderRadius: 24,
  marginRight: 12,
 },
 appInfo: {
  flex: 1,
 },
 appTitle: {
  fontSize: 16,
  fontWeight: "500",
  marginBottom: 4,
 },
 appDesc: {
  color: "#666",
  fontSize: 14,
 },
});
