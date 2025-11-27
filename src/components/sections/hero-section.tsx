"use client";

import { Button, Highlight } from "../button";
import { Container } from "../container-wrapper";
import { HeroSubTitle, HeroTitle } from "../hero";
import { containerVariants, icons, itemVariants } from "@/lib/constant";
import { ProjectsScroll } from "../projects-scroll";
import HeroTestimonials from "../hero-testimonials";
import { motion } from "motion/react";

export function HeroSection() {
  return (
    <div
      className="w-full h-[calc(100vh-(var(--navbar-height))] md:pt-[10rem] pb-10"
      id="hero"
    >
      <Container className="xl:flex w-full justify-between items-center gap-10">
        <motion.div
          className="xl:w-[70%] h-full"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="flex flex-col space-y-5 mb-10 items-center justify-center">
            <motion.div variants={itemVariants}>
              <Highlight className="flex items-center gap-x-2">
                <div className="w-2 h-2 bg-green rounded-full animate-pulse"></div>
                <p className="text-sm font-medium text-text">
                  Only 2 Spots Left - Starts at $3k/month
                </p>
              </Highlight>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroTitle>
                Crafting Stunning Websites <br />
                <span className="text-brand">With Unlimited Speed.</span>
              </HeroTitle>
            </motion.div>

            <motion.div variants={itemVariants}>
              <HeroSubTitle>
                Bring your vision to life in Framer, from design to launch, in
                record time.
              </HeroSubTitle>
            </motion.div>
          </div>

          <motion.div
            variants={itemVariants}
            className="md:flex items-center justify-center gap-x-3 mb-8 hidden"
          >
            <Button size="large" className="flex items-center">
              See Plans $ Pricing
            </Button>
            <Button
              size="large"
              variant="secondary"
              className="flex items-center"
            >
              Schedule a call
            </Button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center justify-center gap-x-3 mb-8 md:hidden"
          >
            <Button size="small" className="flex items-center text-xs">
              See Plans $ Pricing
            </Button>
            <Button
              size="small"
              variant="secondary"
              className="flex items-center text-xs tracking-tighter"
            >
              Schedule a call
            </Button>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="text-text text-center text-xs">
              Trusted by Leading Brands:
            </p>
            <div className="flex items-center mask-gradient overflow-hidden">
              <div className="flex items-center gap-x-4 animate-infinite-scroll [--animation-delay:10s]">
                {icons.map((item) => (
                  <div key={item.id}>
                    <item.component className="w-20 h-20 mx-2" />
                  </div>
                ))}

                {icons.map((item) => (
                  <div key={item.id}>
                    <item.component className="w-20 h-20 mx-2" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full"
        >
          <HeroTestimonials />
        </motion.div>
      </Container>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ProjectsScroll />
      </motion.div>
    </div>
  );
}
