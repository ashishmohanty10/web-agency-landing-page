"use client";

import { CircleHelp, Plus } from "lucide-react";
import { Container } from "../container-wrapper";
import { FeatureHighlight } from "../title";
import { Button } from "../button";
import { faqs } from "@/lib/constant";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function FAQ() {
  return (
    <>
      <Container className="py-10 w-full lg:flex gap-10">
        <div className="xl:w-[40%] h-fit flex flex-col justify-between gap-y-2 w-full">
          <FeatureHighlight>
            <CircleHelp className="text-brand" />
            <p>FAQ</p>
          </FeatureHighlight>

          <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-1 mb-4">
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
          </div>
        </div>

        <div className="lg:w-[60%] flex flex-col gap-y-5">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <FaqList question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </Container>
    </>
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
    <div
      className="border border-black/5 rounded-3xl w-full p-4 space-y-5 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">{question}</h2>

        <Plus
          className={cn(
            "text-text",
            showAnswer && "rotate-45 transition-transform delay-75"
          )}
        />
      </div>

      {showAnswer && <p className="text-lg font-medium text-text">{answer}</p>}
    </div>
  );
}
