import { Image, StyleSheet, Text } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";

export default function SongsScreen() {
 return (
  <ParallaxScrollView
   headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
   headerImage={
    <Image
     source={require("@/assets/images/partial-react-logo.png")}
     style={styles.reactLogo}
    />
   }
  >
   <Text>SongsScreen</Text>
  </ParallaxScrollView>
 );
}

const styles = StyleSheet.create({
 reactLogo: {
  height: 178,
  width: 290,
  bottom: 0,
  left: 0,
  position: "absolute",
 },
});
