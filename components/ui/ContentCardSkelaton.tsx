import React from "react";
import { View, Dimensions } from "react-native";
import { globalStyle } from "@/lib/style/global";

export function ContentCardSkeleton() {
 const { width } = Dimensions.get("window");
 const cardWidth = width * 0.4; // Adjust based on your design

 return (
  <View style={globalStyle.section}>
   <View style={{ flexDirection: "row", gap: 10 }}>
    {[1, 2, 3].map((item) => (
     <View
      key={item}
      style={{
       width: cardWidth,
       height: 200,
       backgroundColor: "#f0f0f0",
       borderRadius: 10,
       marginRight: 10,
      }}
     >
      <View
       style={{
        width: "100%",
        height: 140,
        backgroundColor: "#e0e0e0",
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
       }}
      />
      <View style={{ padding: 10 }}>
       <View
        style={[
         globalStyle.skeleton,
         { width: "70%", height: 16, marginBottom: 8 },
        ]}
       />
       <View style={[globalStyle.skeleton, { width: "50%", height: 14 }]} />
      </View>
     </View>
    ))}
   </View>
  </View>
 );
}
