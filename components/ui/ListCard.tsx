import { Colors } from "@/utils/Constant";
import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";

interface ListCardProps {
 id?: number;
 title?: string;
 description?: string;
 thumbnail?: string;
 onPress?: () => void;
}

export function ListCard({
 id,
 title,
 description,
 thumbnail,
 onPress,
}: ListCardProps) {
 return (
  <TouchableOpacity style={styles.listCard} onPress={onPress}>
   <Image source={{ uri: thumbnail }} style={styles.listIcon} />
   <View style={styles.listInfo}>
    <Text style={styles.listTitle} numberOfLines={2}>
     {title}
    </Text>
    <Text style={styles.listDesc} numberOfLines={1}>
     {description}
    </Text>
   </View>
  </TouchableOpacity>
 );
}

const styles = StyleSheet.create({
 listCard: {
  flexDirection: "row",
  alignItems: "center",
  padding: 12,
  borderRadius: 12,
  backgroundColor: "#fff",
  marginBottom: 12,
  borderWidth: 1,
  borderColor: Colors.secondaryBorder,
 },
 listIcon: {
  width: 48,
  height: 48,
  backgroundColor: "#000033",
  borderRadius: 24,
  marginRight: 12,
 },
 listInfo: {
  flex: 1,
 },
 listTitle: {
  fontSize: 16,
  fontWeight: "500",
  marginBottom: 4,
 },
 listDesc: {
  color: "#666",
  fontSize: 14,
 },
});
