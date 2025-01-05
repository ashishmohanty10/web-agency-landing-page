"use client";

import { testimonials } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function HeroTestimonials() {
  return (
    <div className="w-[30%]">
      <Testimonials testimonials={testimonials} />
    </div>
  );
}

interface TestimonialsProps {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

function Testimonials({
  testimonials,
}: {
  testimonials: TestimonialsProps[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9, rotatex: 45 },
    visible: { opacity: 1, scale: 1, rotatex: 45 },
    exit: { opacity: 0, scale: 0.9, rotatex: 45 },
  };

  return (
    <div>
      <div className="flex items-center gap-5 mb-5 -rotate-3">
        <ArrowLeft
          onClick={handlePrev}
          className={cn(
            "cursor-pointer",
            active === 0 ? "text-text" : "text-black"
          )}
        />
        <ArrowRight
          onClick={handleNext}
          className={cn(
            "cursor-pointer",
            active === testimonials.length - 1 ? "text-text" : "text-black"
          )}
        />
      </div>

      <div className="relative h-40 -rotate-3">
        <AnimatePresence mode="popLayout">
          {testimonials.map(
            (testimonial, index) =>
              index === active && (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="absolute border border-black/10 inset-0 origin-bottom bg-white h-fit p-5 rounded-2xl max-w-lg"
                >
                  <div className="mb-5">
                    <p className="text-md font-medium">{testimonial.quote}</p>
                  </div>

                  <div className="flex items-center gap-5">
                    <div className="rounded-full overflow-hidden w-10 h-10 object-center">
                      <Image
                        src={testimonial.src}
                        alt="image"
                        width={40}
                        height={40}
                        className="rounded-full"
                      />
                    </div>

                    <div>
                      <p className="text-sm font-medium">{testimonial.name}</p>
                      <p className="text-xs font-medium">
                        {testimonial.designation}
                      </p>
                    </div>
                  </div>
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
