"use client";

import { useEffect, useState } from "react";
import { HomeDarkHero } from "./ui/hero/dark-hero";
import { HomeLightHero } from "./ui/hero/light-hero";
import { CreateNewsLetter } from "@/shared/ui/createNewsLetter";
import { Video } from "./ui/video";
import { Api } from "@/api";
import type { DarkHeroItems, HomeLightHeroItem } from "@/api/types";

export default function Home() {
  const [lightItems, setLightItems] = useState<HomeLightHeroItem[]>([]);
  const [darkItems, setDarkItems] = useState<DarkHeroItems[]>([]);

  useEffect(() => {
    getLiteItems()
    getDarkItems()
  }, []);

  const getLiteItems = async () => {
    const items = await Api.getHomeLightItems();
    setLightItems(items);
  };
  const getDarkItems = async () => {
    const items = await Api.getDarkHeroItems();
    setDarkItems(items);
  };

  return (
    <div className="w-full content-center justify-center">
      <HomeDarkHero items={darkItems}/>
      <Video />
      <HomeLightHero items={lightItems} />
      <CreateNewsLetter/>
    </div>
  );
}
