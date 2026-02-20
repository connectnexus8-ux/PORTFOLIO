'use client';

import React, { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollAnimationProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  animation?: 'fade-in' | 'slide-in-up';
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
  children,
  className,
  animation = 'fade-in',
  delay = 0,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const animationClasses = {
    'fade-in': 'opacity-0 transition-opacity duration-1000 ease-out',
    'slide-in-up': 'opacity-0 translate-y-8 transform transition-all duration-1000 ease-out',
  };

  const visibleClasses = {
    'fade-in': 'opacity-100',
    'slide-in-up': 'opacity-100 translate-y-0',
  };

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all',
        animationClasses[animation],
        isVisible && visibleClasses[animation],
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;
