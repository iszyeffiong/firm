"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

// Grid Background Component
export interface GridBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  gridSize?: number;
  gridColor?: string;
  darkGridColor?: string;
  showFade?: boolean;
  fadeIntensity?: number;
  children?: React.ReactNode;
}

export const GridBackground = ({
  className,
  children,
  gridSize = 20,
  gridColor = "#e4e4e7",
  darkGridColor = "#262626",
  showFade = true,
  fadeIntensity = 20,
  ...props
}: GridBackgroundProps) => {
  const [currentGridColor, setCurrentGridColor] = useState(gridColor);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkModeActive =
      document.documentElement.classList.contains("dark") || prefersDarkMode;
    setCurrentGridColor(isDarkModeActive ? darkGridColor : gridColor);

    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
          const updatedIsDarkModeActive =
            document.documentElement.classList.contains("dark");
          setCurrentGridColor(
            updatedIsDarkModeActive ? darkGridColor : gridColor
          );
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return function () {
      return observer.disconnect();
    };
  }, [gridColor, darkGridColor]);

  return (
    <div
      className={cn(
        "relative flex h-[50rem] w-full items-center justify-center bg-transparent",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: gridSize + "px " + gridSize + "px", // String concatenation
          backgroundImage:
            "linear-gradient(to right, " +
            currentGridColor +
            " 1px, transparent 1px), " +
            "linear-gradient(to bottom, " +
            currentGridColor +
            " 1px, transparent 1px)", // String concatenation
        }}
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent " +
              fadeIntensity +
              "%, black)", // String concatenation
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent " +
              fadeIntensity +
              "%, black)", // String concatenation
          }}
        />
      )}

      <div className="relative z-20">{children}</div>
    </div>
  );
};

// Dot Background Component
export interface DotBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  dotSize?: number;
  dotColor?: string;
  darkDotColor?: string;
  spacing?: number;
  showFade?: boolean;
  fadeIntensity?: number;
  children?: React.ReactNode;
}

export const DotBackground = ({
  className,
  children,
  dotSize = 1,
  dotColor = "#000",
  darkDotColor = "#fff",
  spacing = 20,
  showFade = true,
  fadeIntensity = 20,
  ...props
}: DotBackgroundProps) => {
  const [currentDotColor, setCurrentDotColor] = useState(dotColor);

  useEffect(() => {
    const prefersDarkMode =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDarkModeActive =
      document.documentElement.classList.contains("dark") || prefersDarkMode;
    setCurrentDotColor(isDarkModeActive ? darkDotColor : dotColor);

    const observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.attributeName === "class") {
          const updatedIsDarkModeActive =
            document.documentElement.classList.contains("dark");
          setCurrentDotColor(updatedIsDarkModeActive ? darkDotColor : dotColor);
        }
      });
    });

    observer.observe(document.documentElement, { attributes: true });

    return function () {
      return observer.disconnect();
    };
  }, [dotColor, darkDotColor]);

  return (
    <div
      className={cn(
        "relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black",
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 animate-pulse"
        style={{
          backgroundSize: spacing + "px " + spacing + "px", // String concatenation
          backgroundImage:
            "radial-gradient(" +
            currentDotColor +
            " " +
            dotSize +
            "px, transparent " +
            dotSize +
            "px)", // String concatenation
          animation: "twinkle 3s ease-in-out infinite",
        }}
      />
      
      {/* Additional twinkling layers for glitter effect */}
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: spacing + "px " + spacing + "px",
          backgroundPosition: spacing/2 + "px " + spacing/2 + "px",
          backgroundImage:
            "radial-gradient(" +
            currentDotColor +
            " " +
            (dotSize * 0.7) +
            "px, transparent " +
            (dotSize * 0.7) +
            "px)",
          animation: "twinkle 2s ease-in-out infinite 0.5s",
          opacity: 0.6,
        }}
      />
      
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: spacing * 1.5 + "px " + spacing * 1.5 + "px",
          backgroundPosition: spacing/3 + "px " + spacing/3 + "px",
          backgroundImage:
            "radial-gradient(" +
            currentDotColor +
            " " +
            (dotSize * 0.5) +
            "px, transparent " +
            (dotSize * 0.5) +
            "px)",
          animation: "twinkle 2.5s ease-in-out infinite 1s",
          opacity: 0.4,
        }}
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage:
              "radial-gradient(ellipse at center, transparent " +
              fadeIntensity +
              "%, black)", // String concatenation
            WebkitMaskImage:
              "radial-gradient(ellipse at center, transparent " +
              fadeIntensity +
              "%, black)", // String concatenation
          }}
        />
      )}

      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default { GridBackground, DotBackground };