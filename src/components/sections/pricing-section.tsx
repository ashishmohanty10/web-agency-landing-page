"use client";

import { CircleDollarSign } from "lucide-react";
import { Container } from "../container-wrapper";
import { FeatureHighlight } from "../title";
import {
  cardItemVariants,
  containerVariants,
  itemVariants,
  pricing,
} from "@/lib/constant";
import { cn } from "@/lib/utils";
import { FramerDesign } from "../icons/framer-design-icon";
import { Badge } from "../badge";
import { AddMoreIcon } from "../icons/addmore-icon";
import { Button } from "../button";
import Image from "next/image";
import { motion } from "motion/react";

export function Pricing() {
  return (
    <>
      <Container className="py-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          id="pricing"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center flex-col justify-center space-y-5"
          >
            <FeatureHighlight>
              <div className="w-15 h-[.5px] bg-brand"></div>
              <CircleDollarSign />
              <p>Plans & Pricing</p>
            </FeatureHighlight>

            <p className="text-3xl md:text-5xl font-semibold text-black leading-tight text-center">
              Transparent Pricing,
              <br />
              <span className="text-secondary-title">
                No Surprises Guaranteed{" "}
              </span>
            </p>

            <p className="text-lg text-text text-center max-w-4xl md:max-w-7xl text-balance">
              We offer comprehensive web design and development services,
              including custom solutions, e-commerce platforms, responsive
              designs, and maintenance, as well as digital marketing, SEO, and
              IT consulting services.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 xl:grid-cols-3 py-6 gap-8"
          >
            {pricing.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardItemVariants}
                className="w-full border border-black/10 rounded-2xl p-4 h-full"
              >
                <div className="p-5 rounded-3xl bg-brand/10 w-fit mb-5">
                  <item.icon className=" size-5 text-brand" />
                </div>

                <div className="flex flex-col justify-evenly items-stretch ">
                  <div className="space-y-4 border-b border-black/10">
                    <p className="text-sm text-brand font-semibold">
                      {item.plan}
                    </p>
                    <p
                      className={cn(
                        "text-xs text-text font-medium",
                        idx === 2 && "text-4xl font-semibold text-black"
                      )}
                    >
                      {item.description}
                    </p>

                    <div className="py-4">
                      <p className="text-4xl font-semibold">
                        {item.price}
                        <span className="text-md font-medium">/month</span>
                      </p>
                    </div>
                  </div>

                  <div className="py-5 space-y-4">
                    {item.features.map((data) => (
                      <div
                        key={data.label}
                        className={cn(
                          "flex items-center gap-4 w-full",
                          idx === 2 && "text-7xl font-semibold text-text"
                        )}
                      >
                        <data.icon className=" size-4 text-text" />
                        <p className="text-lg text-text">{data.label}</p>
                      </div>
                    ))}
                  </div>

                  <div>
                    {item.addOn ? (
                      <div className="flex items-center justify-between gap-2 bg-brand/10 rounded-3xl px-2 py-1">
                        <div className="flex items-center  gap-2">
                          <FramerDesign className="text-brand size-4" />
                          <p className="text-sm text-brand font-medium">
                            {item.addOn.title} {item.addOn.price}
                          </p>
                        </div>
                        <Badge className="flex items-center gap-1 bg-gradient-to-tr from-brand to-brand/10">
                          <AddMoreIcon className="w-2 h-2 text-white" />
                          Add
                        </Badge>
                      </div>
                    ) : (
                      ""
                    )}
                  </div>

                  <div
                    className={cn(
                      "flex justify-center pt-5",
                      idx === 2 && "pt-[10rem]"
                    )}
                  >
                    <Button size="large" className="shadow-md shadow-brand/70">
                      Get Started Today
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={itemVariants} className="md:flex w-full gap-5">
            <div className="md:w-1/2 mb-4 md:mb-0 p-4 border border-black/10 rounded-3xl">
              <div className="flex items-center gap-2 mb-5">
                <div className="border border-black/10 rounded-full overflow-hidden w-fit">
                  <Image
                    src="/profile.avif"
                    alt="profile"
                    width={60}
                    height={60}
                  />
                </div>
                <p className="text-3xl text-black font-semibold">Ashley Hall</p>
              </div>

              <p className="font-medium text-md">
                &quot;Ripple Template is a game-changer - fast, flexible,
                flawless, and utterly transformed my workflow.&quot;
              </p>
            </div>

            <motion.div
              variants={itemVariants}
              className="md:w-1/2 p-4 bg-black rounded-3xl flex flex-col justify-between"
            >
              <p className="text-3xl font-semibold text-white leading-normal">
                Still Can&apos;t Decide? <br />
                <span className="text-secondary-title mt-4 text-md">
                  Let Us Help you Make the Right Decision.
                </span>
              </p>

              <div className="space-x-4 flex mt-3 md:mt-0">
                <Button size="small">Send an email</Button>
                <Button size="small" variant="secondary">
                  Schedule a call
                </Button>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </Container>
    </>
  );
}
