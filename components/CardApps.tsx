import { globalStyle } from "@/lib/style/global";
import { View, Text, TouchableOpacity } from "react-native";
import { ListCard } from "./ui/ListCard";

export function CardApps() {
 return (
  <View style={[globalStyle.section]}>
   <View style={globalStyle.sectionHeader}>
    <Text style={globalStyle.sectionTitle}>New Apps</Text>
    <TouchableOpacity>
     <Text style={globalStyle.viewAll}>View All</Text>
    </TouchableOpacity>
   </View>
   {[1, 2, 3, 4].map((item) => (
    <ListCard
     id={item}
     title="App Title"
     description="App Description"
     thumbnail="thumbnail_url"
     key={`app-${item}`}
    />
   ))}
  </View>
 );
}
