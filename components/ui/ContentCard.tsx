import { Colors } from "@/utils/Constant";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";

interface ContentCardProps {
 id?: number;
 title?: string;
 description?: string;
 thumbnail?: string;
 onPress?: () => void;
}

export function ContentCard({
 id,
 title,
 description,
 thumbnail,
 onPress,
}: ContentCardProps) {
 return (
  <TouchableOpacity style={styles.cardContainer} onPress={onPress}>
   <Image source={{ uri: thumbnail }} style={styles.cardThumbnail} />
   <Text style={styles.cardTitle} numberOfLines={2}>
    {title}
   </Text>
   <Text style={styles.cardDesc} numberOfLines={1}>
    {description}
   </Text>
  </TouchableOpacity>
 );
}
const styles = StyleSheet.create({
 cardContainer: {
  marginRight: 16,
  width: 150,
  borderColor: Colors.secondaryBorder,
  borderWidth: 1,
  borderRadius: 16,
  padding: 12,
 },
 cardThumbnail: {
  width: "100%",
  height: 125,
  backgroundColor: "#000033",
  borderRadius: 8,
  marginBottom: 8,
 },
 cardTitle: {
  fontSize: 16,
  fontWeight: "500",
  marginBottom: 4,
 },
 cardDesc: {
  color: "#666",
  fontSize: 14,
 },
});
