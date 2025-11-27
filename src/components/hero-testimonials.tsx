"use client";

import { testimonials } from "@/lib/constant";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

interface TestimonialsTypes {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export default function HeroTestimonials() {
  return (
    <div className="w-full max-w-md mx-auto p-8 hidden lg:block">
      <Testimonials testimonials={testimonials} />
    </div>
  );
}

function Testimonials({ testimonials }: { testimonials: TestimonialsTypes[] }) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="perspective-1000">
      <div className="flex items-center gap-4 mb-6 transform -rotate-2">
        <button
          onClick={handlePrev}
          className={`p-2 rounded-full transition-all duration-200 hover:bg-gray-100 ${
            active === 0
              ? "text-gray-400 opacity-30 cursor-not-allowed"
              : "text-black hover:scale-110"
          }`}
          disabled={active === 0}
          aria-label="Previous testimonial"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <button
          onClick={handleNext}
          className={`p-2 rounded-full transition-all duration-200 hover:bg-gray-100 ${
            active === testimonials.length - 1
              ? "text-gray-400 opacity-30 cursor-not-allowed"
              : "text-black hover:scale-110"
          }`}
          disabled={active === testimonials.length - 1}
          aria-label="Next testimonial"
        >
          <ArrowRight className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2 ml-2">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === active ? "w-6 bg-black" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Stacked Cards */}
      <div
        className="relative transform -rotate-2 min-h-[280px]"
        style={{ perspective: "1000px" }}
      >
        {testimonials.map((testimonial, index) => {
          const isActive = index === active;
          const offset = index - active;

          if (offset < 0) return null;

          return (
            <motion.div
              key={index}
              className="absolute top-0 left-0 right-0 origin-bottom cursor-pointer"
              initial={false}
              animate={{
                y: offset * 5,
                scale: 1 - offset * 0.05,
                opacity: 1 - offset * 0.2,
                zIndex: testimonials.length - offset,
                rotateX: offset * 3,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
              onClick={() => !isActive && setActive(index)}
            >
              <div
                className={`bg-white shadow-md hover:shadow-xl transition-shadow duration-300 p-6 rounded-2xl flex flex-col gap-6 ${
                  isActive ? "border-gray-300" : "border-gray-200"
                }`}
              >
                <div>
                  <p className="text-base leading-relaxed text-gray-700 font-medium">
                    &quot;{testimonial.quote}&quot;
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="rounded-full overflow-hidden w-12 h-12 flex-shrink-0">
                    <img
                      src={testimonial.src}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-600 font-medium">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
