import { IconSymbolName } from "@/components/ui/IconSymbol";

export interface ICategory {
 name: string;
 icon: IconSymbolName;
 id: string;
 link: string;
}

export interface CategoriesProps {
 categories: ICategory[];
}
