"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface InteractiveBackgroundProps {
  isRevealing?: boolean;
}

export function InteractiveBackground({
  isRevealing = false,
}: InteractiveBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMousePresent, setIsMousePresent] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial dimensions
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
      if (!isMousePresent) setIsMousePresent(true);
    };

    const handleMouseLeave = () => {
      setIsMousePresent(false);
    };

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMousePresent]);

  // Calculate the position for the radial gradient as percentage
  const gradientX = (mousePosition.x / dimensions.width) * 100;
  const gradientY = (mousePosition.y / dimensions.height) * 100;

  // Create the radial gradient for the mask - larger and more pronounced when mouse is present
  const maskSize = isMousePresent ? "180px" : "0px";
  const maskImage = isRevealing
    ? "radial-gradient(circle 2000px at center, white 0%, white 100%)"
    : `radial-gradient(
        circle ${maskSize} at ${gradientX}% ${gradientY}%, 
        rgba(255, 255, 255, 1) 0%, 
        rgba(255, 255, 255, 0.8) 30%, 
        rgba(255, 255, 255, 0.3) 60%, 
        transparent 80%
      )`;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
    >
      {/* Dark background */}
      <div className="absolute inset-0 bg-black"></div>

      {/* Moonlight image with flashlight effect */}
      <div
        className="absolute inset-0 transition-opacity duration-300"
        style={{
          WebkitMaskImage: maskImage,
          maskImage: maskImage,
          opacity: isMousePresent || isRevealing ? 1 : 0.7,
        }}
      >
        <Image
          src="/moonlight.jpg"
          alt="Man on an Island at Night, Pushing His Boat into the Water"
          fill
          style={{
            objectFit: "cover",
            objectPosition: "center",
          }}
          priority
        />
      </div>

      {/* Glow effect around cursor - only visible when not revealing full image */}
      {!isRevealing && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePosition.x}px`,
            top: `${mousePosition.y}px`,
            width: "300px",
            height: "300px",
            borderRadius: "50%",
            transform: "translate(-50%, -50%)",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 70%)",
            opacity: isMousePresent ? 1 : 0,
          }}
        ></div>
      )}

      {/* Subtle ambient light to make text readable */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/5 to-background/10 mix-blend-overlay"></div>
    </div>
  );
}
