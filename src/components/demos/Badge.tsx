
import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "outline";
  className?: string;
  children: React.ReactNode;
}

const Badge = ({ 
  variant = "default", 
  className, 
  children, 
  ...props 
}: BadgeProps) => {
  return (
    <div 
      className={cn(
        "inline-flex items-center rounded-full text-xs font-medium px-2.5 py-0.5",
        variant === "default" ? "bg-primary text-primary-foreground" : "bg-transparent border border-current text-current",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Badge;
