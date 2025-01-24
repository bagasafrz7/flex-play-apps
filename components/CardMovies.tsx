import { globalStyle } from "@/lib/style/global";
import { Colors } from "@/utils/Constant";
import {
 StyleSheet,
 View,
 Text,
 TouchableOpacity,
 ScrollView,
} from "react-native";

export function CardMovies() {
 return (
  <View style={globalStyle.section}>
   <View style={globalStyle.sectionHeader}>
    <Text style={globalStyle.sectionTitle}>New Movie</Text>
    <TouchableOpacity>
     <Text style={globalStyle.viewAll}>View All</Text>
    </TouchableOpacity>
   </View>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {[1, 2, 3, 4].map((item) => (
     <View key={`movie-${item}`} style={styles.movieCard}>
      <View style={styles.movieThumbnail} />
      <Text style={styles.movieTitle}>Title</Text>
      <Text style={styles.genre}>genre</Text>
     </View>
    ))}
   </ScrollView>
  </View>
 );
}

const styles = StyleSheet.create({
 movieCard: {
  marginRight: 16,
  width: 150,
  borderColor: Colors.secondaryBorder,
  borderWidth: 1,
  borderRadius: 16,
  padding: 12,
 },
 movieThumbnail: {
  width: "100%",
  height: 125,
  backgroundColor: "#000033",
  borderRadius: 8,
  marginBottom: 8,
 },
 movieTitle: {
  fontSize: 16,
  fontWeight: "500",
  marginBottom: 4,
 },
 genre: {
  color: "#666",
  fontSize: 14,
 },
});
