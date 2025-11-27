import { Badge } from "../badge";
import { Container } from "../container-wrapper";
import { ProcessIcon } from "../icons/process-icon";
import { RequestDrawingIcon } from "../icons/request-drawing-icon";
import { SelectPlan } from "../icons/selectplan-icon";
import { WeDeliverIcon } from "../icons/we-deliver-icon";
import { WeStartDev } from "../icons/westart-dev-icon";
import { FeatureHighlight, SubTitle, Title } from "../title";

export function ProcessSection() {
  return (
    <Container>
      <FeatureHighlight>
        <ProcessIcon className="w-5 h-5" />
        <p>PROCESS</p>
      </FeatureHighlight>

      <div className="w-full md:flex items-center justify-between mb-8">
        <div className="md:w-1/2">
          <p className="text-5xl font-semibold text-black leading-snug">
            A Proven & Easy Process to Success: <br />
            <span className="text-secondary-title">
              Simplify, Grow, Thrive.
            </span>
          </p>
        </div>

        <div className="md:w-1/2 md:p-4 mt-4 md:mt-0">
          <p className="text-lg text-black ">
            Our process involves discovery, strategy, design, development,
            testing, and deployment, ensuring a tailored approach to meet your
            unique needs and goals, with transparency and collaboration every
            step of the way.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 justify-between w-full gap-5">
        <div className="w-full border border-black/5 rounded-2xl shadow-md ">
          <div className="flex items-start w-full p-2">
            <div className="flex flex-col justify-between p-5 w-[90%]">
              <div className="p-3 bg-brand/10 rounded-3xl w-fit mb-10">
                <SelectPlan className="size-5 text-brand" />
              </div>

              <div>
                <Title className="text-black font-semibold">
                  Select a Plan.
                </Title>
                <SubTitle>
                  Choose a plan that fits your needs, and we&apos;ll guide you
                  through a seamless design and development process.
                </SubTitle>
              </div>
            </div>

            <Badge>Step 1</Badge>
          </div>
        </div>
        <div className="w-full border border-black/5 rounded-2xl shadow-md">
          <div className="flex items-start w-full p-2">
            <div className="flex flex-col justify-between p-5 w-[90%]">
              <div className="p-3 bg-brand/10 rounded-3xl w-fit mb-10">
                <RequestDrawingIcon className="size-5 text-brand" />
              </div>

              <div>
                <Title className="text-black font-semibold">
                  Request Your Designs.
                </Title>
                <SubTitle>
                  Share your vision, and our experts will translate it into
                  stunning, functional designs that meet your business goals.
                </SubTitle>
              </div>
            </div>

            <Badge>Step 2</Badge>
          </div>
        </div>

        <div className="w-full border border-black/5 rounded-2xl shadow-md">
          <div className="flex items-start w-full p-2">
            <div className="flex flex-col justify-between p-5 w-[90%]">
              <div className="p-3 bg-brand/10 rounded-3xl w-fit mb-10">
                <WeStartDev className="size-5 text-brand" />
              </div>

              <div>
                <Title className="text-black font-semibold">
                  We Start Development.
                </Title>
                <SubTitle>
                  Our skilled developers bring your designs to life, crafting a
                  robust and scalable solution.
                </SubTitle>
              </div>
            </div>

            <Badge>Step 3</Badge>
          </div>
        </div>

        <div className="w-full border border-black/5 rounded-2xl shadow-md">
          <div className="flex items-start w-full p-2">
            <div className="flex flex-col justify-between p-5 w-[90%]">
              <div className="p-3 bg-brand/10 rounded-3xl w-fit mb-10">
                <WeDeliverIcon className="size-5 text-brand" />
              </div>

              <div>
                <Title className="text-black font-semibold">
                  And We Deliver.
                </Title>
                <SubTitle>
                  Receive a fully tested, polished & quality product that meets
                  your needs with ongoing support.
                </SubTitle>
              </div>
            </div>

            <Badge>Step 4</Badge>
          </div>
        </div>
      </div>
    </Container>
  );
}
