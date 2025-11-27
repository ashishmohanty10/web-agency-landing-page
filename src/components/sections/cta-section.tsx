import { Button, Highlight } from "../button";
import { Container } from "../container-wrapper";

export function CTA() {
  return (
    <>
      <Container className="py-10">
        <div className="w-full bg-gradient-to-tr from-brand  to-brand/30 rounded-3xl px-5 py-10 shadow-lg hover:shadow-xl">
          <div className="flex flex-col items-baseline justify-end w-full h-full space-y-5">
            <Highlight className="flex items-center gap-x-2 bg-black/10 border border-white/10">
              <div className="size-2 bg-green rounded-full animate-pulse"></div>
              <p className="text-xs font-medium text-white">
                Only 2 Spots Left - Starts at $3k/month
              </p>
            </Highlight>

            <p className="text-white font-semibold text-3xl md:text-5xl">
              Partner with Us and Elevate <br />
              Your Business to New Heights!
            </p>

            <p className="text-sm font-medium text-white">
              Suited for businesses seeking strategic design & ideas, paired
              with the expertise of a senior designer.
            </p>

            <div className="space-x-5 flex">
              <Button>See Plans & Pricing</Button>
              <Button variant="secondary">Schedule a call</Button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
