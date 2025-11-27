import { AddMoreIcon } from "@/components/icons/addmore-icon";
import { Betashares } from "@/components/icons/betashares-icon";
import { BrandingIcon } from "@/components/icons/branding-icon";
import { ChatBaseIcon } from "@/components/icons/chatbase-icon";
import { CopyWriting } from "@/components/icons/copywriting-icon";
import { CustomIcon } from "@/components/icons/custom-icon";
import { FigmaDesign } from "@/components/icons/figma-design";
import { FramerDesign } from "@/components/icons/framer-design-icon";
import { GithubIcon } from "@/components/icons/github-icon";
import { HumataIcon } from "@/components/icons/humata-icon";
import { Icon } from "@/components/icons/icons";
import { InfiniteIcon } from "@/components/icons/infinite-icon";
import { IntegrationIcon } from "@/components/icons/integrations";
import { KreaIcon } from "@/components/icons/krea-icon";
import { LandingPageIcon } from "@/components/icons/landing-page";
import { LoopIcon } from "@/components/icons/loop-icon";
import { OneActiveIcon } from "@/components/icons/one-active-icon";

import { OurWorkIcon } from "@/components/icons/our-work-icon";
import { PauseIcon } from "@/components/icons/pause-icon";
import { ProcessIcon } from "@/components/icons/process-icon";
import { ServiceIcon } from "@/components/icons/service-icon";
import { SlackIcon } from "@/components/icons/slack-icon";
import { SlideDecksIcon } from "@/components/icons/slidedecks-icon";
import { SocialMediaIcon } from "@/components/icons/socialmedia-icon";
import { StartupIcon } from "@/components/icons/startup-icon";
import { TimeIcon } from "@/components/icons/time-icon";
import { UnlimitedRevision } from "@/components/icons/unlimited-revision";
import { WeDeliverIcon } from "@/components/icons/we-deliver-icon";
import { WebsiteDesign } from "@/components/icons/website-design";
import { CircleHelp, Coins } from "lucide-react";
import { Variants } from "motion";

export const navLinks = [
  {
    label: "Services",
    icon: ServiceIcon,
    href: "#services",
  },

  {
    label: "Process",
    icon: ProcessIcon,
    href: "#process",
  },

  {
    label: "Our Work",
    icon: OurWorkIcon,
    href: "#our-work",
  },
  {
    label: "Pricing",
    icon: Coins,
    href: "#pricing",
  },

  {
    label: "FAQ",
    icon: CircleHelp,
    href: "#faq",
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

export const faqs = [
  {
    question: "Why wouldn't I just hire a full-time designer?",
    answer:
      "Our subscription model offers flexibility and cost-effectiveness, allowing you to access a team of designers without the overhead of a full-time hire.",
  },
  {
    question: "How fast will I receive my designs?",
    answer:
      "You can typically expect your designs within 48 hours, depending on the complexity of your request.",
  },
  {
    question: "How do I request designs?",
    answer:
      "Requests can be submitted easily through our user-friendly platform, Trello. Just provide your specifications and any examples you have in mind.",
  },
  {
    question: "What if I don't like the design?",
    answer:
      "We offer revisions to ensure the design meets your expectations. Your feedback is crucial for us to deliver the best results.",
  },
  {
    question: "Is there any design work you don't cover?",
    answer:
      "While we cover a wide range of design services, there may be specific types we don't handle. Please check our service list for details.",
  },
  {
    question: "Are there any refunds if I don't like the service?",
    answer:
      "Customer satisfaction is our priority. If you're not happy with our service, please reach out, and we will work to address your concerns. Refunds may be available based on specific circumstances.",
  },
];

export const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Alex Young",
    designation: "Product Manager at TechFlow",
    src: "/profile1.avif",
  },
  {
    quote:
      "The team delivered an impressive website with remarkable professionalism and creativity. The final result exceeded our expectations.",
    name: "Ava Moreno",
    designation: "Product Manager at TechFlow",
    src: "/profile2.avif",
  },
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Ethan Sawyer",
    designation: "Product Manager at TechFlow",
    src: "/profile3.avif",
  },
];

export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const cardItemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};
