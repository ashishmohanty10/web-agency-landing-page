import { cn } from "@/lib/utils";

interface HeroProps {
  children: React.ReactNode;
  className?: string;
}

interface HeroElementsProps {
  children: React.ReactNode;
  className?: string;
}

export const HeroTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <h1
      className={cn(
        "text-5xl md:text-6xl xl:text-9xl leading-snug  tracking-tighter text-balance font-semibold lg:text-left text-center",
        className
      )}
    >
      {children}
    </h1>
  );
};

export const HeroSubTitle = ({ children, className }: HeroElementsProps) => {
  return (
    <p
      className={cn("text-lg font-medium text-center lg:text-left", className)}
    >
      {children}
    </p>
  );
};

export const Hero = ({ children, className }: HeroProps) => {
  return <div className={cn("", className)}>{children}</div>;
};
