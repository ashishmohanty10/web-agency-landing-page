"use client";

import { navLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "./button";

export function Navbar() {
  const [buttonVisible, setButtonVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setButtonVisible(true);
      } else {
        setButtonVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="mt-5 fixed top-0 z-50  w-full">
      <div className="min-w-[70rem] w-fit mx-auto flex items-center justify-between border border-black/5 shadow-sm p-2 rounded-full backdrop-blur-sm bg-white/40 transition-all">
        <Link
          href="#"
          className=" rounded-full border border-black/5 overflow-hidden w-fit h-full shadow-2xl"
          style={{ transformOrigin: "50% 50% 0px" }}
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>

        <div
          className="flex items-center gap-x-6 ml-5"
          style={{ transformOrigin: "50% 50% 0px" }}
        >
          {navLinks.map((item) => (
            <ul key={item.label}>
              <Link
                href="#"
                className="flex items-center gap-x-1 hover:scale-105 duration-75 text-text hover:text-black transition-colors  font-semibold text-lg "
              >
                <item.icon className="w-5 h-5" />
                <span className="">{item.label}</span>
              </Link>
            </ul>
          ))}
        </div>

        <div style={{ transformOrigin: "50% 50% 0px" }}>
          {buttonVisible && (
            <Button size="medium" className="ml-5">
              Plan & Pricing
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}
