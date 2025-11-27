"use client";

import { containerVariants, itemVariants } from "@/lib/constant";
import { Button, Highlight } from "../button";
import { Container } from "../container-wrapper";
import { motion } from "motion/react";

export function CTA() {
  return (
    <>
      <Container className="py-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full bg-gradient-to-tr from-brand to-brand/30 rounded-3xl px-5 py-10 shadow-lg hover:shadow-xl"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col items-baseline justify-end w-full h-full space-y-5"
          >
            <motion.div variants={itemVariants}>
              <Highlight className="flex items-center gap-x-2 bg-black/10 border border-white/10">
                <div className="size-2 bg-green rounded-full animate-pulse"></div>
                <p className="text-xs font-medium text-white">
                  Only 2 Spots Left - Starts at $3k/month
                </p>
              </Highlight>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-white font-semibold text-3xl md:text-5xl"
            >
              Partner with Us and Elevate <br />
              Your Business to New Heights!
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-sm font-medium text-white"
            >
              Suited for businesses seeking strategic design & ideas, paired
              with the expertise of a senior designer.
            </motion.p>

            <motion.div variants={itemVariants} className="space-x-5 flex">
              <Button>See Plans & Pricing</Button>
              <Button variant="secondary">Schedule a call</Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
}
