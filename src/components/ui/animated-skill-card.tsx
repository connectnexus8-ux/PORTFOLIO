'use client';

import { cn } from '@/lib/utils';
import React, { useRef, useState } from 'react';

type AnimatedSkillCardProps = {
  children: React.ReactNode;
  className?: string;
  glowHsl: string;
};

const AnimatedSkillCard = ({ children, className, glowHsl }: AnimatedSkillCardProps) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: -100, y: -100 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => {};

  const handleMouseLeave = () => {};

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn('group relative h-full overflow-hidden rounded-lg border border-border/20 bg-card/60 shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl', className)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${position.x}px ${position.y}px, hsla(${glowHsl}, 0.15), transparent)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        {children}
      </div>
    </div>
  );
};

export default AnimatedSkillCard;
