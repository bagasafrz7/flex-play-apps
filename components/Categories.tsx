import { globalStyle } from "@/lib/style/global";
import { Colors } from "@/utils/Constant";
import {
 View,
 Text,
 ScrollView,
 TouchableOpacity,
 StyleSheet,
} from "react-native";
import { IconSymbol, IconSymbolName } from "./ui/IconSymbol";
import { CategoriesProps } from "@/utils/Types";
import { resetAndNavigate } from "@/utils/Helpers";

export function Categories({ categories }: CategoriesProps) {
 return (
  <View style={styles.categories}>
   <Text style={globalStyle.sectionTitle}>Categories</Text>
   <ScrollView
    horizontal
    showsHorizontalScrollIndicator={false}
    style={styles.categoryScroll}
   >
    {categories.map((category, index) => (
     <TouchableOpacity
      key={index}
      style={styles.categoryButton}
      onPress={() => resetAndNavigate(`${category.link}`)}
     >
      <IconSymbol size={28} name={category.icon} color={Colors.primary} />
      <Text style={styles.categoryText}>{category.name}</Text>
     </TouchableOpacity>
    ))}
   </ScrollView>
  </View>
 );
}

const styles = StyleSheet.create({
 categories: {
  paddingHorizontal: 16,
  paddingVertical: 10,
 },
 categoryScroll: {
  marginTop: 12,
 },
 categoryButton: {
  borderColor: Colors.secondaryBorder,
  borderWidth: 1,
  padding: 16,
  borderRadius: 16,
  marginRight: 12,
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
  height: 60,
 },
 categoryIcon: {
  width: 24,
  height: 24,
  marginBottom: 4,
 },
 categoryText: {
  fontSize: 14,
 },
});
