"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  themeColor?: string;
  onClick?: () => void;
}

export default function TiltCard({ children, themeColor = "#00D1FF", onClick }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 80, damping: 30, mass: 1 });
  const mouseYSpring = useSpring(y, { stiffness: 80, damping: 30, mass: 1 });
  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const rX = ((( e.clientY - rect.top) / rect.height) - 0.5) * -10;
    const rY = ((( e.clientX - rect.left) / rect.width) - 0.5) * 10;
    x.set(rY);
    y.set(rX);
  };

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", "--tilt-color": themeColor } as React.CSSProperties}
      whileHover={{ scale: 1.015, y: -6 }}
      transition={{ type: "spring", stiffness: 100, damping: 25, mass: 1.2 }}
      className="tilt-card-outer"
    >
      <div className="tilt-card-glow" style={{ backgroundColor: themeColor }} />
      <div className="tilt-card-glass" style={{
        background: "linear-gradient(145deg, rgba(30,36,48,0.6) 0%, rgba(15,18,25,0.4) 100%)",
        backdropFilter: "blur(20px)",
        boxShadow: "0 15px 35px rgba(0,0,0,0.4), inset 0 2px 4px rgba(0,0,0,0.4), inset 0 -1px 0 rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.08)",
      }}>
        <div className="tilt-card-glare" style={{ background: "radial-gradient(ellipse at top center, rgba(255,255,255,0.08) 0%, transparent 70%)" }} />
        <div className="tilt-card-border" />
        {children}
      </div>
    </motion.div>
  );
}
