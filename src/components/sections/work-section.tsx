"use client";

import { projects } from "@/lib/constant";
import { Button } from "../button";
import { Container } from "../container-wrapper";
import { OurWorkIcon } from "../icons/our-work-icon";
import { FeatureHighlight } from "../title";
import Image from "next/image";
import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WorkSection() {
  const [showAll, setShowAll] = useState(false);

  const visibleProjects = useMemo(() => {
    return showAll ? projects : projects.slice(0, 4);
  }, [showAll]);

  return (
    <>
      <Container className="py-10">
        <FeatureHighlight>
          <OurWorkIcon className="w-5 h-5" />
          <p>Work</p>
        </FeatureHighlight>

        <div className="mb-14">
          <p className="text-5xl font-semibold text-black leading-snug mb-5">
            A Collection of Projects We&apos;ve Worked On.
            <br />
            <span className="text-secondary-title">
              Delivering $10 Million in Profits to Our Valued Clients.
            </span>
          </p>

          <div className="flex items-center gap-3">
            <Button>See Plans & Pricing</Button>
            <Button variant="secondary">Book an Intro call</Button>
          </div>
        </div>

        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            {visibleProjects.map((items) => (
              <div key={items.name}>
                <div className="border-[1rem] border-white/10 rounded-3xl overflow-hidden group">
                  <Image
                    src={items.img}
                    alt="project images"
                    width={600}
                    height={600}
                    className="group-hover:scale-105 transition-transform"
                  />
                </div>

                <div className="p-4 flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-3xl font-semibold">{items.name}</p>
                    <p className="text-sm font-medium">{items.category}</p>
                  </div>

                  <Link
                    href="#"
                    className="flex items-center justify-between text-text group"
                  >
                    <p className="group-hover:text-black transition-colors">
                      {items.link}
                    </p>
                    <ArrowRight
                      size={15}
                      className="group-hover:text-black transition-colors"
                    />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center text-center">
            <Button onClick={() => setShowAll(!showAll)}>
              {showAll ? "Show Less" : "Show More"}
            </Button>
          </div>
        </div>
      </Container>
    </>
  );
}
