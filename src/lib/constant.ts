import { AddMoreIcon } from "@/components/icons/addmore-icon";
import { BenefitsIcon } from "@/components/icons/benefits-icon";
import { Betashares } from "@/components/icons/betashares-icon";
import { BrandingIcon } from "@/components/icons/branding-icon";
import { ChatBaseIcon } from "@/components/icons/chatbase-icon";
import { CopyWriting } from "@/components/icons/copywriting-icon";
import { CustomIcon } from "@/components/icons/custom-icon";
import { FigmaDesign } from "@/components/icons/figma-design";
import { FramerDesign } from "@/components/icons/framer-design-icon";
import { FramerMigration } from "@/components/icons/framer-migration-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { HumataIcon } from "@/components/icons/humata-icon";
import { Icon } from "@/components/icons/icons";
import { InfiniteIcon } from "@/components/icons/infinite-icon";
import { IntegrationIcon } from "@/components/icons/integrations";
import { KreaIcon } from "@/components/icons/krea-icon";
import { LandingPageIcon } from "@/components/icons/landing-page";
import { LoopIcon } from "@/components/icons/loop-icon";
import { OneActiveIcon } from "@/components/icons/one-active-icon";
import { OPtimizationIcon } from "@/components/icons/optimization-icon";

import { OurWorkIcon } from "@/components/icons/our-work-icon";
import { PauseIcon } from "@/components/icons/pause-icon";
import { ProcessIcon } from "@/components/icons/process-icon";
import { SEOIcon } from "@/components/icons/seo-icon";
import { ServiceIcon } from "@/components/icons/service-icon";
import { SlackIcon } from "@/components/icons/slack-icon";
import { SlideDecksIcon } from "@/components/icons/slidedecks-icon";
import { SocialMediaIcon } from "@/components/icons/socialmedia-icon";
import { StartupIcon } from "@/components/icons/startup-icon";
import { TestimonialIcon } from "@/components/icons/testimonial-icon";
import { TimeIcon } from "@/components/icons/time-icon";
import { UnlimitedRevision } from "@/components/icons/unlimited-revision";
import { VideoMotion } from "@/components/icons/videomotion-icon";
import { WeDeliverIcon } from "@/components/icons/we-deliver-icon";
import { WebsiteDesign } from "@/components/icons/website-design";

export const navLinks = [
  {
    label: "Services",
    icon: ServiceIcon,
  },

  {
    label: "Process",
    icon: ProcessIcon,
  },

  {
    label: "Benefits",
    icon: BenefitsIcon,
  },

  {
    label: "Our Work",
    icon: OurWorkIcon,
  },

  {
    label: "Testimonials",
    icon: TestimonialIcon,
  },
];

export const icons = [
  { component: Betashares, id: 1 },
  { component: ChatBaseIcon, id: 2 },
  { component: GithubIcon, id: 3 },
  { component: HumataIcon, id: 4 },
  { component: KreaIcon, id: 5 },
  { component: LoopIcon, id: 7 },
];

export const service = [
  {
    label: "Landing Pages",
    icon: LandingPageIcon,
  },
  {
    label: "Integrations",
    icon: IntegrationIcon,
  },
  {
    label: "Slide Decks",
    icon: SlideDecksIcon,
  },
  {
    label: "Social Media",
    icon: SocialMediaIcon,
  },
  {
    label: "Icons",
    icon: Icon,
  },
  {
    label: "Copywriting",
    icon: CopyWriting,
  },
  {
    label: "Optimization",
    icon: OPtimizationIcon,
  },
  {
    label: "SEO",
    icon: SEOIcon,
  },
  {
    label: "Video & Motion Graphics",
    icon: VideoMotion,
  },
  {
    label: "Framer Migration",
    icon: FramerMigration,
  },
];

export const projects = [
  {
    img: "/project1.avif",
    name: "Luma",
    category: "Membership",
    link: "View Project",
  },
  {
    img: "/project2.avif",
    name: "Flux",
    category: "Personal",
    link: "View Project",
  },
  {
    img: "/project3.avif",
    name: "Mellow",
    category: "Ecommerce",
    link: "View Project",
  },
  {
    img: "/project4.avif",
    name: "Folioz",
    category: "Personal",
    link: "View Project",
  },
  {
    img: "/project5.avif",
    name: "Docify",
    category: "Documentation",
    link: "View Project",
  },
  {
    img: "/project6.avif",
    name: "Waitlist2.0",
    category: "Website",
    link: "View Project",
  },
];

export const pricing = [
  {
    icon: StartupIcon,
    plan: "Startup",
    price: "$2,999",
    spotsLeft: 2,
    description:
      "Ideal for innovative startups seeking rapid design solutions to accelerate their growth.",
    features: [
      { icon: FigmaDesign, label: "Figma Design" },
      { icon: InfiniteIcon, label: "Unlimited Requests" },
      { icon: OneActiveIcon, label: "One Active Request" },
      { icon: TimeIcon, label: "48 Hour Delivery" },
      { icon: UnlimitedRevision, label: "Unlimited Revisions" },
      { icon: SlackIcon, label: "Private Slack Channel" },
      { icon: PauseIcon, label: "Pause/Cancel Anytime" },
    ],
    addOn: {
      title: "Framer Development",
      price: "+$749",
    },
    cta: "Get Started Today",
  },
  {
    icon: WeDeliverIcon,
    plan: "Business",
    price: "$5,999",
    label: "Popular",
    description:
      "Suited for businesses seeking strategic design & ideas, paired with the expertise of a senior designer.",
    features: [
      { icon: FigmaDesign, label: "Figma Design" },
      { icon: FramerDesign, label: "Framer Development" },
      { icon: InfiniteIcon, label: "Unlimited Requests" },
      { icon: OneActiveIcon, label: "One Active Request" },
      { icon: TimeIcon, label: "48 Hour Delivery" },
      { icon: UnlimitedRevision, label: "Unlimited Revisions" },
      { icon: SlackIcon, label: "Private Slack Channel" },
      { icon: PauseIcon, label: "Pause/Cancel Anytime" },
    ],
    cta: "Get Started Today",
  },
  {
    icon: CustomIcon,
    plan: "Custom",
    price: "$9,999+/One-Time",
    description:
      "We Offer Extensive Digital Solutions to take your business to the skies!",
    features: [
      { icon: FigmaDesign, label: "Figma Design" },
      { icon: FramerDesign, label: "Framer Development" },
      { icon: BrandingIcon, label: "Branding" },
      { icon: WebsiteDesign, label: "Web/Mobile Apps" },
      { icon: AddMoreIcon, label: "And More..." },
    ],
    cta: "Get a Quote",
  },
];
