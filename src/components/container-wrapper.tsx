import { cn } from "@/lib/utils";
import React from "react";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cn("max-w-[120rem] mx-auto px-10 py-14", className)}>
      {children}
    </div>
  );
}
