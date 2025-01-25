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
import { CardApps } from "@/components/CardApps";

export default function AppsScreen() {
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
     placeholder="Find Trending Apps Now!"
     onPress={() => resetAndNavigate("app/search")}
     leftIcon={"search"}
    />

    {/* Top Apps */}
    <CardApps limits={10} />

    <View style={globalStyle.containerButton}></View>
   </ScrollView>
  </SafeAreaView>
 );
}
