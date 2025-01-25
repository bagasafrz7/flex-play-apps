import React from "react";
import { ScrollView, View, SafeAreaView } from "react-native";
import { globalStyle } from "@/lib/style/global";
import { Categories } from "@/components/Categories";
import { ICategory } from "@/utils/Types";
import { CardSongs } from "@/components/CardSongs";
import { CardMovies } from "@/components/CardMovies";
import { BrandHeader } from "@/components/BrandHeader";
import { CardApps } from "@/components/CardApps";

export default function App() {
 const categoryData: ICategory[] = [
  {
   name: "Song",
   icon: "music.house.fill",
   id: "song",
   link: "/songs",
  },
  {
   name: "Movie",
   icon: "movieclapper.fill",
   id: "movie",
   link: "/movie",
  },
  {
   name: "Apps",
   icon: "apps.ipad",
   id: "apps",
   link: "/apps",
  },
  {
   name: "Other",
   icon: "grid.circle.fill",
   id: "other",
   link: "#",
  },
 ];

 return (
  <SafeAreaView style={globalStyle.container}>
   <ScrollView
    showsVerticalScrollIndicator={false}
    style={globalStyle.container}
   >
    {/* Header */}
    <BrandHeader />

    {/* Categories */}
    <Categories categories={categoryData} />

    {/* New Songs */}
    <CardSongs />

    {/* New Movie */}
    <CardMovies />

    {/* New Apps */}
    <CardApps limits={5} />
    <View style={globalStyle.containerButton}></View>
   </ScrollView>
  </SafeAreaView>
 );
}
