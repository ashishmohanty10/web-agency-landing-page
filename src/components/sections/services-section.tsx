import { Button } from "../button";
import { Container } from "../container-wrapper";
import { ServiceIcon } from "../icons/service-icon";
import { WebsiteDesign } from "../icons/website-design";
import { Feature, FeatureHighlight, SubTitle, Title } from "../title";
import Image from "next/image";
import { LogoDesign } from "../icons/logo-design";
import { FramerDesign } from "../icons/framer-design";
import { service } from "@/lib/constant";

export function ServiceSection() {
  return (
    <Container>
      <FeatureHighlight>
        <ServiceIcon className="w-5 h-5" />
        <p>Service</p>
      </FeatureHighlight>

      <div className="w-full md:flex items-center justify-between mb-8">
        <div className="md:w-1/2 text-balance">
          <p className="text-5xl font-semibold text-black leading-snug">
            Visionary Design, Impactful Branding: <br />
            <span className="text-secondary-title">
              Elevating Your Digital Landscape.
            </span>
          </p>
        </div>

        <div className="md:w-1/2 md:p-4 mt-4 md:mt-0">
          <p className="text-lg text-black ">
            We offer comprehensive web design and development services,
            including custom solutions, e-commerce platforms, responsive
            designs, and maintenance, as well as digital marketing, SEO, and IT
            consulting services.
          </p>
        </div>
      </div>

      <div className="md:flex items-center justify-between w-full md:h-[60rem] gap-5 mb-15">
        <div className="md:w-1/2 border border-black/5 rounded-2xl shadow-md hover:shadow-xl h-[60rem] overflow-hidden">
          <Feature className="p-5 space-y-3">
            <Title className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <WebsiteDesign className="font-bold text-brand size-5 md:size-6" />
                <span className="text-md md:text-lg">Website Design</span>
              </div>

              <p className="text-xs md:text-sm uppercase text-secondary-title font-medium">
                3-6 Weeks Delivery
              </p>
            </Title>

            <SubTitle>
              We craft visually stunning, user-friendly websites that drive
              engagement, conversions, and growth, tailored to your brand and
              business goals.
            </SubTitle>

            <Button size="small" variant="secondary">
              View Plan
            </Button>
          </Feature>

          <div className="flex overflow-hidden relative h-fit">
            <Image
              src="/service-img1.avif"
              alt="website-design1"
              width={400}
              height={400}
            />
            <Image
              src="/service-img2.avif"
              alt="website-design2"
              width={400}
              height={400}
              className="absolute top-5 z-10 right-0 rounded-t-xl"
            />
          </div>
        </div>

        <div className="md:w-1/2 h-full flex flex-col gap-y-5 mt-5 md:mt-0 ">
          <div className="h-fit border border-black/5 rounded-2xl shadow-md hover:shadow-xl">
            <Feature className="p-5 space-y-3">
              <Title className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <LogoDesign className="font-bold text-brand w-6 h-6" />
                  <span className="text-md md:text-lg">Logo Design</span>
                </div>

                <p className="text-sm uppercase text-secondary-title font-medium">
                  1 Week Delivery
                </p>
              </Title>

              <SubTitle>
                We create unique, scalable, and memorable logos that capture
                your brand&apos;s essence and convey its message.
              </SubTitle>

              <Button size="small" variant="secondary">
                View Plan
              </Button>
            </Feature>
          </div>

          <div className="h-full flex-1 border border-black/5 rounded-2xl shadow-md hover:shadow-xl overflow-hidden">
            <Feature className="p-5 space-y-3">
              <Title className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FramerDesign className="font-bold text-brand w-6 h-6" />
                  <span className="text-md md:text-lg">Framer Design</span>
                </div>

                <p className="text-sm uppercase text-secondary-title font-medium">
                  2-4 Weeks Delivery
                </p>
              </Title>

              <SubTitle>
                We bring your ideas to life with interactive, user-centered
                Framer designs that simplify complexity and elevate user
                experience.
              </SubTitle>

              <Button size="small" variant="secondary">
                View Plan
              </Button>
            </Feature>

            <div className="flex overflow-hidden relative h-fit">
              <Image
                src="/framer-design1.avif"
                alt="framer-design-img"
                width={400}
                height={400}
                className="mt-10 rounded-t-lg"
              />
              <Image
                src="/framer-design2.avif"
                alt="framer-design-img"
                width={400}
                height={400}
                className="absolute -top-5 right-0 -z-10"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 flex-wrap">
        {service.map((item) => (
          <div
            key={item.label}
            className="py-4 px-5 border border-black/10 rounded-2xl flex items-center gap-2 shadow-md hover:shadow-xl cursor-pointer"
          >
            <item.icon className="text-brand size-4 md:size-5" />
            <p className="text-xs">{item.label}</p>
          </div>
        ))}
      </div>
    </Container>
  );
}
