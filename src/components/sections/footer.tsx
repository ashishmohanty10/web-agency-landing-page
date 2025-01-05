"use client";

import { Facebook, Linkedin, SendHorizontal, Twitter } from "lucide-react";
import { Container } from "../container-wrapper";

export function Footer() {
  return (
    <div className="bg-black w-full rounded-t-[5rem] h-[60rem]">
      <Container className="flex flex-col justify-between h-full py-20">
        <div className="w-full flex items-start gap-x-10 ">
          <div className="w-1/2">
            <div>
              <p className="text-5xl font-serif text-white mb-4">
                Try Not To Become A Man Of Success. <br /> Rather A Man Of
                Value.
              </p>

              <div className="flex items-center">
                <div className="w-20 h-[.1rem] bg-white"></div>
                <p className="text-2xl font-serif text-white ml-5">
                  Albert Einstein
                </p>
              </div>
            </div>
          </div>

          <div className="w-1/2">
            <p className="text-4xl text-secondary-title font-semibold ">
              Subscribe to Our Newsletter
            </p>

            <div className="w-full border-b border-white/20 flex items-center justify-between">
              <input
                type="text"
                placeholder="Your Email"
                className="w-full bg-black ring-0 focus:ring-0 shadow-none focus:shadow-none focus:outline-none border-none focus:border-none h-14 md:w-4/5 text-text text-2xl"
              />

              <div className="text-white flex items-center gap-2">
                <SendHorizontal />
                <p className="text-xl font-semibold">Sign Up</p>
              </div>
            </div>
          </div>
        </div>

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
