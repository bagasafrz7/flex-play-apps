import { Stack } from "expo-router";

const AppsScreenLayout = () => {
 return (
  <Stack>
   <Stack.Screen name="index" options={{ headerShown: false }} />
  </Stack>
 );
};

export default AppsScreenLayout;
