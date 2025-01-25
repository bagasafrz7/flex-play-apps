import { globalStyle } from "@/lib/style/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ContentCard } from "./ui/ContentCard";
import { useEffect, useState } from "react";
import { getNewSongs } from "@/services/songs";
import { ISongResult } from "@/utils/types/song.type";
import { ContentCardSkeleton } from "./ui/ContentCardSkelaton";
import { Colors } from "@/utils/Constant";
import { resetAndNavigate } from "@/utils/Helpers";

export function CardSongs() {
 const [limit, setLimit] = useState<number>(5);
 const [term, setTerm] = useState<string>("coldplay");
 const [data, setData] = useState<ISongResult[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await getNewSongs(term, limit);
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

 if (loading) {
  return <ContentCardSkeleton />;
 }

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
  <View style={globalStyle.section}>
   <View style={globalStyle.sectionHeader}>
    <Text style={globalStyle.sectionTitle}>New Songs</Text>
    <TouchableOpacity>
     <Text style={globalStyle.viewAll}>View All</Text>
    </TouchableOpacity>
   </View>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {data?.map((item) => (
     <ContentCard
      title={item.trackName}
      description={item.artistName}
      thumbnail={item.artworkUrl100}
      key={`${item.collectionId}`}
      onPress={() => resetAndNavigate(`song/${item.trackId}`)}
     />
    ))}
   </ScrollView>
  </View>
 );
}
