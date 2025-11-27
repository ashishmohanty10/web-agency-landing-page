"use client";

import { CircleHelp, Plus } from "lucide-react";
import { Container } from "../container-wrapper";
import { FeatureHighlight } from "../title";
import { Button } from "../button";
import {
  cardItemVariants,
  containerVariants,
  faqs,
  itemVariants,
} from "@/lib/constant";
import { useState } from "react";
import { motion } from "motion/react";

export function FAQ() {
  return (
    <Container className="py-10 w-full lg:flex gap-10">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="xl:w-[40%] h-fit flex flex-col justify-between gap-y-2 w-full"
        id="faq"
      >
        <motion.div variants={itemVariants}>
          <FeatureHighlight>
            <CircleHelp className="text-brand" />
            <p>FAQ</p>
          </FeatureHighlight>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-1 mb-4"
        >
          <p className="text-3xl md:text-5xl font-semibold text-black leading-snug mb-5 col-span-2">
            Frequently Asked Questions!
          </p>

          <div className="border border-black/5 rounded-3xl w-full p-4 space-y-5 flex flex-col justify-between col-span-2">
            <p className="text-md font-semibold">
              Can&apos;t Find Your Answer Here? <br />
              <span className="text-secondary-title">We Can Help Out!</span>
            </p>

            <div className="flex items-center gap-x-3">
              <Button size="small">Send an email</Button>
              <Button size="small" variant="secondary">
                Schedule a call
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="lg:w-[60%] flex flex-col gap-y-5"
      >
        {faqs.map((faq) => (
          <motion.div key={faq.question} variants={cardItemVariants}>
            <FaqList question={faq.question} answer={faq.answer} />
          </motion.div>
        ))}
      </motion.div>
    </Container>
  );
}

interface FaqProps {
  question: string;
  answer: string;
}

function FaqList({ answer, question }: FaqProps) {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <motion.div
      className="border border-black/5 rounded-3xl w-full p-4 cursor-pointer overflow-hidden"
      onClick={handleClick}
      layout
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">{question}</h2>

        <motion.div
          animate={{ rotate: showAnswer ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        >
          <Plus className="text-text" />
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: showAnswer ? "auto" : 0,
          opacity: showAnswer ? 1 : 0,
        }}
        transition={{
          height: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
          opacity: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] },
        }}
        style={{ overflow: "hidden" }}
      >
        <p className="text-lg font-medium text-text mt-2">{answer}</p>
      </motion.div>
    </motion.div>
  );
}
