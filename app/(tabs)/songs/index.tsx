import {
 View,
 TouchableOpacity,
 StyleSheet,
 SafeAreaView,
 ScrollView,
 Text,
} from "react-native";
import { resetAndNavigate } from "@/utils/Helpers";
import { globalStyle } from "@/lib/style/global";
import { BrandHeader } from "@/components/BrandHeader";
import { CustomTextInput } from "@/components/ui/CustomTextInput";
import { CardSongs } from "@/components/CardSongs";
import { ListCard } from "@/components/ui/ListCard";

export default function SongsScreen() {
 return (
  <SafeAreaView style={globalStyle.container}>
   <ScrollView
    showsVerticalScrollIndicator={false}
    style={globalStyle.container}
   >
    {/* Header */}
    <BrandHeader />

    {/* Search */}
    <CustomTextInput
     placeholder="Find Trending Song Now!"
     onPress={() => resetAndNavigate("song/search")}
     leftIcon={"search"}
    />

    {/* New Songs */}
    <CardSongs />

    {/* Top Song */}
    <View style={[globalStyle.section]}>
     <View style={globalStyle.sectionHeader}>
      <Text style={globalStyle.sectionTitle}>Top Songs</Text>
      <TouchableOpacity>
       <Text style={globalStyle.viewAll}>View All</Text>
      </TouchableOpacity>
     </View>
     {[1, 2, 3, 4].map((item) => (
      <ListCard
       id={item}
       title="Title"
       description="Description"
       thumbnail="thumbnail_url"
       key={`song-${item}`}
      />
     ))}
    </View>

    <View style={globalStyle.containerButton}></View>
   </ScrollView>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 searchButton: {
  margin: 16,
 },
 searchBar: {
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  borderRadius: 25,
  paddingHorizontal: 16,
  paddingVertical: 12,
 },
 searchText: {
  marginLeft: 8,
  fontSize: 16,
  color: "#666",
 },
});
