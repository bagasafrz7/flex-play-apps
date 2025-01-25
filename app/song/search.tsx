import { View, TouchableOpacity, StyleSheet } from "react-native";
import Animated, {
 FadeIn,
 SlideInDown,
 SlideOutDown,
} from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { resetAndNavigate } from "@/utils/Helpers";
import { SearchBar } from "@/components/ui/SearchBar";

export default function SearchSong() {
 const [searchQuery, setSearchQuery] = useState("");

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
    <TouchableOpacity
     onPress={() => resetAndNavigate("/songs")}
     style={styles.cancelButton}
    >
     <Ionicons name="close" size={24} color="#000" />
    </TouchableOpacity>
   </View>

   <Animated.ScrollView entering={FadeIn.delay(150)} style={styles.results}>
    {/* Add your search results here */}
   </Animated.ScrollView>
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
 results: {
  flex: 1,
 },
});
