import { IconSymbol } from "@/components/ui/IconSymbol";
import { AntDesign, Feather } from "@expo/vector-icons";

interface IconProps {
 color: string;
 // Tambahkan properti lain yang mungkin digunakan
 size?: number;
}

export const icons: Record<string, (props: IconProps) => JSX.Element> = {
 index: (props: IconProps) => (
  <IconSymbol size={28} name="house.fill" {...props} />
 ),
 songs: (props: IconProps) => (
  <IconSymbol size={28} name="music.house.fill" {...props} />
 ),
 movie: (props: IconProps) => (
  <IconSymbol size={28} name="movieclapper.fill" {...props} />
 ),
 apps: (props: IconProps) => (
  <IconSymbol size={28} name="apps.ipad" {...props} />
 ),
};

// Bisa juga menggunakan enum atau union type untuk nama route
export type RouteNames = keyof typeof icons;
