import { Stack } from "expo-router";

const MovieScreenLayout = () => {
 return (
  <Stack>
   <Stack.Screen name="index" options={{ headerShown: false }} />
  </Stack>
 );
};

export default MovieScreenLayout;
