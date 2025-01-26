import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

interface SearchBarProps {
 placeholder?: string;
 searchQuery: string;
 setSearchQuery: (searchQuery: string) => void;
}

export function SearchBar({
 placeholder,
 searchQuery,
 setSearchQuery,
}: SearchBarProps) {
 return (
  <View style={styles.searchBar}>
   <Ionicons name="search" size={20} color="#666" />
   <TextInput
    style={styles.input}
    placeholder={placeholder || "Search"}
    value={searchQuery}
    onChangeText={setSearchQuery}
    autoFocus
    keyboardType="web-search"
   />
   {searchQuery.length > 0 && (
    <Animated.View entering={FadeIn} exiting={FadeOut}>
     <TouchableOpacity onPress={() => setSearchQuery("")}>
      <Ionicons name="close-circle" size={20} color="#666" />
     </TouchableOpacity>
    </Animated.View>
   )}
  </View>
 );
}

const styles = StyleSheet.create({
 searchBar: {
  flex: 1,
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "#f5f5f5",
  borderRadius: 25,
  paddingHorizontal: 16,
  paddingVertical: 10,
  marginRight: 12,
 },
 input: {
  flex: 1,
  fontSize: 16,
  marginLeft: 8,
  color: "#000",
 },
});
