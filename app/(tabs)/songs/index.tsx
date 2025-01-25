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
import { Colors } from "@/utils/Constant";
import { useEffect, useState } from "react";
import { getTopSongs } from "@/services/songs";
import { ISongResult } from "@/utils/types/song.type";
import { ContentCardSkeleton } from "@/components/ui/ContentCardSkelaton";
import { ListCardSkeleton } from "@/components/ui/ListCardSkelaton";

export default function SongsScreen() {
 const [limit, setLimit] = useState<number>(10);
 const [term, setTerm] = useState<string>("");
 const [data, setData] = useState<ISongResult[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await getTopSongs(term, limit);
    setData(response.results);
   } catch (error) {
    if (error instanceof Error) {
     setError(error.message);
    } else {
     setError("Failed to fetch data");
    }
   } finally {
    setLoading(false);
   }
  };

  fetchData();
 }, []);

 if (error) {
  return (
   <View>
    <Text
     style={[
      {
       color: Colors.secondary,
      },
     ]}
    >
     {error}
    </Text>
   </View>
  );
 }

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
    {loading ? (
     <ListCardSkeleton />
    ) : (
     <View style={[globalStyle.section]}>
      <View style={globalStyle.sectionHeader}>
       <Text style={globalStyle.sectionTitle}>Top Songs</Text>
       <TouchableOpacity>
        <Text style={globalStyle.viewAll}>View All</Text>
       </TouchableOpacity>
      </View>
      {data.map((item) => (
       <ListCard
        title={item.trackName}
        description={item.artistName}
        thumbnail={item.artworkUrl100}
        key={`${item.collectionId}`}
        onPress={() => resetAndNavigate(`song/${item.trackId}`)}
       />
      ))}
     </View>
    )}

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
