import { globalStyle } from "@/lib/style/global";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ContentCard } from "./ui/ContentCard";
import { useEffect, useState } from "react";
import { IMovieResult } from "@/utils/types/movie.type";
import { getNewMovie } from "@/services/movie";
import { ContentCardSkeleton } from "./ui/ContentCardSkelaton";
import { Colors } from "@/utils/Constant";
import { resetAndNavigate } from "@/utils/Helpers";

export function CardMovies() {
 const [limit, setLimit] = useState<number>(5);
 const [term, setTerm] = useState<string>("");
 const [data, setData] = useState<IMovieResult[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await getNewMovie(term, limit);
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
    <Text style={globalStyle.sectionTitle}>New Movie</Text>
    <TouchableOpacity>
     <Text style={globalStyle.viewAll}>View All</Text>
    </TouchableOpacity>
   </View>
   <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {data?.map((item) => (
     <ContentCard
      title={item.trackName}
      description={item.shortDescription}
      thumbnail={item.artworkUrl100}
      key={`${item.collectionId}`}
      onPress={() => resetAndNavigate(`movie/${item.trackId}`)}
     />
    ))}
   </ScrollView>
  </View>
 );
}
