import { Href, router } from "expo-router";

export const resetAndNavigate = (newPath: Href<string | object>) => {
 try {
  // Instead of dismissAll, just replace the current screen
  router.push(newPath);
 } catch (error) {
  console.warn("Navigation error:", error);
  // Fallback to push if replace fails
  router.push(newPath);
 }
};
