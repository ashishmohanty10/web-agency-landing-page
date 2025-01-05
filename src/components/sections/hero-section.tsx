import { Button, Highlight } from "../button";
import { Container } from "../container-wrapper";
import { HeroSubTitle, HeroTitle } from "../hero";
import { icons } from "@/lib/constant";
import { HeroTestimonials } from "../hero-testimonials";
import { ProjectsScroll } from "../projects-scroll";

export function HeroSection() {
  return (
    <div className="w-full h-[calc(100vh-(var(--navbar-height))] pt-[15rem] pb-10">
      <Container className="flex w-full justify-between items-center gap-10">
        <div className="w-[70%] h-full">
          <div className="flex flex-col space-y-5 mb-10">
            <Highlight className="flex items-center gap-x-2">
              <div className="w-2 h-2 bg-green rounded-full"></div>
              <p className="text-sm font-medium text-text">
                Only 2 Spots Left - Starts at $3k/month
              </p>
            </Highlight>

            <HeroTitle>
              Crafting Stunning Websites <br />
              <span className="text-brand">With Unlimited Speed.</span>
            </HeroTitle>

            <HeroSubTitle>
              Bring your vision to life in Framer, from design to launch, in
              record time.
            </HeroSubTitle>
          </div>

          <div className="flex items-center gap-x-3 mb-8">
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
          </div>

          <div className="max-w-3xl">
            <p className="text-text text-xs">Trusted by Leading Brands:</p>
            <div className="flex items-center mask-gradient">
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
          </div>
        </div>
        <HeroTestimonials />
      </Container>

      <ProjectsScroll />
    </div>
  );
}
