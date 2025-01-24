import { globalStyle } from "@/lib/style/global";
import { Colors } from "@/utils/Constant";
import {
 View,
 Text,
 TouchableOpacity,
 ScrollView,
 StyleSheet,
} from "react-native";

export function CardSongs() {
 return (
  <View style={globalStyle.section}>
   <View style={globalStyle.sectionHeader}>
    <Text style={globalStyle.sectionTitle}>New Songs</Text>
    <TouchableOpacity>
     <Text style={globalStyle.viewAll}>View All</Text>
    </TouchableOpacity>
   </View>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {[1, 2, 3, 4].map((item) => (
     <View key={`song-${item}`} style={styles.songCard}>
      <View style={styles.songThumbnail} />
      <Text style={styles.songTitle}>Title</Text>
      <Text style={styles.artistName}>artist_name</Text>
     </View>
    ))}
   </ScrollView>
  </View>
 );
}

const styles = StyleSheet.create({
 songCard: {
  marginRight: 16,
  width: 150,
  borderColor: Colors.secondaryBorder,
  borderWidth: 1,
  borderRadius: 16,
  padding: 12,
 },
 songThumbnail: {
  width: "100%",
  height: 125,
  backgroundColor: "#000033",
  borderRadius: 8,
  marginBottom: 8,
 },
 songTitle: {
  fontSize: 16,
  fontWeight: "500",
  marginBottom: 4,
 },
 artistName: {
  color: "#666",
  fontSize: 14,
 },
});
