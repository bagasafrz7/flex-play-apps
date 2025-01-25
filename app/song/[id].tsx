import {
 View,
 Text,
 TouchableOpacity,
 StyleSheet,
 Dimensions,
 Image,
 SafeAreaView,
 ScrollView,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import Animated, { FadeInDown, FadeInUp } from "react-native-reanimated";
import { getDetailSong } from "@/services/songs";
import { useEffect, useState } from "react";
import { ISongResult } from "@/utils/types/song.type";
import { DetailAppBar } from "@/components/ui/DetailAppBar";
import { Colors } from "@/utils/Constant";
import { DetailCardSkeleton } from "@/components/ui/DetailCardSkelaton";

const { width } = Dimensions.get("window");

export default function DetailScreen() {
 const router = useRouter();
 const params = useLocalSearchParams();
 const { id } = params;

 const [data, setData] = useState<ISongResult[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const songId = Number(id);
    if (isNaN(songId)) {
     throw new Error("ID tidak valid");
    }
    const response = await getDetailSong(songId);
    setData(response.results);
   } catch (error) {
    if (error instanceof Error) {
     setError(error.message);
    } else {
     setError("Failed to fetch data");
    }
   } finally {
    setTimeout(() => {
     setLoading(false);
    }, 1000);
   }
  };

  fetchData();
 }, []);

 if (loading) {
  return <DetailCardSkeleton />;
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
  <SafeAreaView style={styles.container}>
   {/* Header */}
   <DetailAppBar title={`${data[0]?.artistName || "Details"}`} />

   <ScrollView
    contentContainerStyle={styles.scrollViewContent}
    showsVerticalScrollIndicator={false}
   >
    {/* Image Banner */}
    <Animated.View
     entering={FadeInDown.delay(200).springify()}
     style={styles.bannerContainer}
    >
     <Image source={{ uri: data[0]?.artworkUrl100 }} style={styles.banner} />
    </Animated.View>

    {/* Content */}
    <Animated.View
     entering={FadeInUp.delay(300).springify()}
     style={styles.content}
    >
     <Text style={styles.title}>{data[0]?.trackName}</Text>
     <Text style={styles.subtitle}>{data[0]?.artistName}</Text>

     <View style={styles.infoContainer}>
      <View style={styles.infoRow}>
       <Text style={styles.infoLabel}>Album:</Text>
       <Text style={styles.infoValue}>{data[0]?.collectionName}</Text>
      </View>
      <View style={styles.infoRow}>
       <Text style={styles.infoLabel}>Genre:</Text>
       <Text style={styles.infoValue}>{data[0]?.primaryGenreName}</Text>
      </View>
      <View style={styles.infoRow}>
       <Text style={styles.infoLabel}>Release Date:</Text>
       <Text style={styles.infoValue}>
        {new Date(data[0]?.releaseDate).toLocaleDateString()}
       </Text>
      </View>
      <View style={styles.infoRow}>
       <Text style={styles.infoLabel}>Duration:</Text>
       <Text style={styles.infoValue}>
        {Math.floor((data[0]?.trackTimeMillis || 0) / 60000)}:
        {Math.floor(((data[0]?.trackTimeMillis || 0) % 60000) / 1000)
         .toString()
         .padStart(2, "0")}
       </Text>
      </View>
     </View>

     <Text style={styles.description}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the
      1500s, when an unknown printer took a galley of type and scrambled it to
      make a type specimen book. It has survived not only five centuries, but
      also the leap into electronic
     </Text>
    </Animated.View>

    {/* Back Button */}
    <Animated.View
     entering={FadeInDown.delay(400).springify()}
     style={styles.bottomContainer}
    >
     <TouchableOpacity
      style={styles.bottomButton}
      onPress={() => router.back()}
     >
      <Text style={styles.bottomButtonText}>Back</Text>
     </TouchableOpacity>
    </Animated.View>
   </ScrollView>
  </SafeAreaView>
 );
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#fff",
 },
 scrollViewContent: {
  paddingBottom: 80,
 },
 bannerContainer: {
  width: width,
  height: width * 0.6,
  padding: 16,
 },
 banner: {
  flex: 1,
  backgroundColor: "#0C0C1E",
  borderRadius: 16,
 },
 content: {
  flex: 1,
  padding: 16,
 },
 title: {
  fontSize: 24,
  fontWeight: "bold",
  marginBottom: 4,
 },
 subtitle: {
  fontSize: 16,
  color: "#666",
  marginBottom: 16,
 },
 description: {
  fontSize: 16,
  lineHeight: 24,
  color: "#333",
 },
 infoContainer: {
  marginVertical: 8,
 },
 infoRow: {
  flexDirection: "row",
  marginBottom: 8,
 },
 infoLabel: {
  fontWeight: "bold",
  marginRight: 8,
  width: 100,
 },
 infoValue: {
  flex: 1,
 },
 bottomContainer: {
  padding: 16,
  paddingBottom: 32,
 },
 bottomButton: {
  backgroundColor: Colors.primary,
  padding: 16,
  borderRadius: 12,
  alignItems: "center",
 },
 bottomButtonText: {
  color: "#fff",
  fontSize: 16,
  fontWeight: "600",
 },
});
