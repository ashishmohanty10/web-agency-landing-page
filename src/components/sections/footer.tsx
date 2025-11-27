"use client";

import { Facebook, Linkedin, SendHorizontal, Twitter } from "lucide-react";
import { Container } from "../container-wrapper";
import { motion } from "motion/react";
import { containerVariants, itemVariants } from "@/lib/constant";

export function Footer() {
  return (
    <div className="bg-black w-full rounded-t-[5rem] h-[60rem]">
      <Container className="flex flex-col justify-between h-full py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full lg:flex items-start gap-x-10"
        >
          <motion.div
            variants={itemVariants}
            className="lg:w-1/2 mb-10 lg:mb-0"
          >
            <div>
              <p className="text-3xl md:text-5xl font-serif text-white mb-4">
                Try Not To Become A Man Of Success. <br /> Rather A Man Of
                Value.
              </p>

              <div className="flex items-center">
                <div className="w-5 h-[.1rem] bg-white"></div>
                <p className="text-xl font-serif text-white ml-5">
                  Albert Einstein
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="lg:w-1/2">
            <p className="text-md md:text-xl text-secondary-title font-semibold ">
              Subscribe to Our Newsletter
            </p>

            <div className="w-full border-b border-white/20 grid grid-cols-3 justify-between">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full bg-black ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none h-14 md:w-4/5 text-text text-md md:text-xl col-span-2"
              />

              <div className="text-white flex items-center gap-2 col-span-1 justify-end">
                <SendHorizontal />
                <p className="text-md md:text-xl font-semibold">Sign Up</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        <div className="flex items-center justify-between">
          <p className="text-white/60 text-xs font-medium">Copyright © 2025 </p>

          <div className="[&_svg]:text-white/60 [&_svg:hover]:text-white [&_svg:hover]:cursor-pointer flex items-center justify-between gap-5">
            <Facebook size={14} />
            <Linkedin size={14} />
            <Twitter size={14} />
          </div>
        </div>
      </Container>
    </div>
  );
}
