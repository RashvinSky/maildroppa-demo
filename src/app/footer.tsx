"use client"
import React, { useEffect, useState } from "react";
import { LogoDarkIcon } from "@/shared/assets";
import { Button } from "@/shared/ui/button/button";
import Image from "next/image";
import { Api } from "@/api";
import type { FooterSection } from "@/api/types";

export const Footer = () => {
  const [footerData, setFooterData] = useState<FooterSection[]>([]);

  useEffect(() => {
    getFooterData();
  }, []);

  const getFooterData = async () => {
    const data = await Api.getFooterData();
    setFooterData(data);
  };

  return (
    <footer className="w-full mt-[100px]">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center md:items-start">
            <Image src={LogoDarkIcon} alt="" width={90} height={90} />
            <div className="mt-10 md:mt-0 md:hidden">
              <Button title="Contact us" className="w-full" />
            </div>
          </div>
          <div className="flex flex-col md:flex-row w-full gap-10">
            {footerData.map((section, index) => (
              <div key={index} className="flex flex-col w-full gap-5">
                <div className="font-semibold text-[1.3rem]">{section.title}</div>
                <ul className="flex flex-col gap-5">
                  {section.list.map((item, idx) => (
                    <li key={idx}>
                      <a 
                        href={item.path} 
                        className="cursor-pointer duration-300 hover:text-green break-words text-secondary lg:font-medium"
                      >
                        {item.item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-5 py-5 text-[0.8rem] font-normal">
          <div>Copyright © 2020-2024 Maildroppa</div>
          <div>Sitemap</div>
        </div>
      </div>
    </footer>
  );
};
