import { Stack } from "expo-router";

const SongsScreenLayout = () => {
 return (
  <Stack>
   <Stack.Screen name="index" options={{ headerShown: false }} />
  </Stack>
 );
};

export default SongsScreenLayout;
