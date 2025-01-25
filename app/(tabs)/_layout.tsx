import React from "react";
import TabBar from "@/components/ui/TabBar";
import { Tabs } from "expo-router";
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import { Colors } from "@/utils/Constant";

export default function TabLayout() {
 return (
  <Tabs
   screenOptions={{
    tabBarActiveTintColor: Colors.primary,
    headerShown: false,
    tabBarButton: HapticTab,
   }}
   tabBar={(props) => <TabBar {...props} />}
  >
   <Tabs.Screen
    name="index"
    options={{
     title: "Home",
     tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="house.fill" color={color} />
     ),
    }}
   />
   <Tabs.Screen
    name="songs"
    options={{
     title: "Songs",
     tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="music.house.fill" color={color} />
     ),
    }}
   />
   <Tabs.Screen
    name="movie"
    options={{
     title: "Movie",
     tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="movieclapper.fill" color={color} />
     ),
    }}
   />
   <Tabs.Screen
    name="apps"
    options={{
     title: "Apps",
     tabBarIcon: ({ color }) => (
      <IconSymbol size={28} name="apps.ipad" color={color} />
     ),
    }}
   />
  </Tabs>
 );
}
