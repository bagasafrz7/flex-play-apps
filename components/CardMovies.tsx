import { globalStyle } from "@/lib/style/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ContentCard } from "./ui/ContentCard";

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
     <ContentCard
      title="Title"
      description="Description"
      thumbnail="thumbnail_url"
      key={`song-${item}`}
     />
    ))}
   </ScrollView>
  </View>
 );
}
