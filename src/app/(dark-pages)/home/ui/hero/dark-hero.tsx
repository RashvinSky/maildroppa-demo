"use client";
import { DarkHeroItem } from "./dark-hero-item";
import { DarkHeroItems } from "@/api/types";

interface Props {
  items: DarkHeroItems[];
}

export const HomeDarkHero = ({ items }: Props) => {
  return items[0] ? <DarkHeroItem item={items[0]} /> : null;
};
