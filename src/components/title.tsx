import { cn } from "@/lib/utils";

interface ServiceProps {
  children: React.ReactNode;
  className?: string;
}

interface ServiceElementsProps {
  children: React.ReactNode;
  className?: string;
}

export const Title = ({ children, className }: ServiceElementsProps) => {
  return (
    <div
      className={cn(
        "text-3xl leading-snug tracking-tight font-bold text-brand mb-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const SubTitle = ({ children, className }: ServiceElementsProps) => {
  return (
    <p className={cn("text-lg font-medium text-text", className)}>{children}</p>
  );
};

export const Feature = ({ children, className }: ServiceProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

export const FeatureHighlight = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "text-brand text-sm font-semibold flex items-center gap-2 mb-3",
        className
      )}
    >
      {children}
      <div className="w-15 h-[.5px] bg-brand"></div>
    </div>
  );
};
