"use client"
import React, { useState } from "react";
import Image from "next/image";
import { LogoIcon } from "@/shared/assets";
import { Button } from "@/shared/ui/button/button";
import Link from "next/link"; 
import clsx from "clsx";
import { AiOutlineMenu } from "react-icons/ai";
import { Hamburger } from "../hamburger";

interface Props {
  textColor?: "light" | "dark";
}

export const Header = ({ textColor }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={clsx("flex flex-row items-center justify-center absolute left-0 top-0 w-full h-fit z-50 py-10 text-white", {
      "!text-dark": textColor === "dark"
    })}>
      <div className="flex justify-between items-center container">
        <Link href="/home">
          
            <Image src={LogoIcon} alt="logo"/>
         
        </Link>
        <nav className="hidden gap-5 uppercase whitespace-nowrap font-semibold lg:flex">
          <Link href="/how-to">How to</Link>
          <div>Pricing</div>
          <Link href="/guides">Guides</Link>
          <div>Academy</div>
          <div>About us</div>
          <div>Contact us</div>
        </nav>
        <div className="hidden justify-between gap-[20px] lg:flex ">
          <Button title="Sign Up" />
          <Button title="Log In" variant="filled" />
        </div>
        <div className="lg:hidden">
          <AiOutlineMenu onClick={()=>setIsOpen(true)} style={{ width: "30px", height: "30px", color: "#4eb9f4", cursor: 'pointer' }}/>
        </div>
      </div>
      <Hamburger isOpen={isOpen} setIsOpen={setIsOpen}/>
    </header>
  );
};
