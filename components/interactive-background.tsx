"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export function InteractiveBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const cursorRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      // Store mouse position
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
      };
      
      // Move cursor follower
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
      
      // Move gradient
      const gradientEl = document.getElementById('interactive-gradient');
      if (gradientEl) {
        const containerRect = container.getBoundingClientRect();
        const x = ((e.clientX - containerRect.left) / containerRect.width) * 100;
        const y = ((e.clientY - containerRect.top) / containerRect.height) * 100;
        gradientEl.style.background = `radial-gradient(circle at ${x}% ${y}%, rgba(var(--primary-rgb), 0.15) 0%, rgba(var(--primary-rgb), 0.05) 25%, rgba(var(--background-rgb), 1) 50%)`;
      }
      
      // Move particles
      const particles = document.querySelectorAll(".interactive-particle");
      particles.forEach((particle, i) => {
        const el = particle as HTMLElement;
        const rect = el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        // Distance from mouse to particle center
        const distX = mouseRef.current.x - centerX;
        const distY = mouseRef.current.y - centerY;
        const distance = Math.sqrt(distX * distX + distY * distY);
        
        // Move away from cursor with distance falloff
        const maxDistance = 200;
        const strength = Math.max(0, 1 - distance / maxDistance);
        const moveX = distX * strength * -0.2;
        const moveY = distY * strength * -0.2;
        
        el.style.transform = `translate(${moveX}px, ${moveY}px)`;
        el.style.opacity = (0.2 + strength * 0.3).toString();
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Generate random positions for particles
  const particles = Array.from({ length: 30 }, (_, i) => {
    return {
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 10 + 4,
      opacity: Math.random() * 0.2 + 0.1,
    };
  });
  
  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Interactive gradient background */}
      <div 
        id="interactive-gradient" 
        className="absolute inset-0 transition-background duration-300 ease-out"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(var(--primary-rgb), 0.15) 0%, rgba(var(--primary-rgb), 0.05) 25%, rgba(var(--background-rgb), 1) 50%)"
        }}
      />
      
      {/* Interactive particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="interactive-particle absolute rounded-full bg-primary/10 backdrop-blur-sm transition-transform duration-300"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
        />
      ))}
      
      {/* Cursor follower */}
      <motion.div
        ref={cursorRef}
        className="fixed w-40 h-40 rounded-full bg-primary/5 pointer-events-none -translate-x-1/2 -translate-y-1/2 backdrop-blur-sm z-10"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        style={{
          left: 0,
          top: 0,
        }}
      />
    </div>
  );
}
