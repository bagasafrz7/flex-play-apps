import { globalStyle } from "@/lib/style/global";
import { View, Text, TouchableOpacity } from "react-native";
import { ListCard } from "./ui/ListCard";
import { useEffect, useState } from "react";
import { IAppResult } from "@/utils/types/apps.type";
import { getTopApps } from "@/services/apps";
import { Colors } from "@/utils/Constant";
import { ListCardSkeleton } from "./ui/ListCardSkelaton";
import { resetAndNavigate } from "@/utils/Helpers";

interface CardAppsProps {
 limits: number;
}

export function CardApps({ limits = 10 }: CardAppsProps) {
 const [limit, setLimit] = useState<number>(limits);
 const [term, setTerm] = useState<string>("");
 const [data, setData] = useState<IAppResult[]>([]);
 const [loading, setLoading] = useState<boolean>(true);
 const [error, setError] = useState<string | null>(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await getTopApps(term, limit);
    setData(response.results);
   } catch (error) {
    if (error instanceof Error) {
     setError(error.message);
    } else {
     setError("Failed to fetch data");
    }
   } finally {
    setLoading(false);
   }
  };

  fetchData();
 }, []);

 if (error) {
  return (
   <View>
    <Text
     style={[
      {
       color: Colors.secondary,
      },
     ]}
    >
     {error}
    </Text>
   </View>
  );
 }

 return (
  <>
   {loading ? (
    <ListCardSkeleton />
   ) : (
    <View style={[globalStyle.section]}>
     <View style={globalStyle.sectionHeader}>
      <Text style={globalStyle.sectionTitle}>Top Apps</Text>
      <TouchableOpacity>
       <Text style={globalStyle.viewAll}>View All</Text>
      </TouchableOpacity>
     </View>
     {data.map((item) => (
      <ListCard
       title={item.trackName}
       description={item.artistName}
       thumbnail={item.artworkUrl100}
       key={`${item.trackId}`}
       onPress={() => resetAndNavigate(`app/${item.trackId}`)}
      />
     ))}
    </View>
   )}
  </>
 );
}
