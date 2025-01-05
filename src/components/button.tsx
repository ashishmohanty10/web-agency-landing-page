import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type ButtonBaseProps = VariantProps<typeof buttonClasses> & {
  children: React.ReactNode;
};

interface ButtonAsAnchorProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

interface ButtonAsButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  href?: never;
}

type ButtonProps = ButtonBaseProps &
  (ButtonAsAnchorProps | ButtonAsButtonProps);

const buttonClasses = cva("relative inline-flex items-center", {
  variants: {
    variant: {
      primary: "bg-brand rounded-full hover:bg-brand/80 text-white",
      secondary:
        "bg-white border border-black/5 rounded-full text-black hover:shadow-lg duration-100 transition-opacity",
    },
    size: {
      small: "text-sm py-1 px-4 font-medium shadow-sm",
      medium: "text-lg py-2 px-4 font-semibold shadow-md",
      large: "text-lg py-3 px-4 font-semibold shadow-md",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <span
    className={cn(
      "border border-black/5 shadow-sm bg-white text-black rounded-full py-2 px-4 w-fit",
      className
    )}
  >
    {children}
  </span>
);

export const Button = ({ children, variant, size, ...props }: ButtonProps) => {
  const classes = buttonClasses({ variant, size, className: props.className });

  if ("href" in props && props.href !== undefined) {
    return (
      <Link {...props} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button {...props} className={classes}>
      {children}
      <div className="ml-4 bg-text/5 border border-black/10 rounded-full p-1">
        <ArrowRight size={16} />
      </div>
    </button>
  );
};
