import {
 View,
 TouchableOpacity,
 SafeAreaView,
 ScrollView,
 Text,
} from "react-native";
import { resetAndNavigate } from "@/utils/Helpers";
import { globalStyle } from "@/lib/style/global";
import { BrandHeader } from "@/components/BrandHeader";
import { CustomTextInput } from "@/components/ui/CustomTextInput";
import { ListCard } from "@/components/ui/ListCard";
import { Colors } from "@/utils/Constant";
import { useEffect, useState } from "react";
import { ListCardSkeleton } from "@/components/ui/ListCardSkelaton";
import { CardMovies } from "@/components/CardMovies";
import { getTopMovie } from "@/services/movie";
import { IMovieResult } from "@/utils/types/movie.type";

export default function MovieScreen() {
 const [limit, setLimit] = useState<number>(10);
 const [term, setTerm] = useState<string>("marvel");
 const [data, setData] = useState<IMovieResult[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await getTopMovie(term, limit);
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
     placeholder="Find Trending Movie Now!"
     onPress={() => resetAndNavigate("movie/search")}
     leftIcon={"search"}
    />

    {/* New Movie */}
    <CardMovies />

    {/* Top Movie */}
    {loading ? (
     <ListCardSkeleton />
    ) : (
     <View style={[globalStyle.section]}>
      <View style={globalStyle.sectionHeader}>
       <Text style={globalStyle.sectionTitle}>Top Movie</Text>
       <TouchableOpacity>
        <Text style={globalStyle.viewAll}>View All</Text>
       </TouchableOpacity>
      </View>
      {data.map((item) => (
       <ListCard
        title={item.trackName}
        description={item.shortDescription || "-"}
        thumbnail={item.artworkUrl100}
        key={`${item.collectionId}`}
        onPress={() => resetAndNavigate(`movie/${item.trackId}`)}
       />
      ))}
     </View>
    )}

    <View style={globalStyle.containerButton}></View>
   </ScrollView>
  </SafeAreaView>
 );
}
