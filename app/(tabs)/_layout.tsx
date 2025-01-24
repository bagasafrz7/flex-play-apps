import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/utils/Constant";
import TabBar from "@/components/ui/TabBar";

export default function TabLayout() {
 const colorScheme = useColorScheme();

 return (
  <Tabs
   screenOptions={{
    tabBarActiveTintColor: Colors.primary,
    headerShown: false,
    tabBarButton: HapticTab,
    // tabBarBackground: #whie,
    // tabBarStyle: {
    //  position: "absolute",
    //  borderTopLeftRadius: 20,
    //  borderTopRightRadius: 20,
    //  borderTopWidth: 0,
    //  paddingTop: 8,
    //  height: 70,
    // },
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
