import React from "react";

interface CirclesProps {
  radius: "sm" | "md" | "lg" | "xl";
  gradientDirection: "bottom" | "left" | "right" | "top";
  position?: string | number;
  opacity?: string;
}

const sizes = {
  sm: "h-[200px] w-[200px]",
  md: "h-[400px] w-[400px]",
  lg: "h-[800px] w-[800px]",
  xl: "h-[1200px] w-[1200px]",
};

const direction = {
  bottom: "bg-gradient-to-b",
  top: "bg-gradient-to-t",
  right: "bg-gradient-to-r",
  left: "bg-gradient-to-l",
};

const Circles = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="z-0 min-h-screen min-w-full absolute top-0 left-0 overflow-hidden">
      {children}
    </div>
  );
};

const Gradient = ({
  radius,
  gradientDirection,
  position,
  opacity,
}: CirclesProps) => {
  return (
    <div
      className={`
      ${sizes[radius]}
      rounded-full 
      ${direction[gradientDirection]} 
      from-cyan-500 to-teal-100 
      ${opacity}
      absolute ${position}
      motion-safe:animate-spin-slow
      transition-opacity duration-500
    `}
    ></div>
  );
};

Circles.Gradient = Gradient;
export default Circles;
