import { View, StyleSheet } from "react-native";
import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import TabBarButton from "./TabBarButton";
import { Colors } from "@/utils/Constant";

interface TabBarProps extends BottomTabBarProps {}

const TabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
 return (
  <View style={styles.tabbar}>
   {state.routes.map((route, index) => {
    const { options } = descriptors[route.key];
    const label =
     options.tabBarLabel !== undefined
      ? options.tabBarLabel
      : options.title !== undefined
      ? options.title
      : route.name;

    if (["_sitemap", "+not-found"].includes(route.name)) return null;

    const isFocused = state.index === index;

    const onPress = () => {
     const event = navigation.emit({
      type: "tabPress",
      target: route.key,
      canPreventDefault: true,
     });

     if (!isFocused && !event.defaultPrevented) {
      // Tambahkan type untuk params
      navigation.navigate(route.name, route.params as Record<string, unknown>);
     }
    };

    const onLongPress = () => {
     navigation.emit({
      type: "tabLongPress",
      target: route.key,
     });
    };

    return (
     <TabBarButton
      key={route.name}
      // style={styles.tabbarItem}
      onPress={onPress}
      onLongPress={onLongPress}
      isFocused={isFocused}
      routeName={route.name}
      color={isFocused ? Colors.primary : Colors.secondary}
      label={label as string}
     />
    );
   })}
  </View>
 );
};

const styles = StyleSheet.create({
 tabbar: {
  position: "absolute",
  bottom: 0,
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "white",
  paddingVertical: 15,
  borderColor: Colors.secondary,
  borderWidth: 0.5,
  borderTopLeftRadius: 20,
  borderTopRightRadius: 20,
 },
});

export default TabBar;
