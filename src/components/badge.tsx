import { cn } from "@/lib/utils";

export function Badge({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "text-xs bg-brand rounded-full px-2 py-1 text-white font-semibold",
        className
      )}
    >
      {children}
    </div>
  );
}
