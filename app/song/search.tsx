import { View, TouchableOpacity, StyleSheet, Text } from "react-native";
import Animated, {
 FadeIn,
 SlideInDown,
 SlideOutDown,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useCallback, useEffect, useState } from "react";
import { resetAndNavigate } from "@/utils/Helpers";
import { SearchBar } from "@/components/ui/SearchBar";
import { ISongResult } from "@/utils/types/song.type";
import { getListSongs } from "@/services/songs";
import { Colors } from "@/utils/Constant";
import { ListCardSkeleton } from "@/components/ui/ListCardSkelaton";
import { ListCard } from "@/components/ui/ListCard";
import { debounce } from "@/utils/Function";
import { router } from "expo-router";
import { globalStyle } from "@/lib/style/global";

export default function SearchSong() {
 const [searchQuery, setSearchQuery] = useState<string>("");
 const [limit, setLimit] = useState<number>(10);
 const [data, setData] = useState<ISongResult[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);
 const [loadingMore, setLoadingMore] = useState<boolean>(false);
 const [hasMore, setHasMore] = useState<boolean>(true);

 const fetchSearchResults = useCallback(
  async (query: string, isLoadingMore = false) => {
   if (query.trim() === "") {
    setData([]);
    setLoading(false);
    return;
   }

   if (!isLoadingMore) {
    setLoading(true);
   } else {
    setLoadingMore(true);
   }

   try {
    const response = await getListSongs(query, limit);
    const { resultCount, results } = response;

    if (isLoadingMore) {
     setData((prev) => [...prev, ...results]);
    } else {
     setData(results);
    }

    setHasMore(results.length === limit);
   } catch (error) {
    if (error instanceof Error) {
     setError(error.message);
    } else {
     setError("Failed to fetch data");
    }
   } finally {
    setLoading(false);
    setLoadingMore(false);
   }
  },
  [limit]
 );

 const handleLoadMore = useCallback(() => {
  if (!loadingMore && hasMore && !loading && searchQuery.trim() !== "") {
   setLimit((prevLimit) => prevLimit + 10);
   fetchSearchResults(searchQuery, true);
  }
 }, [loadingMore, hasMore, loading, searchQuery, fetchSearchResults]);

 const debouncedSearch = useCallback(debounce(fetchSearchResults, 500), [
  fetchSearchResults,
 ]);

 useEffect(() => {
  debouncedSearch(searchQuery);
 }, [searchQuery, debouncedSearch]);

 if (error) {
  return (
   <View>
    <Text style={{ color: Colors.secondary }}>{error}</Text>
   </View>
  );
 }

 return (
  <Animated.View
   entering={SlideInDown.springify().damping(15)}
   exiting={SlideOutDown}
   style={styles.container}
  >
   <View style={styles.header}>
    <SearchBar
     placeholder="Search Songs..."
     searchQuery={searchQuery}
     setSearchQuery={setSearchQuery}
    />
    <TouchableOpacity onPress={() => router.back()} style={styles.cancelButton}>
     <Ionicons name="close" size={24} color="#000" />
    </TouchableOpacity>
   </View>

   <View style={{ padding: 14 }}>
    {loading && !loadingMore ? (
     <>
      {[1, 2, 3, 4].map((item) => (
       <ListCardSkeleton key={item} />
      ))}
     </>
    ) : (
     <Animated.FlatList
      entering={FadeIn.delay(150)}
      data={data}
      keyExtractor={(item) => `${item.trackId}`}
      renderItem={({ item }) => (
       <ListCard
        title={item.trackName}
        description={item.artistName}
        thumbnail={item.artworkUrl100}
        onPress={() => resetAndNavigate(`song/${item.trackId}`)}
       />
      )}
      ListEmptyComponent={() => (
       <View style={styles.noResultsContainer}>
        <Ionicons
         name={
          searchQuery.trim() !== "" ? "search-outline" : "musical-notes-outline"
         }
         size={48}
         color={Colors.secondary}
        />
        <Text style={styles.noResults}>
         {searchQuery.trim() !== "" ? "No results found" : "Search for songs"}
        </Text>
       </View>
      )}
      ListFooterComponent={() =>
       data.length > 0 && hasMore && !loadingMore ? (
        <TouchableOpacity
         style={styles.loadMoreButton}
         onPress={handleLoadMore}
         disabled={loadingMore}
        >
         <Text style={styles.loadMoreText}>Load More</Text>
        </TouchableOpacity>
       ) : loadingMore ? (
        <View style={styles.loadingMore}>
         <ListCardSkeleton />
        </View>
       ) : null
      }
      contentContainerStyle={{ flexGrow: 1, paddingBottom: 120 }}
     />
    )}
   </View>
   <View style={globalStyle.containerButton} />
  </Animated.View>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#fff",
 },
 header: {
  flexDirection: "row",
  alignItems: "center",
  padding: 16,
  paddingTop: 60,
  backgroundColor: "#fff",
  borderBottomWidth: 1,
  borderBottomColor: "#eee",
 },
 cancelButton: {
  padding: 4,
 },
 noResultsContainer: {
  flex: 1,
  alignItems: "center",
  justifyContent: "center",
  marginTop: 40,
  gap: 12,
 },
 noResults: {
  textAlign: "center",
  color: Colors.secondary,
  fontSize: 16,
  fontWeight: "500",
 },
 loadingMore: {
  paddingVertical: 16,
 },
 loadMoreButton: {
  paddingVertical: 14,
  paddingHorizontal: 16,
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: Colors.primary,
  borderRadius: 8,
  marginVertical: 14,
 },
 loadMoreText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "500",
 },
});
