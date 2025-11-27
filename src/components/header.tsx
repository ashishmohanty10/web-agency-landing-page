"use client";

import { navLinks } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./button";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const { scrollY } = useScroll();
  const [showButton, setShowButton] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setShowButton(latest > 120);
  });

  return (
    <motion.header
      className="mt-5 fixed top-0 z-50 w-full px-4"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.3,
        ease: "easeIn",
      }}
    >
      {/* Desktop */}
      <motion.div className="w-fit mx-auto md:flex items-center justify-between border border-black/5 shadow-sm p-2 rounded-full backdrop-blur-sm bg-white/85 transition-all hidden">
        <Link
          href="#"
          className="rounded-full border border-black/5 overflow-hidden w-fit shadow-2xl"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>

        <div className="flex items-center gap-x-6 ml-5">
          {navLinks.map((item) => (
            <ul key={item.label}>
              <Link
                href="#"
                className="flex items-center gap-x-1 hover:scale-105 duration-75 text-black hover:text-black transition-colors font-semibold text-md"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </ul>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={showButton ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
          transition={{ duration: 0.3 }}
          className={showButton ? "block" : "hidden"}
        >
          <Button size="medium" className="ml-5 text-md">
            Plan & Pricing
          </Button>
        </motion.div>
      </motion.div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-center justify-between border border-black/5 shadow-sm p-3 rounded-full backdrop-blur-sm bg-white/40">
          <Link
            href="#"
            className="rounded-full border border-black/5 overflow-hidden w-fit shadow-2xl"
          >
            <Image
              src="/logo.png"
              alt="logo"
              width={36}
              height={36}
              className="rounded-full"
            />
          </Link>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-black/5 rounded-full transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={
            isMobileMenuOpen ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }
          }
          transition={{ duration: 0.2 }}
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } mt-3 border border-black/5 shadow-lg rounded-3xl backdrop-blur-sm bg-white/95 overflow-hidden`}
        >
          <nav className="flex flex-col p-4">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href="#"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-x-3 p-3 hover:bg-black/5 rounded-xl transition-colors text-text hover:text-black font-semibold"
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            ))}
            <div className="mt-2 pt-2 border-t border-black/5">
              <Button size="medium" className="w-full">
                Plan & Pricing
              </Button>
            </div>
          </nav>
        </motion.div>
      </div>
    </motion.header>
  );
}
