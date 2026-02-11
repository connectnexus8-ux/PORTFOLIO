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
  const [transform, setTransform] = useState('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setPosition({ x, y });

    const rotateX = (y - rect.height / 2) / 15;
    const rotateY = (x - rect.width / 2) / -15;
    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`);
  };

  const handleMouseLeave = () => {
    setPosition({ x: -100, y: -100 });
    setTransform('perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)');
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: transform,
        transition: 'transform 0.2s ease-out',
      }}
      className={cn('group relative h-full overflow-hidden rounded-lg border border-border/20 bg-card/60 shadow-lg backdrop-blur-sm', className)}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, hsla(${glowHsl}, 0.2), transparent)`,
        }}
      />
      <div className="relative z-10 flex h-full flex-col">
        {children}
      </div>
    </div>
  );
};

export default AnimatedSkillCard;
